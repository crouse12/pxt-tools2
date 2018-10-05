//% weight=0 color=#3CB371 icon="\uf0ad" block="JoyStick"
namespace JoyStick {
    //% blockId="x" block="X axis"
    export function x(): number {
        return pins.analogReadPin(AnalogPin.P2)
    }
    //% blockId="y" block="Y axis"
    export function y(): number {
        return pins.analogReadPin(AnalogPin.P1)
    }
        //% blockId="c" block="Button C"
    export function c(): number {
        return pins.digitalReadPin(DigitalPin.P15)
    }
        //% blockId="d" block="Button D"
    export function d(): number {
        return pins.digitalReadPin(DigitalPin.P14)
    }
        //% blockId="e" block="Button E"
    export function e(): number {
        return pins.digitalReadPin(DigitalPin.P13)
    }
        //% blockId="f" block="Button F"
    export function f(): number {
        return pins.digitalReadPin(DigitalPin.P12)
    }
}
