basic.forever(function () {
    servos.P0.setAngle(30)
    basic.pause(1000)
    servos.P0.setAngle(150)
    basic.pause(1000)
})
