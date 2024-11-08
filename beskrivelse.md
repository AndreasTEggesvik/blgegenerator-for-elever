# Trekk på kode for å få motoren til å spinne

## Åpne motorblokken
Bruk ulik kode for å gjøre dette
Bruk blokken ``||basic:pause||`` og blokken ``||servos:P0.setAngle(90)||`` block and place it in the value slot of ``||basic:show number||``.
```blocks
servos.P0.setAngle(90)
basic.pause(100)
```

## Ferdig kode
```blocks
basic.forever(function () {
        servos.P0.setAngle(30)
        basic.pause(1000)
        servos.P0.setAngle(150)
        basic.pause(1000)
```