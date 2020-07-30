let temperature = 0
basic.showString("REMOTE")
radio.setGroup(42)
basic.forever(function () {
    temperature = input.temperature()
    radio.sendNumber(temperature)
    basic.showNumber(temperature)
    basic.pause(1000)
})
