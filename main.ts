input.onButtonPressed(Button.A, function () {
	
})
function drive () {
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.One) < 7) {
        hummingbird.setRotationServo(FourPort.One, -100)
        basic.pause(2000)
    } else {
        hummingbird.setRotationServo(FourPort.One, 100)
        hummingbird.setRotationServo(FourPort.Two, -100)
    }
}
hummingbird.startHummingbird()
music.setVolume(255)
hummingbird.setLED(ThreePort.One, 0)
hummingbird.setLED(ThreePort.Two, 0)
hummingbird.setTriLED(
TwoPort.One,
0,
0,
0
)
hummingbird.setTriLED(
TwoPort.Two,
0,
0,
0
)
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Dial, ThreePort.Three) == 50) {
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        0
        )
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        0
        )
        hummingbird.setLED(ThreePort.Two, 0)
        hummingbird.setLED(ThreePort.One, 0)
    } else {
    	
    }
})
basic.forever(function () {
    led.plotBarGraph(
    hummingbird.getSensor(SensorType.Dial, ThreePort.Three),
    100
    )
})
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Dial, ThreePort.Three) == 100) {
        hummingbird.setTriLED(
        TwoPort.Two,
        255,
        255,
        0
        )
        hummingbird.setTriLED(
        TwoPort.One,
        255,
        0,
        0
        )
        hummingbird.setLED(ThreePort.Two, 100)
        hummingbird.setLED(ThreePort.One, 100)
        basic.pause(500)
        music.playTone(330, music.beat(BeatFraction.Whole))
        hummingbird.setLED(ThreePort.One, 0)
        hummingbird.setLED(ThreePort.Two, 0)
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        0
        )
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        0
        )
        basic.pause(500)
        music.playTone(330, music.beat(BeatFraction.Whole))
        soundExpression.twinkle.play()
        hummingbird.setLED(ThreePort.One, 100)
        hummingbird.setLED(ThreePort.Two, 100)
        hummingbird.setTriLED(
        TwoPort.Two,
        255,
        255,
        0
        )
        hummingbird.setTriLED(
        TwoPort.One,
        255,
        0,
        0
        )
        for (let index = 0; index < 1e+23 * 1e+25; index++) {
            drive()
        }
    } else {
    	
    }
})
basic.forever(function () {
	
})
