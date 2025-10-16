"""
Created by: Isaac Ip
Created on: Oct 2025
This module is a Micro:bit MicroPython program
This program uses if, else statements.
"""

from microbit import *
import random

# variables
integer1 = 0
integer2 = 0

# cleanup
display.clear()
display.show(Image.HAPPY)

# set the variables on loadup
integer1 = random.randint(0, 99)
integer2 = random.randint(0, 99)

while True:
    if button_a.is_pressed():
        display.show("#1: " + integer1)
        display.show(Image.HAPPY)

    if button_b.is_pressed():
        display.show("#2: " + integer2)
        display.show(Image.HAPPY)

    if accelerometer.was_gesture("shake"):
        if integer1 > integer2:
            display.show(integer1 + " > " + integer2)
        else:
            display.show(integer1 + " < " + integer2)
        display.show(Image.HAPPY)
