import type { Country, HistoryFact } from "../data/countries"

type CountryHistoryProps = {
  country: Country
}

function splitParagraphs(history: string): string[] {
  return history
    .split(/\n\n+/)
    .flatMap((block) => block.split(/(?<=\.)\s+(?=[A-Zა-ჰ])/))
    .map((p) => p.trim())
    .filter(Boolean)
}

export default function CountryHistory({ country }: CountryHistoryProps) {
  const paragraphs = splitParagraphs(country.history)
  const facts: HistoryFact[] = country.historyFacts ?? []

  return (
    <div className="country-history">
      <div className="country-history__hero">
        <div className="country-history__hero-copy">
          <p className="country-history__eyebrow">Historical facts</p>
          <h3 className="country-history__title">
            {country.flag} History of {country.name}
          </h3>
          {country.nameKa && (
            <p className="country-history__ka">{country.nameKa}</p>
          )}
          <p className="country-history__lead">
            Key moments that shaped {country.name} — from ancient kingdoms to the present day.
          </p>
        </div>
        <div className="country-history__hero-media">
          <img src={country.image} alt="" />
          <div className="country-history__hero-fade" />
        </div>
      </div>

      {facts.length > 0 && (
        <div className="country-history__timeline" aria-label="History timeline">
          {facts.map((fact, index) => (
            <article key={`${fact.year}-${fact.title}`} className="country-history__fact">
              <div className="country-history__rail" aria-hidden>
                <span className="country-history__dot" />
                {index < facts.length - 1 && <span className="country-history__line" />}
              </div>
              <div className="country-history__card">
                <p className="country-history__year">{fact.year}</p>
                <h4 className="country-history__fact-title">{fact.title}</h4>
                <p className="country-history__fact-text">{fact.text}</p>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="country-history__story">
        <p className="country-history__story-label">The story</p>
        {paragraphs.map((p) => (
          <p key={p.slice(0, 48)} className="country-history__paragraph">
            {p}
          </p>
        ))}
      </div>
    </div>
  )
}
