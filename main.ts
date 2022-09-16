input.onButtonPressed(Button.B, function () {
    Compteur = Compteur / 2
    basic.showNumber(Compteur)
})
let nombre_de_danses = 0
let Compteur = 0
Compteur = 0
let IR_droite = TobbieII.Read_RBlock()
let IR_gauche = TobbieII.Read_LBlock()
basic.showNumber(Compteur)
loops.everyInterval(1000, function () {
    IR_droite = TobbieII.Read_RBlock()
    IR_gauche = TobbieII.Read_LBlock()
})
loops.everyInterval(500, function () {
    if (TobbieII.LBlock(IR_gauche + 7) && TobbieII.RBlock(IR_droite + 7)) {
        Compteur = Compteur * 2
    } else if (TobbieII.LBlock(IR_gauche + 7)) {
        Compteur = Compteur - 1
    } else if (TobbieII.RBlock(IR_droite + 7)) {
        Compteur = Compteur + 1
    }
    basic.showNumber(Compteur)
    if (Compteur >= 10 && nombre_de_danses < 1) {
        TobbieII.dance(8)
        nombre_de_danses = nombre_de_danses + 1
    }
})
