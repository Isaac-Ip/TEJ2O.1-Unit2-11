/* Copyright (c) 2025 Isaac Ip All rights reserved
 *
 * Created by: Isaac Ip
 * Created on: Oct 2025
 * This program uses if, else statements.
*/

// variables
let integer1: number = 0
let integer2: number = 0

// cleanup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// set the variables on loadup
integer1 = randint(0, 99)
integer2 = randint(0, 99)

// show integer 1
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showString("#1: ")
    basic.showNumber(integer1)
    basic.showIcon(IconNames.Happy)
})

// show integer 2
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("#2: ")
    basic.showNumber(integer2)
    basic.showIcon(IconNames.Happy)
})

input.onGesture(Gesture.Shake, function() {
    basic.clearScreen()
    basic.showNumber(integer1)
    if (integer1 > integer2)
        basic.showString(" > ")
    else
        basic.showString(" < ")
    basic.showNumber(integer2)
    basic.showIcon(IconNames.Happy)
})
