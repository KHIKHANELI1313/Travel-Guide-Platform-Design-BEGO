import { useEffect, useRef, useState, type FormEvent, type ReactNode, type Ref } from "react"
import "./auth.css"

// Login / registration — the page behind every "შესვლა" button. It is a demo: accounts live only in this
// browser's storage (the password as a salted SHA-256 hash) and nothing is sent anywhere. The storage keys
// (tw-users, tw-session, tw-wish, tw-cmp) are the ones the rest of TravelWorld uses.

export type AuthLink = "home" | "hotels" | "georgia" | "map" | "admin"

type User = { name: string; email: string; salt: string; hash: string; created: number }
type Session = { name: string; email: string; since: number }
type Msg = { text: string; ok?: boolean } | null

/** Commons thumbnail at the 1280px standard width */
const commons = (path: string, file: string) =>
  `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}/${file}/1280px-${file}`

// the left-hand slideshow: each photo has its own reveal (auth.css) and drift focus
const PHOTOS = [
  { src: commons("4/41", "Khikhani_Fortress%2C_Ajaria%2C_Georgia.jpg"), place: "ხიხანის ციხე, აჭარა", credit: "Boris Kuznetsov / CC BY 2.0", reveal: "zoom", origin: "30% 55%" },
  { src: commons("f/f9", "Ushguli_Svaneti_Georgia.JPG"), place: "უშგული, სვანეთი", credit: "Florian Pinel / CC BY-SA 3.0", reveal: "wipe", origin: "60% 40%" },
  { src: commons("4/4c", "Gergeti_Trinity_Church_09.23.jpg"), place: "გერგეტის სამება, ყაზბეგი", credit: "Supanut Arunoprayote / CC BY 4.0", reveal: "circle", origin: "50% 30%" },
  { src: commons("d/db", "Old_Town_and_Narikala%2C_Tbilisi.jpg"), place: "ძველი თბილისი და ნარიყალა", credit: "Saskia Heijltjes / CC BY-SA 2.0", reveal: "diagonal", origin: "40% 60%" },
  { src: commons("2/20", "2025-05-25_Vardzia_9.jpg"), place: "ვარძია, სამცხე-ჯავახეთი", credit: "Alexkom000 / CC BY 4.0", reveal: "split", origin: "50% 50%" },
  { src: commons("b/bc", "Alaverdi_Monastery%2C_Kakheti%2C_Georgia.jpg"), place: "ალავერდის მონასტერი, კახეთი", credit: "Max Benidze / CC BY-SA 2.0", reveal: "side", origin: "70% 50%" },
]

const read = <T,>(key: string, fallback: T): T => {
  try {
    const v = localStorage.getItem(key) ?? sessionStorage.getItem(key)
    return v ? (JSON.parse(v) as T) : fallback
  } catch {
    return fallback
  }
}
const write = (key: string, value: unknown, session = false) => {
  try { (session ? sessionStorage : localStorage).setItem(key, JSON.stringify(value)) } catch { /* storage blocked */ }
}
const drop = (key: string) => {
  try { localStorage.removeItem(key); sessionStorage.removeItem(key) } catch { /* storage blocked */ }
}
const count = (key: string) => {
  const v = read<unknown>(key, [])
  return Array.isArray(v) ? v.length : 0
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
const emailOk = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s)
const hex = (bytes: Uint8Array) => [...bytes].map((b) => b.toString(16).padStart(2, "0")).join("")

// passwords are never stored as typed: salted SHA-256 (still only a demo — anyone using this browser can read its
// storage). crypto.subtle exists only on https or localhost, so other origins get a message instead.
async function hash(pass: string, salt: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${salt}:${pass}`))
  return hex(new Uint8Array(buf))
}
const newSalt = () => hex(crypto.getRandomValues(new Uint8Array(12)))
const NO_CRYPTO = "ანგარიშისთვის საჭიროა უსაფრთხო კავშირი — გახსენი საიტი https-ით ან localhost-ზე."

/** 0–5: length, letter case (or Georgian letters), digits, symbols, 12+ characters */
const strength = (p: string) =>
  [p.length >= 8, (/[A-ZА-Яა-ჰ]/.test(p) && /[a-z]/.test(p)) || /[ა-ჰ]/.test(p), /\d/.test(p), /[^\w\sა-ჰ]/.test(p), p.length >= 12]
    .filter(Boolean).length

const SERIF = "font-['Noto_Serif_Georgian',Georgia,serif]"
const H2 = `${SERIF} font-semibold text-[28px] leading-tight`
const SUB = "text-[#5A5448] text-sm mt-1.5 mb-2"

const inputCls = (bad?: string) =>
  `w-full px-3.5 py-3 text-[15px] bg-white border rounded-md text-[#1E1D1A] outline-none transition-[border-color,box-shadow] focus:border-[#B8964F] focus:shadow-[0_0_0_3px_rgba(212,177,106,0.22)] ${
    bad ? "border-[#A63A2B]" : "border-[#1E1D1A]/15"
  }`

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[12.5px] font-medium text-[#5A5448] mb-1.5">{label}</label>
      {children}
      {error && <p id={`${id}-err`} className="text-xs text-[#A63A2B] mt-1.5">{error}</p>}
    </div>
  )
}

function PasswordInput({ id, value, onChange, autoComplete, placeholder, error, inputRef }: {
  id: string; value: string; onChange: (v: string) => void; autoComplete: string; placeholder: string
  error?: string; inputRef?: Ref<HTMLInputElement>
}) {
  const [show, setShow] = useState(false)
  return (
    <div className="relative">
      <input
        ref={inputRef}
        id={id}
        type={show ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={!!error || undefined}
        aria-describedby={error ? `${id}-err` : undefined}
        className={`${inputCls(error)} pr-20`}
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 text-xs text-[#5A5448] rounded hover:bg-black/5 cursor-pointer"
      >
        {show ? "დამალვა" : "ჩვენება"}
      </button>
    </div>
  )
}

function Message({ msg }: { msg: Msg }) {
  if (!msg) return null
  return (
    <div
      role="alert"
      className={`text-[13.5px] rounded-md px-3.5 py-2.5 border animate-[auth-up_0.4s_cubic-bezier(0.2,0.7,0.2,1)] ${
        msg.ok ? "bg-[#2F6B4F]/8 text-[#2F6B4F] border-[#2F6B4F]/25" : "bg-[#A63A2B]/8 text-[#A63A2B] border-[#A63A2B]/25"
      }`}
    >
      {msg.text}
    </div>
  )
}

function SubmitButton({ busy, children }: { busy: boolean; children: ReactNode }) {
  return (
    <button
      type="submit"
      disabled={busy}
      className="flex items-center justify-center gap-2.5 w-full p-3.5 rounded-md bg-[#102B25] hover:bg-[#1E4A3F] text-[#FAF9F5] font-medium text-[15px] transition-[background-color,scale] active:scale-[0.99] disabled:opacity-60 disabled:cursor-wait cursor-pointer"
    >
      {busy && <span className="w-4 h-4 rounded-full border-2 border-[#FAF9F5]/35 border-t-[#FAF9F5] animate-spin" />}
      {children}
    </button>
  )
}

function Profile({ session, onGo, onLogout }: { session: Session; onGo: (to: AuthLink) => void; onLogout: () => void }) {
  const days = Math.max(1, Math.ceil((Date.now() - (session.since || Date.now())) / 864e5))
  const stats: Array<[number, string]> = [[count("tw-wish"), "რჩეული"], [count("tw-cmp"), "შედარებაში"], [days, "დღე ჩვენთან"]]
  const links: Array<[AuthLink, string]> = [
    ["hotels", "სასტუმროები"], ["georgia", "საქართველოს კუთხეები"], ["map", "მსოფლიოს რუკა"], ["admin", "ადმინისტრატორის პანელი"],
  ]
  return (
    <div className={`text-center animate-[auth-up_0.6s_cubic-bezier(0.2,0.7,0.2,1)]`}>
      <div className={`w-21 h-21 rounded-full mx-auto mb-3.5 bg-[#102B25] text-[#D4B16A] flex items-center justify-center ${SERIF} text-[34px] font-semibold shadow-[0_0_0_4px_#F5F0E5,0_0_0_5px_#B8964F]`}>
        {session.name.trim().charAt(0).toUpperCase()}
      </div>
      <h2 className={`${H2} mb-0.5`}>{session.name}</h2>
      <p className="text-[#5A5448] text-sm">{session.email}</p>
      <div className="grid grid-cols-3 gap-px bg-[#1E1D1A]/15 border border-[#1E1D1A]/15 rounded-lg overflow-hidden my-6">
        {stats.map(([n, label]) => (
          <div key={label} className="bg-white py-3.5 px-1.5">
            <b className="block font-['Cormorant_Garamond',Georgia,serif] lining-nums text-[28px] font-semibold text-[#B8964F] leading-none">{n}</b>
            <span className="text-[11.5px] text-[#5A5448]">{label}</span>
          </div>
        ))}
      </div>
      <div className="grid gap-2 mb-3">
        {links.map(([to, label]) => (
          <button
            key={to}
            type="button"
            onClick={() => onGo(to)}
            className="flex justify-between px-3.5 py-3 border border-[#1E1D1A]/15 rounded-md text-sm bg-white hover:border-[#B8964F] transition-colors cursor-pointer"
          >
            <span>{label}</span><span>→</span>
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={onLogout}
        className="w-full p-3.5 rounded-md border border-[#1E1D1A]/15 text-[15px] font-medium hover:bg-black/4 transition-colors cursor-pointer"
      >
        გასვლა
      </button>
    </div>
  )
}

export default function AuthPage({ onGo }: { onGo: (to: AuthLink) => void }) {
  const [session, setSession] = useState<Session | null>(() => read<Session | null>("tw-session", null))
  const [tab, setTab] = useState<"login" | "register">("login")

  // focus the first field when the visitor switches tabs (not on arrival, so phones don't pop the keyboard)
  const firstField = useRef<HTMLInputElement>(null)
  const switched = useRef(false)
  const showTab = (t: "login" | "register") => { switched.current = true; setTab(t) }
  useEffect(() => { if (switched.current) firstField.current?.focus() }, [tab])

  const [lEmail, setLEmail] = useState("")
  const [lPass, setLPass] = useState("")
  const [remember, setRemember] = useState(true)
  const [lErr, setLErr] = useState<{ email?: string; pass?: string }>({})
  const [lMsg, setLMsg] = useState<Msg>(null)
  const [lBusy, setLBusy] = useState(false)
  const lPassRef = useRef<HTMLInputElement>(null)

  const [rName, setRName] = useState("")
  const [rEmail, setREmail] = useState("")
  const [rPass, setRPass] = useState("")
  const [rPass2, setRPass2] = useState("")
  const [rErr, setRErr] = useState<{ name?: string; email?: string; pass?: string; pass2?: string }>({})
  const [rMsg, setRMsg] = useState<Msg>(null)
  const [rBusy, setRBusy] = useState(false)
  const score = strength(rPass)

  const signIn = (u: User, keep: boolean) => {
    const s: Session = { name: u.name, email: u.email, since: u.created }
    drop("tw-session")
    write("tw-session", s, !keep)
    setSession(s)
  }

  const register = async (e: FormEvent) => {
    e.preventDefault()
    setRMsg(null)
    const errs = {
      name: rName.trim().length < 2 ? "შეიყვანე სახელი" : undefined,
      email: emailOk(rEmail.trim()) ? undefined : "ელფოსტა არასწორია",
      pass: rPass.length < 8 ? "პაროლი მინიმუმ 8 სიმბოლო უნდა იყოს" : undefined,
      pass2: rPass2 !== rPass || !rPass2 ? "პაროლები არ ემთხვევა" : undefined,
    }
    setRErr(errs)
    if (Object.values(errs).some(Boolean)) return
    const key = rEmail.trim().toLowerCase()
    const all = read<Record<string, User>>("tw-users", {})
    if (all[key]) { setRErr({ email: "ეს ელფოსტა უკვე დარეგისტრირებულია" }); return }
    if (!crypto.subtle) { setRMsg({ text: NO_CRYPTO }); return }
    setRBusy(true)
    await sleep(600)
    const salt = newSalt()
    all[key] = { name: rName.trim(), email: key, salt, hash: await hash(rPass, salt), created: Date.now() }
    write("tw-users", all)
    setRBusy(false)
    signIn(all[key], true)
  }

  const login = async (e: FormEvent) => {
    e.preventDefault()
    setLMsg(null)
    const email = lEmail.trim()
    const errs = { email: emailOk(email) ? undefined : "ელფოსტა არასწორია", pass: lPass ? undefined : "შეიყვანე პაროლი" }
    setLErr(errs)
    if (errs.email || errs.pass) return
    if (!crypto.subtle) { setLMsg({ text: NO_CRYPTO }); return }
    setLBusy(true)
    await sleep(600)
    const u = read<Record<string, User>>("tw-users", {})[email.toLowerCase()]
    const good = !!u && (await hash(lPass, u.salt)) === u.hash
    setLBusy(false)
    if (!good) {
      setLMsg({ text: "ელფოსტა ან პაროლი არასწორია" })
      setLPass("")
      lPassRef.current?.focus()
      return
    }
    signIn(u, remember)
  }

  const logout = () => {
    drop("tw-session")
    setSession(null)
    showTab("login")
  }

  // photo slideshow: the active photo reveals itself over the previous one, which unmounts once covered
  const [photo, setPhoto] = useState(0)
  const [prevPhoto, setPrevPhoto] = useState<number | null>(null)
  const goPhoto = (i: number) => {
    const next = (i + PHOTOS.length) % PHOTOS.length
    if (next === photo) return
    setPrevPhoto(photo)
    setPhoto(next)
  }

  return (
    <div className="min-h-svh grid grid-rows-[auto_1fr] min-[860px]:grid-rows-1 min-[860px]:grid-cols-[1.1fr_1fr] bg-[#102B25] text-[#1E1D1A] font-['Noto_Sans_Georgian',system-ui,sans-serif] antialiased">
      <aside className="relative overflow-hidden text-[#FAF9F5] flex flex-col justify-between gap-8 min-h-[300px] px-5 py-6 min-[860px]:px-11 min-[860px]:py-9">
        <div className="absolute inset-0 isolate" aria-hidden="true">
          {PHOTOS.map((p, i) => {
            const isActive = i === photo
            // mounted: the current photo, the one it is covering, and the next one (preloading, hidden)
            if (!isActive && i !== prevPhoto && i !== (photo + 1) % PHOTOS.length) return null
            return (
              <div
                key={p.src}
                className="auth-photo"
                data-reveal={p.reveal}
                data-active={isActive || undefined}
                style={isActive || i === prevPhoto ? undefined : { visibility: "hidden" }}
                onAnimationEnd={isActive ? (e) => { if (e.target === e.currentTarget) setPrevPhoto(null) } : undefined}
              >
                <img src={p.src} alt="" style={{ transformOrigin: p.origin }} />
              </div>
            )
          })}
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,43,37,0.55),rgba(16,43,37,0.15)_40%,rgba(16,43,37,0.9))]" />

        <button
          type="button"
          onClick={() => onGo("home")}
          className="relative self-start font-['Cormorant_Garamond',Georgia,serif] text-[26px] tracking-[0.14em] cursor-pointer"
        >
          TRAVEL<b className="text-[#D4B16A] font-semibold">WORLD</b>
        </button>

        <div className="relative">
          <h1 className={`${SERIF} font-semibold text-[28px] min-[860px]:text-[clamp(30px,3.6vw,52px)] leading-[1.12] max-w-[13ch] animate-[auth-up_1s_0.2s_cubic-bezier(0.2,0.7,0.2,1)_both]`}>
            შენი მოგზაურობა საქართველოში
          </h1>
          <p className={`max-w-[42ch] mt-3.5 text-[#FAF9F5]/80 text-[15px] leading-relaxed animate-[auth-up_1s_0.35s_cubic-bezier(0.2,0.7,0.2,1)_both]`}>
            შედი ანგარიშში, რომ შეინახო რჩეული სასტუმროები, შეადარო ისინი და დაბრუნდე იქ, სადაც გაჩერდი.
          </p>
          <ul className={`hidden min-[860px]:grid mt-6 gap-2.5 animate-[auth-up_1s_0.5s_cubic-bezier(0.2,0.7,0.2,1)_both]`}>
            {["რჩეული სასტუმროები", "სასტუმროების შედარება", "პირადი პროფილი"].map((item) => (
              <li key={item} className="flex gap-2.5 items-center text-sm text-[#FAF9F5]/90 before:w-4.5 before:h-px before:bg-[#D4B16A]">{item}</li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <p key={photo} className={`hidden min-[860px]:block mb-3 text-[11.5px] text-[#FAF9F5]/85 [text-shadow:0_1px_6px_rgba(0,0,0,0.8)] animate-[auth-up_0.6s_cubic-bezier(0.2,0.7,0.2,1)_both]`}>
            ფოტო: <b className="font-semibold">{PHOTOS[photo].place}</b> · {PHOTOS[photo].credit} · Wikimedia Commons
          </p>
          <div className="flex gap-1.5">
            {PHOTOS.map((p, i) => (
              <button
                key={p.src}
                type="button"
                onClick={() => goPhoto(i)}
                aria-label={`ფოტო ${i + 1}: ${p.place}`}
                aria-current={i === photo || undefined}
                className="group relative h-6 flex-1 cursor-pointer"
              >
                <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 rounded-full bg-[#FAF9F5]/25 group-hover:bg-[#FAF9F5]/45 overflow-hidden transition-colors">
                  {i === photo ? (
                    // 6s per photo: when the bar is full, the next photo comes in
                    <span
                      onAnimationEnd={() => goPhoto(photo + 1)}
                      className="absolute inset-0 origin-left bg-[#D4B16A] motion-safe:animate-[auth-progress_6s_linear_both] motion-reduce:hidden"
                    />
                  ) : i < photo && <span className="absolute inset-0 bg-[#FAF9F5]/70" />}
                </span>
              </button>
            ))}
          </div>
        </div>
      </aside>

      <main className="relative bg-[#F5F0E5] flex items-center justify-center px-4 py-10 min-[860px]:px-6">
        <button
          type="button"
          onClick={() => onGo("home")}
          className="absolute top-3.5 right-4 min-[860px]:top-6.5 min-[860px]:right-7.5 text-[13px] text-[#5A5448] hover:text-[#1E1D1A] border-b border-[#1E1D1A]/15 cursor-pointer"
        >
          ← საიტზე დაბრუნება
        </button>

        <div className={`w-full max-w-[400px] animate-[auth-up_0.8s_cubic-bezier(0.2,0.7,0.2,1)_both]`}>
          {session ? (
            <Profile session={session} onGo={onGo} onLogout={logout} />
          ) : (
            <>
              <div role="tablist" className="relative grid grid-cols-2 border-b border-[#1E1D1A]/15 mb-7">
                {(["login", "register"] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    role="tab"
                    aria-selected={tab === t}
                    onClick={() => showTab(t)}
                    className={`py-3 ${SERIF} font-semibold text-[17px] transition-colors cursor-pointer ${tab === t ? "text-[#1E1D1A]" : "text-[#5A5448]"}`}
                  >
                    {t === "login" ? "შესვლა" : "რეგისტრაცია"}
                  </button>
                ))}
                <i className={`absolute -bottom-px left-0 w-1/2 h-0.5 bg-[#B8964F] transition-transform duration-450 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${tab === "register" ? "translate-x-full" : ""}`} />
              </div>

              {tab === "login" ? (
                <form key="login" noValidate onSubmit={login} className={`grid gap-4 animate-[auth-swap_0.45s_cubic-bezier(0.2,0.7,0.2,1)]`}>
                  <div>
                    <h2 className={H2}>კეთილი იყოს შენი დაბრუნება</h2>
                    <p className={SUB}>შეიყვანე ელფოსტა და პაროლი</p>
                  </div>
                  <Message msg={lMsg} />
                  <Field id="lEmail" label="ელფოსტა" error={lErr.email}>
                    <input
                      ref={firstField}
                      id="lEmail"
                      type="email"
                      autoComplete="email"
                      placeholder="name@example.com"
                      value={lEmail}
                      onChange={(e) => setLEmail(e.target.value)}
                      aria-invalid={!!lErr.email || undefined}
                      aria-describedby={lErr.email ? "lEmail-err" : undefined}
                      className={inputCls(lErr.email)}
                    />
                  </Field>
                  <Field id="lPass" label="პაროლი" error={lErr.pass}>
                    <PasswordInput
                      id="lPass" inputRef={lPassRef} value={lPass} onChange={setLPass}
                      autoComplete="current-password" placeholder="••••••••" error={lErr.pass}
                    />
                  </Field>
                  <div className="flex justify-between items-center text-[13px] text-[#5A5448]">
                    <label className="flex gap-2 items-center cursor-pointer">
                      <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="accent-[#B8964F]" />
                      დამიმახსოვრე
                    </label>
                    <button
                      type="button"
                      onClick={() => setLMsg({ text: "სადემონსტრაციო ვერსიაში პაროლის აღდგენა ელფოსტით შეუძლებელია — შექმენი ახალი ანგარიში." })}
                      className="text-[#1E1D1A] underline underline-offset-3 cursor-pointer"
                    >
                      დაგავიწყდა პაროლი?
                    </button>
                  </div>
                  <SubmitButton busy={lBusy}>შესვლა</SubmitButton>
                </form>
              ) : (
                <form key="register" noValidate onSubmit={register} className={`grid gap-4 animate-[auth-swap_0.45s_cubic-bezier(0.2,0.7,0.2,1)]`}>
                  <div>
                    <h2 className={H2}>შექმენი ანგარიში</h2>
                    <p className={SUB}>რამდენიმე წამი და მზადაა</p>
                  </div>
                  <Message msg={rMsg} />
                  <Field id="rName" label="სახელი" error={rErr.name}>
                    <input
                      ref={firstField}
                      id="rName"
                      type="text"
                      autoComplete="name"
                      placeholder="მაგ. ნინო"
                      value={rName}
                      onChange={(e) => setRName(e.target.value)}
                      aria-invalid={!!rErr.name || undefined}
                      aria-describedby={rErr.name ? "rName-err" : undefined}
                      className={inputCls(rErr.name)}
                    />
                  </Field>
                  <Field id="rEmail" label="ელფოსტა" error={rErr.email}>
                    <input
                      id="rEmail"
                      type="email"
                      autoComplete="email"
                      placeholder="name@example.com"
                      value={rEmail}
                      onChange={(e) => setREmail(e.target.value)}
                      aria-invalid={!!rErr.email || undefined}
                      aria-describedby={rErr.email ? "rEmail-err" : undefined}
                      className={inputCls(rErr.email)}
                    />
                  </Field>
                  <Field id="rPass" label="პაროლი" error={rErr.pass}>
                    <PasswordInput
                      id="rPass" value={rPass} onChange={setRPass}
                      autoComplete="new-password" placeholder="მინიმუმ 8 სიმბოლო" error={rErr.pass}
                    />
                    <div className="h-1 rounded-full bg-[#1E1D1A]/15 mt-2 overflow-hidden" aria-hidden="true">
                      <i
                        className={`block h-full transition-[width,background-color] duration-350 ${
                          score <= 2 ? "bg-[#A63A2B]" : score === 3 ? "bg-[#B8964F]" : "bg-[#2F6B4F]"
                        }`}
                        style={{ width: `${(score / 5) * 100}%` }}
                      />
                    </div>
                  </Field>
                  <Field id="rPass2" label="გაიმეორე პაროლი" error={rErr.pass2}>
                    <PasswordInput
                      id="rPass2" value={rPass2} onChange={setRPass2}
                      autoComplete="new-password" placeholder="••••••••" error={rErr.pass2}
                    />
                  </Field>
                  <SubmitButton busy={rBusy}>რეგისტრაცია</SubmitButton>
                </form>
              )}

              <p className="mt-5.5 text-xs text-[#5A5448] leading-relaxed bg-[#D4B16A]/12 border border-[#D4B16A]/35 rounded-md px-3.5 py-3">
                <b className="text-[#1E1D1A]">სადემონსტრაციო ავტორიზაცია.</b> ანგარიში ინახება მხოლოდ ამ ბრაუზერში (პაროლი — დაშიფრული
                სახით), სერვერზე არაფერი იგზავნება. სხვა მოწყობილობაზე ეს ანგარიში არ იარსებებს. არ გამოიყენო შენი ნამდვილი პაროლი.
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
