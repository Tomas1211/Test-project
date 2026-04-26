import { Osoba, scitaj, odcitaj } from "./index.js"

let osoba1 = new Osoba("Jaromir", 20)
let osoba2 = new Osoba("Marika", 35)

osoba1.predstavSa()
osoba2.predstavSa()

console.log(scitaj(2, 20))
console.log(odcitaj(40, 37))