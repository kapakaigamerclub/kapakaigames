/**
 * Kapakai Games - Command Generation and Data Reception for ESP32
 */
//% weight=100 color=#0fbc23 icon="\uf1aa"
namespace kapakaigames {
    let lightValue: number = 0
    let pirValue: boolean = false
    let waterValue: number = 0

    /**
     * Define sensor to affect game property
     * @param sensor sensor to use
     * @param property game property to affect
     */
    //% block="set %property to be affected by %sensor"
    export function setSensorEffect(sensor: Sensor, property: GameProperty): string {
        return "SET_SENSOR_EFFECT:" + sensor + ":" + property
    }

    /**
     * Available sensors
     */
    export enum Sensor {
        LIGHT,
        PIR,
        WATER,
    }

    /**
     * Available game properties
     */
    export enum GameProperty {
        SPEED,
        SCORE,
        BRIGHTNESS,
    }

    /**
     * Turn on the LED
     */
    //% block="turn on LED"
    export function turnOnLED(): string {
        return "TURN_ON_LED"
    }

    /**
     * Turn off the LED
     */
    //% block="turn off LED"
    export function turnOffLED(): string {
        return "TURN_OFF_LED"
    }

    /**
     * Turn on the Laser
     */
    //% block="turn on Laser"
    export function turnOnLaser(): string {
        return "TURN_ON_LASER"
    }

    /**
     * Turn off the Laser
     */
    //% block="turn off Laser"
    export function turnOffLaser(): string {
        return "TURN_OFF_LASER"
    }

    /**
     * Open the door
     */
    //% block="open the door"
    export function openTheDoor(): string {
        return "OPEN_THE_DOOR"
    }

    /**
     * Close the door
     */
    //% block="close the door"
    export function closeTheDoor(): string {
        return "CLOSE_THE_DOOR"
    }

    /**
     * Open the window
     */
    //% block="open the window"
    export function openTheWindow(): string {
        return "OPEN_THE_WINDOW"
    }

    /**
     * Close the window
     */
    //% block="close the window"
    export function closeTheWindow(): string {
        return "CLOSE_THE_WINDOW"
    }

    /**
     * Broadcast command to microbit
     * @param command command to send
     */
    //% block="broadcast command %command"
    export function broadcastCommand(command: string): void {
        radio.sendString(command)
    }

    /**
     * On data received from microbit
     * @param handler data handler
     */
    //% block="on data received"
    export function onDataReceived(handler: (light: number, pir: boolean, water: number) => void): void {
        radio.onReceivedString(function (receivedString: string) {
            let data = receivedString.split(":")
            if (data.length == 3) {
                lightValue = parseInt(data[0])
                pirValue = data[1] == "true"
                waterValue = parseInt(data[2])
                handler(lightValue, pirValue, waterValue)
            }
        })
    }

    /**
     * Get light sensor value
     */
    //% block="light value"
    export function getLightValue(): number {
        return lightValue
    }

    /**
     * Get PIR sensor value
     */
    //% block="PIR value"
    export function getPIRValue(): boolean {
        return pirValue
    }

    /**
     * Get water sensor value
     */
    //% block="water value"
    export function getWaterValue(): number {
        return waterValue
    }
}
