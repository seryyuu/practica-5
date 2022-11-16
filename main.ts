let amigo = 0
let enemigo = 0
input.onButtonPressed(Button.A, function () {
    amigo.delete()
    amigo += -1
    amigo = game.createSprite(amigo, 2)
})
input.onButtonPressed(Button.B, function () {
    amigo.delete()
    amigo += 1
    amigo = game.createSprite(amigo, 2)
})
basic.forever(function () {
    amigo = 0
    amigo = game.createSprite(amigo, 4)
    enemigo = randint(0, 5)
    enemigo = game.createSprite(enemigo, 0)
    for (let enemigo2 = 0; enemigo2 <= 4; enemigo2++) {
        enemigo2.delete()
        enemigo2 = game.createSprite(enemigo2, enemigo2)
        basic.pause(500)
    }
    if (enemigo.isTouching(amigo)) {
        let Amigo: game.LedSprite = null
        game.addScore(1)
        Amigo.delete()
        enemigo.delete()
    } else {
        game.gameOver()
        basic.showString("" + (game.score()))
    }
})
