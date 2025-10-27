input.onButtonPressed(Button.A, function () {
    if (index <= 0) {
        index = length
    }
    index = index - 1
    basic.showString("" + (chars[index]))
})
input.onGesture(Gesture.ScreenDown, function () {
    name = ""
    index = 0
    basic.showIcon(IconNames.Square)
    basic.pause(50)
    basic.showIcon(IconNames.Diamond)
    basic.pause(50)
    basic.showIcon(IconNames.Target)
    basic.pause(50)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(50)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(50)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(50)
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    index += 1
    if (index >= length) {
        index = 0
    }
    basic.showString("" + (chars[index]))
})
input.onGesture(Gesture.Shake, function () {
    basic.showString(name)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    name = "" + name + chars[index]
    basic.showIcon(IconNames.Yes)
})
let name = ""
let length = 0
let chars = ""
let index = 0
index = -1
chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
length = chars.length
