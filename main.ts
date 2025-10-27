input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (index <= 0) {
        index = length
    }
    
    index = index - 1
    basic.showString("" + chars[index])
})
input.onGesture(Gesture.ScreenDown, function on_gesture_screen_down() {
    
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
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    index += 1
    if (index >= length) {
        index = 0
    }
    
    basic.showString("" + chars[index])
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    basic.showString(name)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    
    name = "" + name + chars[index]
    basic.showIcon(IconNames.Yes)
})
let name = ""
let index = -1
let length = 0
let chars : string[] = []
chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
length = chars.length
