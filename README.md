# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - FAQ accordion card solution](#frontend-mentor---faq-accordion-card-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./images/screenshot.png)

### Links

- [Live site](https://mattdimicelli.github.io/FAQ_accordion_card/)

## My process

### Built with

- The New CSS Reset
- Vanilla JS, CSS, and HTML
- Flexbox
- Mobile-first workflow


### What I learned

An interesting aspect of building this website was learning how to make one image appear to "overflow" it's container, while preventing a second image from doing so, so that any bit of it that is positioned beyond the confines of it's parent container becomes hidden.  If one was to simply use a parent container with ```overflow: hidden```, *none* of the children images would be able to overflow.  I ended up utilizing a parent container (div.desktop-illustration-container) to create the border in question.  This parent container was then given two child containers, div.respect-overflow and div.no-overflow.  Each of these child containers were given a child <img>.  ```Overflow: hidden``` was set only on the div.no-overflow.  This setup created the effect described above.

