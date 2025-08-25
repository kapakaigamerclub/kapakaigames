 


> Open this page at [https://kapakaigamerclub.github.io/kapakaigames/](https://kapakaigamerclub.github.io/kapakaigames/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/kapakaigamerclub/kapakaigames** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/kapakaigamerclub/kapakaigames** and click import

#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

# Kapakai Games Arcade MakeCode Extension

This extension allows you to create games in MakeCode Arcade that can interact with external sensors and actuators via an ESP32 and a Middleman micro:bit. The extension is designed to generate commands that are sent to the Middleman micro:bit, which then forwards them to the ESP32. It also receives sensor data from the Middleman micro:bit and makes it available to the game.

## Features

The extension provides the following features:

*   **Sensor Effects:** Define which sensor should affect which game property.
*   **LED Control:** Turn the LED on and off.
*   **Laser Control:** Turn the laser on and off.
*   **Door Control:** Open and close the door.
*   **Window Control:** Open and close the window.
*   **Sensor Data Reception:** Receive sensor data (light, PIR, water) from the Middleman micro:bit.

## Components

To use this extension, you will need the following components:

*   MakeCode Arcade Retro Console
*   Middleman micro:bit
*   ESP32
*   Sensors (light, PIR, water)
*   Actuators (LED, laser, servos for door and window)

## Connections

The sensors and actuators should be connected to the ESP32 as described in the `pinsEsp32.pdf` document.

## How to Use the Extension

1.  Add the extension to your MakeCode Arcade project by using the GitHub URL.
2.  Use the blocks in the `kapakaigames` namespace to:
    *   Define which sensor should affect which game property.
    *   Control the LED and laser.
    *   Open and close the door and window.
    *   Receive sensor data from the Middleman micro:bit.
3.  Use the sensor data to affect the game.

## Available Blocks

### Sensor Effects

*   `setSensorEffect(sensor: Sensor, property: GameProperty): string`: Defines which sensor should affect which game property.
    *   `sensor`: The sensor to use (LIGHT, PIR, WATER).
    *   `property`: The game property to affect (SPEED, SCORE, BRIGHTNESS).

### Actuator Control

*   `turnOnLED(): string`: Generates the command to turn on the LED.
*   `turnOffLED(): string`: Generates the command to turn off the LED.
*   `turnOnLaser(): string`: Generates the command to turn on the laser.
*   `turnOffLaser(): string`: Generates the command to turn off the laser.
*   `openTheDoor(): string`: Generates the command to open the door.
*   `closeTheDoor(): string`: Generates the command to close the door.
*   `openTheWindow(): string`: Generates the command to open the window.
*   `closeTheWindow(): string`: Generates the command to close the window.

### Data Reception

*   `onDataReceived(handler: (light: number, pir: boolean, water: number) => void): void`: Registers a handler to receive sensor data from the Middleman micro:bit.
    *   `light`: The light sensor value.
    *   `pir`: The PIR sensor value (true if motion is detected, false otherwise).
    *   `water`: The water sensor value.
*   `getLightValue(): number`: Returns the current light sensor value.
*   `getPIRValue(): boolean`: Returns the current PIR sensor value.
*   `getWaterValue(): number`: Returns the current water sensor value.

### Communication

*   `broadcastCommand(command: string): void`: Broadcasts a command to the Middleman micro:bit.

## Data Format

The Middleman micro:bit should send sensor data in the following format:

```
Lysverdi:<verdi>;PIR:<verdi>;Vanndamp:<verdi>;
```

Hvor `<verdi>` er sensorverdien som sendes som et tall for lys og vanndamp, og som boolsk verdi for PIR-sensoren (1 for bevegelse oppdaget, 0 for ingen bevegelse).
