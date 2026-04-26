export default class Osoba {
    constructor(meno, vek) {
        this.meno = meno
        this.vek = vek
    }

    predstavSa() {
        console.log(`Volam sa ${this.meno} a mam ${this.vek} rokov.`)
    }
}   