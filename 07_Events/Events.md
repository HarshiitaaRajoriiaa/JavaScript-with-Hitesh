 ## General Event Properties:
 ### type
*Category: General
* Description: The type of event (e.g., "click", "keydown", "mouseover").
### Timestamp
* Category: General
* Description: The time (in milliseconds) at which the event was created, relative to the epoch time (01 January 1970 00:00:00 UTC).
### defaultPrevented
* Category: General
* Description: A boolean indicating whether the event's default action has been prevented.
## Target Element Properties
### target
* Category: Target Element
* Description: The element that triggered the event.
### toElement
* Category: Target Element
* Description: The element the pointer is moving to (used in mouseover and mouseout events).
s### rcElement

*Category: Target Element
*Description: An alias for target (used in older versions of IE).
### currentTarget

* Category: Target Element
* Description: The element to which the event listener is attached.
Pointer and Mouse Coordinates
### clientX

* Category: Pointer/Mouse Coordinates
* Description: The X-coordinate of the mouse pointer in the viewport when the event was triggered.
### clientY

* Category: Pointer/Mouse Coordinates
* Description: The Y-coordinate of the mouse pointer in the viewport when the event was triggered.
### screenX

* Category: Pointer/Mouse Coordinates
8 Description: The X-coordinate of the mouse pointer relative to the screen when the event was triggered.
### screenY

* Category: Pointer/Mouse Coordinates
* Description: The Y-coordinate of the mouse pointer relative to the screen when the event was triggered.
## Keyboard Modifiers
### altKey

* Category: Keyboard Modifiers
* Description: A boolean indicating whether the Alt key was pressed when the event was triggered.
### ctrlKey

* Category: Keyboard Modifiers
* Description: A boolean indicating whether the Control key was pressed when the event was triggered.
### shiftKey

* Category: Keyboard Modifiers
* Description: A boolean indicating whether the Shift key was pressed when the event was triggered.
### keyCode

* Category: Keyboard Modifiers
* Description: The code of the key that was pressed (deprecated, but still widely used for older browsers).





 ## Type:

Description: The type of event (e.g., "click", "keydown", "mouseover").
 ### 1. Mouse Events
 * click: Triggered when an element is clicked.
* dblclick: Triggered when an element is double-clicked.
* mouseover: Triggered when the mouse pointer is over an element.
 * mouseout: Triggered when the mouse pointer leaves an element.
* mousemove: Triggered when the mouse pointer moves within an element.
 * mousedown: Triggered when the mouse button is pressed.
* mouseup: Triggered when the mouse button is released.
### 2. Keyboard Events
 * keydown: Triggered when a key is pressed.
keypress: Triggered when a key is pressed and held down.
keyup: Triggered when a key is released.
### 3. Form Events
* submit: Triggered when a form is submitted.
* change: Triggered when the value of an element changes.
* input: Triggered when the value of an input element changes.
* focus: Triggered when an element gains focus.
* blur: Triggered when an element loses focus.
### 4. Window Events
* load: Triggered when the whole page has loaded.
* resize: Triggered when the browser window is resized.
* scroll: Triggered when the user scrolls the page.
* unload: Triggered when the user leaves the page.
### 5. Touch Events
* touchstart: Triggered when a touch point is placed on the touch surface.
* touchmove: Triggered when a touch point is moved along the touch surface.
* touchend: Triggered when a touch point is removed from the touch surface.
* touchcancel: Triggered when a touch point is disrupted.
### 6. Drag and Drop Events
* dragstart: Triggered when the user starts dragging an element.
* drag: Triggered while the element is being dragged.
* dragover: Triggered when a dragged element is over a drop target.
* dragenter: Triggered when a dragged element enters a drop target.
* dragleave: Triggered when a dragged element leaves a drop target.
* drop: Triggered when a dragged element is dropped on a drop target.
* dragend: Triggered when the drag operation is ended.
### 7. Clipboard Events
* copy: Triggered when content is copied.
* cut: Triggered when content is cut.
* paste: Triggered when content is pasted.
### 8. Media Events
* play: Triggered when media starts playing.
* pause: Triggered when media is paused.
* ended: Triggered when media playback ends.
* timeupdate: Triggered when the playback position changes.
### 9. Network Events
* online: Triggered when the browser gains network connection.
* offline: Triggered when the browser loses network connection.
### 10. Custom Events
* CustomEvent: Allows the creation and triggering of custom events.
### 11. TimeStamp
* Timestamp: The time (in milliseconds) at which the event was created. It is relative to the epoch time (01 January 1970 00:00:00 UTC).