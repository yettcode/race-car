hummingbird.startHummingbird()
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.One) < 7) {
        hummingbird.setRotationServo(FourPort.One, -100)
        hummingbird.setRotationServo(FourPort.Two, 100)
    } else {
        hummingbird.setRotationServo(FourPort.One, 100)
    }
})
