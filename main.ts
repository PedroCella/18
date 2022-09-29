let Random = 0
basic.forever(function () {
    Random = randint(5, 10)
    basic.showNumber(Random)
    for (let Index = 0; Index <= Random; Index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(300)
        music.playMelody("C D E G B A C5 C ", 120)
    }
    basic.showString("A BUSCAR!!!")
})
