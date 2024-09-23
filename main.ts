namespace SpriteKind {
    export const Nuvenss = SpriteKind.create()
}
let Passaro: Sprite = null
let Sol: Sprite = null
let NUVENS: Sprite = null
scene.setBackgroundColor(9)
let AVIAO = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 2 2 8 8 8 8 8 . . . . . . . . 
    . . . 8 7 . 7 8 8 8 . . . . . . 
    . 2 2 8 . 7 . 8 8 8 8 8 . . . . 
    . . . 8 7 . 7 8 8 8 . . . . . . 
    . 2 2 8 8 8 8 8 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(AVIAO)
AVIAO.setStayInScreen(true)
game.onUpdateInterval(2000, function () {
    NUVENS = sprites.create(img`
        .........bbbb...........
        .......bb1111bb.........
        ......bb111111bbbbb.....
        ......b1111111ddd11b....
        ......b11111111d1111b...
        ...bbbd11111111d1111b...
        ..b11111111111111111bb..
        .b11111111111111111d11b.
        .b111d11111111111111111b
        cdd1d111111111111111111c
        cdddd11111111111111111dc
        cddbd11111d11111dd111dc.
        .cbbdd111dddd11ddbdddcc.
        .ccbbdddddbdddddddbcc...
        ...cccdddbbbdddddcc.....
        ......ccccccccccc.......
        `, SpriteKind.Nuvenss)
    NUVENS.setPosition(150, randint(-30, 130))
    NUVENS.setVelocity(-69, 5)
    Sol = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . 5 . . b d b . . 5 2 . . 
        . . . . 2 . . c d c . 5 2 . . . 
        . . . . 5 2 5 c 5 c . 2 . . . . 
        . 5 5 5 5 . c d 5 d c . 5 5 5 . 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . 2 . c 5 c . 2 5 . . . 
        . . . 5 2 5 . c d c . . 2 5 . . 
        . . 5 2 . . . b d b . . 5 . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Sol.setPosition(127, 21)
    AVIAO = sprites.create(img`
        ....ffffff..............
        ....ff2cccf.........cf..
        .....ff2cccfff.....c4f..
        ....cc22222222ccccc44f..
        ...c9b244422222ccc442f..
        ..c99944222222222242fc..
        .c2b9912222222222222fcc.
        c222b1111b22222222cc22cf
        f2222221992222ccccccc22f
        .f22222222222c222cffffff
        ..ff2222222c442222ff....
        ....fffffffff442222fc...
        .........f2cff442222c...
        .........fccfffc2222c...
        ..........fc2ffffffff...
        ...........c2fff........
        `, SpriteKind.Player)
    AVIAO.setPosition(180, randint(-20, 120))
    AVIAO.setVelocity(-45, 19)
})
game.onUpdateInterval(2000, function () {
    Passaro = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f . . . . f f f . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . . . f . f . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f . f . . 
        . . . . . . . . . . . . f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Passaro.setPosition(180, randint(-30, 150))
    Passaro.setVelocity(-11, 5)
})
