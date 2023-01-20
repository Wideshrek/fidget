let m8b = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("Hey!")
    music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 120)
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Magic Eight MicroBit")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.Shake, function () {
    m8b = randint(1, 3)
    if (m8b == 1) {
        basic.showString("Yes")
    } else if (m8b == 2) {
        basic.showString("No")
    } else {
        basic.showString("Maybe")
    }
})
