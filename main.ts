input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
})
basic.showString("Connecting to isaac tabliet")
basic.showString("...")
basic.showString("...")
basic.showString("...")
basic.showString("Connected")
music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
basic.pause(5000)
basic.showIcon(IconNames.Happy)
basic.pause(5000)
basic.showString("Security and alarm activated")
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 200) {
        basic.showIcon(IconNames.Angry)
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
    }
})
