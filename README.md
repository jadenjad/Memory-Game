# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Jaden Howell

Time spent: 3 hours spent in total

Link to project: 

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Sequence repeats after a mistake

## Video Walkthrough

Here's a walkthrough of implemented user stories:

Winning game normally:
![x](https://cdn.glitch.com/306013a8-6d23-4e73-bf7a-4d9a154a1fe1%2Frec1.gif?v=1616639954688)

Losing game by getting three wrong:
![x](https://cdn.glitch.com/306013a8-6d23-4e73-bf7a-4d9a154a1fe1%2Frec2.gif?v=1616639961930)

Losing game by time:
![x](https://cdn.glitch.com/306013a8-6d23-4e73-bf7a-4d9a154a1fe1%2Frec3.gif?v=1616639969929)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://www.w3schools.com/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I had a little bit of difficulty implementing the speed increase among playback and it probably took about half of my total time working on this project to implement it. Specifically, I didn't know where to update the "delay" variable so that it would work as intended (decreasing the speed of the pause by a set amount each turn), while also keeping the initial 1-second delay between each turn (as I didn't want the turn to almost immediately start after the player had completed a turn). I noticed that 
I eventually ended up just trying different things at the 1 hr mark without really thinking about where exactly everything needed to go. So I decided to get up, walk around, and think through the solution again to try and figure out what I was doing wrong. Stepping away and looking at the bigger picture ended up working well, as I 
thought of the solution mere minutes after just walking around and thinking, which eventually ended up working after another 10 or so minutes. Similarly, I also had a little bit of trouble working on the time limit, as I wasn't really familiar with how it worked in JavaScript. After fiddling around for 10 minutes, I decided to do a little research to save me
some trouble, which solved many of my issues instantaneously.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

After working on this game for a bit, I would like to know about the "upper limit" of what is possible in JavaScript and HTML.
When I think of "good web development" my mind initially goes to Apple's website where the images change as you scroll down the page to basically
create animation and I am now wondering how that is even possible, especially now that I've seen some of the inner workings of web
development. Then, my next question would be about the future of web development: what is being developed or researched to improve
a user's experience and how does one introduce and implement something new? Finally, I would like to know the similarities and differences
between web development, program development, and app development and how to incorporate them into each other seamlessly.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I considered adding some "flare" to the buttons, but I decided against it as I really didn't have a good idea of what I wanted them to look or sound like. So instead, I would like to add
some features that made the gameplay more enjoyable for the user. Ideally, I would like to add modes of difficulty where things like the time-limit and the speed increase would be removed in an
"easy" mode, with them being amped up in a harder difficulty. Additionally, I would like to know how to shrink the buttons in a way that if one's width or height
goes beyond the limit of the screen, it would also shrink the buttons to accommodate.



## License

    Copyright Jaden Howell

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.