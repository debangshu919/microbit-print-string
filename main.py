def on_button_pressed_a():
    global index
    if index <= 0:
        index = length
    index = index - 1
    basic.show_string("" + (chars[index]))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_screen_down():
    global name, index
    name = ""
    index = 0
    basic.show_icon(IconNames.SQUARE)
    basic.pause(50)
    basic.show_icon(IconNames.DIAMOND)
    basic.pause(50)
    basic.show_icon(IconNames.TARGET)
    basic.pause(50)
    basic.show_icon(IconNames.SMALL_SQUARE)
    basic.pause(50)
    basic.show_icon(IconNames.SMALL_DIAMOND)
    basic.pause(50)
    basic.show_leds("""
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        """)
    basic.pause(50)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        """)
    basic.pause(50)
    basic.show_icon(IconNames.YES)
    basic.pause(1000)
    basic.clear_screen()
input.on_gesture(Gesture.SCREEN_DOWN, on_gesture_screen_down)

def on_button_pressed_ab():
    basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global index
    index += 1
    if index >= length:
        index = 0
    basic.show_string("" + (chars[index]))
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    basic.show_string(name)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_pressed():
    global name
    name = "" + name + chars[index]
    basic.show_icon(IconNames.YES)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

name = ""
length = 0
index = 0
index = -1
chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
length = len(chars)