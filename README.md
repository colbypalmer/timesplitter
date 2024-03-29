# timesplitter.js #

_A jQuery plugin for simplifying time inputs._

Timesplitter was originally developed as a UI improvement to the text inputs generated by Django's [TimeInput widgets](https://docs.djangoproject.com/en/dev/ref/forms/widgets/#django.forms.TimeInput), but it is useful anywhere you need an unobtrusive, degradable way to improve a time input. It is fully styleable using CSS and requires only the use of [jQuery](http://jquery.com).

## Features ##

If the input has a valid time value when timesplitter is assigned to it, that time will also be displayed in the timesplitter widget upon rendering.

A class of "timesplitter_error" is given to invalid fields once a user begins to interact with the widget.

If timesplitter is used on a text input with the "required" attribute set, the new form elements will also have the "required" attribute set on them.

## Using timesplitter ##

*   __Requirements:__

    jQuery (tested with 1.5.2+)
    
*   __Example HTML:__
    
    `<input type="text" class="time_input" value="12:30" />`
    
*   __Example Validation CSS:__

    `.timesplitter_error { background: #ffd6d5; border: 1px solid #a00; }`
    
*   __Example Plugin Import - to be placed after your jQuery import:__

    `<script src='js/timesplitter.js'></script>`

*   __Example Javascript - to be placed in your `$(document).ready`:__
    
    `$(".time_input").timesplitter();`
