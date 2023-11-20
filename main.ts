input.onPinPressed(TouchPin.P0, function () {
    basic.showString("0")
})
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("2")
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("1")
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showArrow(ArrowNames.North)
    basic.pause(500)
    basic.showString("" + (input.lightLevel()))
    basic.pause(500)
    basic.showString("" + (input.temperature()))
    basic.pause(500)
    basic.showString("" + (input.compassHeading()))
    basic.pause(500)
    basic.showString("" + (58 + 2))
    basic.pause(500)
    basic.showString("" + (58 - 2))
    basic.pause(500)
    basic.showString("" + (58 * 2))
    basic.pause(500)
    basic.showString("" + (58 / 2))
    basic.pause(500)
    basic.showString("" + (53 % 8))
    basic.pause(500)
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
})
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(500)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . . . . .
    # # # # #
    `)
basic.pause(500)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(500)
basic.showLeds(`
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    . . . . .
    `)
