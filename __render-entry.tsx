import { renderToStaticMarkup } from "react-dom/server"
import GeorgiaAntiqueMap from "./src/components/GeorgiaAntiqueMap"
import fs from "node:fs"
const IMG = (id: string) => `https://sspark.genspark.ai/i/${id}?width=300`
const regions = [
  ["სვანეთი","Svaneti",42.7,43.0,"tower"],["კახეთი","Kakheti",45.62,41.93,"church"],["თბილისი","Tbilisi",44.86,41.66,"fortress"],
  ["აჭარა","Adjara",42.02,41.73,"fortress"],["სამეგრელო","Samegrelo",42.15,42.4,"fortress"],["იმერეთი","Imereti",42.72,42.22,"church"],
  ["თუშეთი","Tusheti",45.63,42.37,"tower"],["ხევსურეთი","Khevsureti",45.13,42.48,"tower"],["ხევი","Khevi",44.66,42.58,"church"],
  ["სამცხე-ჯავახეთი","Samtskhe",43.2,41.52,"cave"],["რაჭა-ლეჩხუმი","Racha",43.2,42.55,"church"],["აფხაზეთი","Abkhazia",41.3,43.1,"church"],
].map(([name,key,lon,lat,icon]) => ({ key: key as string, name: name as string, sub: key as string, img: IMG("fu29FaDzh3624NIW"), desc: "", lon: lon as number, lat: lat as number, icon: icon as any, linked: true }))
const html = renderToStaticMarkup(<div className="gh" data-theme="dark"><div className="wrap" style={{padding:30}}><GeorgiaAntiqueMap regions={regions} medallions={Array.from({length:10},()=>({img:IMG("udCSb0N7UMcdNPVt"),alt:""}))} onOpen={()=>{}} /></div></div>)
const css = ["georgian-heritage.css","georgian-heritage-pages.css","antique-map.css"].map(f=>fs.readFileSync(process.argv[2]+"/src/components/"+f,"utf8")).join("\n")
fs.writeFileSync(process.argv[3], `<html><head><meta charset="utf-8"><style>${css}</style></head><body style="margin:0">${html}</body></html>`)
