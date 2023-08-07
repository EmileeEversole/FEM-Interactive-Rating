# Frontend Mentor - Product preview card component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [GitHub](https://emileeeversole.github.io/FEM-Interactive-Rating/)

## My process

### Built with

- HTML5
- CSS
- JavaScript

### What I learned

This is my fourth Frontend Mentor challenge, but it's my first with JavaScript. I've been learning JavaScript and used it for previous personal projects. It has been about a week and a half to two weeks since I last used it, so I was a little rusty when I first got started. I had to look back at some of my older code because I couldn't quite remember how to format forEach functions, but I started to get the hang of it after that. I am still very much a JavaScript novice, so I'm excited to keep learning! Here's something I was a little extra excited about:

- Displaying the selected rating on the "thank you" page was very new to me. I had only seen one or two somewhat similar examples, but I was able to recognize that slight similarity and figure out what I needed to do. I just created a function that inserts the select button's value, and then called it when the submit button is pressed. 

```
  buttons.forEach(function ratingSubmit() {
    return selection.innerText = `You selected ${button.innerText} out of 5`;
  });
  ...
  submitBtn.addEventListener('click', () => {
  function ratingSubmit () {};
  ...
  });
```

I estimated that this project would take approximately 3 hours to complete. However, I ended up having to stop at around the 2hr 50min mark and take care of some non-coding things, and wasn't able to start back until the next day (Aug 4 2023). My total time on this project was around 4hr 45min. I definitely wasn't happy with this time, but I also recognize that coming back and re-familiarizing myself with the project took a little time. What took up a huge chunk of time though, was me looking up resources and trying out different features that I wanted to add. I realized that I was wasting time and was able to stop myself after a while, but I probably wasted an hour or two just playing around with different possible features. 

### Continued development

I will continue to develop my JavaScript skills, hopefully with some new projects that include aspects that I haven't seen before, so I'll have a hands-on opportunity to learn more. 

It's really important that I start being more strict with myself on mid-project ideas and how much time I spend trying to implement random features that I thought of. It can be way too easy to get sidetracked with all the amazing things we can do with code, so I have to be more disciplined when it comes to staying on task. I think I'm going to start giving myself some time at the beginning of the project, when I sketch out the basics, to think of any other features I'd like to add. From now on, though, I will build the project first and then see if I still feel like adding anything. Most of my ideas come while I'm right in the middle of the original project, so I'll just write those down and not entertain those ideas until I'm finished. 

## Author

- GitHub - [@EmileeEversole](https://github.com/EmileeEversole)
- Frontend Mentor - [@EmileeEversole](https://www.frontendmentor.io/profile/EmileeEversole)

## Acknowledgments

My oldest Great Pyrenees, Sassafras (she'll turn two in October) got hit by a car yesterday. Thankfully she's okay! I wasn't home when it happened, but I'm so thankful to my husband for finding her and making sure she's okay. Huge shout-out to our youngest Pyrenees, Storm, for barking her head off until Caleb came outside, and letting him know that something was wrong! Super grateful for their tracking collars, because Caleb wouldn't have been able to find her without them!