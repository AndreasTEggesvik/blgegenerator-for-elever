# Trekk på kode for å få motoren til å spinne

## Åpne motorblokken
Bruk ulik kode for å gjøre dette
```blocks
servos.P0.setAngle(90)
```

## Ferdig kode
```blocks
basic.forever(function () {
        servos.P0.setAngle(30)
        basic.pause(1000)
        servos.P0.setAngle(150)
        basic.pause(1000)
```