---
category: Instructor > Autograding
title: Graphics Applications
redirect_from:
  - /instructor/assignment_configuration/graphics
---


### Interfacing With Graphics Applications

It is possible to provide keyboard and mouse input to running student graphics applications.

#### Delay
Delays a number of seconds before the next action is taken. Useful if the results of the previous action may take some time to render.  

**Fields:**
*  **action:** ``"delay"``   
*  **seconds:** An integer or floating point number greater than 0.

```
{
  "action" : "delay",
  "seconds" : 1
}
```

#### Screenshot
Takes a screenshot of the display. Screenshots are stored as .png files. By default, screenshots
are labeled sequentially per test case (e.g. screenshot_0.png), but they may be given custom
names using the ```name``` field.  

**Fields:**
* **action:** ```screenshot```   
* **name:** *(optional)* A unique name for the image. **NOTE: Do not include file extensions**  

```
{
  "action" : "screenshot",
  "name" : "custom_screenshot_name"
}
```

#### GIF
Creates an animated gif of the display. By default, gifs
are labeled sequentially per test case (e.g. gif_0.gif), but they may be given custom
names using the ```name``` field.  

**Fields:**  
* **action:** ```gif```   
* **seconds:**  The duration of the gif in seconds. An integer or floating point number greater than 0.
* **frames_per_second:**  *(optional)* The integer number of frames to be captured per second. Defaults to 10. Max value is 30.
* **preserve_individual_frames:** *(optional)* Boolean. If true, all individual frames are archived as png files. Defaults to false.
* **name:** *(optional)* A unique name for the gif. **NOTE: Do not include file extensions**  

```
{
  "action" : "gif",
  "seconds" : 5,
  "frames_per_second" : 15,
  "preserve_individual_frames" : false,
  "name" : "custom_gif_name"
}
```

#### Type  
Types a sequence of keys one or more times with a delay between each repetition.
By default, the sequence is typed once with a .1 second delay. Keys within
the sequence are pressed sequentially without delay.

**Fields:**
* **action:** ```type```
* **string:** The string to be typed. Note that each character is entered one after the other. To press all keys together, see the ```key``` command.
* **delay_in_seconds:** *(optional)* An integer or floating point number greater than 0. Specifies the delay between repetitions.
* **presses:** *(optional)* An integer greater than zero. Specifies the number of repetitions.

```
{
  "action" : "type",
  "delay_in_seconds" : 1,
  "presses" : 5
}
```

#### Key  
Presses one or more keys. This action may be done over delayed repetitions.  

**Fields:**
* **action:** ```key```
* **key_combination:**  The key combination to be pressed. Keys can be chained together using the character ```+``` (e.g. ```a+b``` presses  ```a``` and ```b``` at the same time). For a list of keys, see the ```xdotool``` key list.  To press keys one after the other, see the ```type``` command.
* **delay_in_seconds:** *(optional)* An integer or floating point number greater than 0. Specifies the delay between repetitions.
* **presses:** *(optional)* An integer greater than zero. Specifies the number of repetitions.

```
{
  "action" : "type",
  "delay_in_seconds" : 1,
  "presses" : 5
}
```


#### Click and Drag  
The standard version of click and drag starts either at the mouse’s current position or at a position specified by the user. If a mouse button has been specified, that button is pressed down at that position, otherwise, the left mouse button is pressed. The mouse is then moved to coordinates specified by the end position, and the held button is released.  

**Fields:**
* **action:** ```click and drag```
* **start_x:** *(optional)* An integer starting x position for the mouse in window coordinates. Values will be clamped to within the window's size. Defaults to zero.
* **start_y:** *(optional)* An integer starting y position for the mouse in window coordinates. Values will be clamped to within the window's size. Defaults to zero.
* **end_x:** *(optional)* An integer ending x position for the mouse in window coordinates. Values will be clamped to within the window's size. Defaults to zero.
* **end_y:** *(optional)* An integer ending y position for the mouse in window coordinates. Values will be clamped to within the window's size. Defaults to zero.
* **mouse_button:** *(optional)* ```left```, ```middle```, or ```right```. The mouse button to be clicked. Defaults to ```left```.

```
{
  "action" : "click and drag",
  "start_x" : 0,
  "start_y" : 0,
  "end_x" : 100,
  "end_y" : 100,
  "mouse_button" : "left"
}
```

#### Click and Drag Delta
The delta version of click and drag starts at the current mouse position, clicks the desired mouse button (or left if one isn’t provided) and then moves a specified number of pixels  before releasing. The mouse may not leave the window bounds. However, the function is wrapping, so it will repeatedly click and drag until the desired distance has been moved.   

**Fields:**
* **action:** ```click and drag```
* **end_x:** *(optional)* The amount of x distance over which the click and drag will move. Defaults to zero.
* **end_y:** *(optional)* The amount of y distance over which the click and drag will move. Defaults to zero.
* **mouse_button:** *(optional)* ```left```, ```middle```, or ```right```. The mouse button to be clicked. Defaults to ```left```.

```
{
  "action" : "click and drag delta",
  "end_x" : 1000,
  "end_y" : 1000,
  "mouse_button" : "left"
}
```

####  Click  
Processes a mousedown and a mouseup of the specified mouse button. Defaults to left click.  

**Fields:**
* **action:** ```click```
* **mouse_button:** *(optional)* ```left```, ```middle```, or ```right```. The mouse button to be clicked. Defaults to ```left```.

```
{
  "action" : "click",
  "mouse_button" : "left"
}
```

#### Mouse Move   
Moves the mouse from its current position to the x and y provided, clamped to the screen. Values are provided in screen coordinates.  

**Fields:**
* **action:** ```mouse move``` or ```move mouse``` or ```move```
* **end_x:** *(optional)* An integer ending x position for the mouse in window coordinates. Values will be clamped to within the window's size. Defaults to zero.
* **end_y:** *(optional)* An integer ending y position for the mouse in window coordinates.Values will be clamped to within the window's size. Defaults to zero.

```
{
  "action" : "move",
  "end_x" : 100,
  "end_y" : 100
}
```

#### Center Mouse   
Moves the mouse to the center of the student’s window.     

**Fields:**
* **action:** ```center```

```
{
  "action" : "center"
}
```

#### Move Mouse to Origin
Moves the mouse to the origin (upper left) of the student’s window.  

**Fields:**
* **action:** ```origin```

```
{
  "action" : "origin"
}
```
