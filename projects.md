---
layout: page
title: "Projects"
permalink: /projects/
---

- [LaTeX Jeopardy](https://github.com/kroffo/Jeopardy)
  \- As president of the SUNY Oswego Math Club, I wanted to plan a game night for students and professors. One of the core ideas for the game night was to play Math Jeopardy, but I didn't like any of the Jeopardy games I found online. I was learning LaTeX, so I thought it would be a good exercise to make my own Jeopardy game in LaTeX! 

- [Rakushki](https://ironkladd.github.io/rakushki/index.html)
    \- A spin on the classic connect-3 game, Shariki, called Bombi. Created as a
    group project in CSC380

- [Project BACK](https://github.com/kroffo/ProjectBACK)
  \- Upon completing the text-based game made during my CSC-241
    course, I decided to go ahead and make a much more
    thrilling version of the game. Project BACK is a text-based
    game in which the player moves between rooms, finding keys,
    armor, weapons and creatures. The player must unlock
    chests and doors, equip armor and weapons, and battle enemies
    on a quest to reach the Heaven Room, where the game is won.
    
    The mechanics of the game are all written in Java, but
    the coolest part is that to create a different world with
    different creatures, rooms and items, none of the programming
    must be changed! The world is loaded through an xml file, and
    to create your own version of the game all you need to do
    is follow the guidelines in creating your own xml file.
       
    Eventually I turned this text based game into an actual 
    [video game](http://github.com/kroffo/CSC455)
    as my final project when I took Game Programming. I never
    got the chance to make sprites, so graphically the game looks
    like a bunch of squares moving around through rooms, but
    the game is playable, and perhaps even a little fun!

- [Gravitrocity]({{ site.baseurl }}/gravitrocity)
 \- While in Germany for an Astrophysics internship in the summer
    of 2016 I decided I wanted to make a gravity based game.
    Though it is incomplete, it is possible to play what I have made.

    The project was written in Java using the LibGDX game engine. The
    player can place masses, and gravity will pull them towards each other.
    I have plans to make levels on which the player must place a mass with an
    initial velocity so that fixed masses will pull it around obstacles
    into some goal zone.

    Click [here]({{ site.baseurl }}/gravitrocity) to try out the game.

    Controls are listed below:

    **Click:** Places a blue mass

    **Shift+Click:** Places a fixed yellow mass

    **Space+Click:** Places masses every frame until released

    **v+click:** Sets start position of red mass to be placed with initial
    velocity determined by a second click.

    **a:** Zoom out

    **q:** Zoom in

- [Days and Dates]({{ site.baseurl }}/docs/days-dates.pdf)
 \- A proof I wrote up one night that the number of years it takes for the day
    of the week a date falls on to cycle and repeat is 400. I had been
    wondering this question for several years, but I finally decided to
    actually figure out the answer.

- [Rubik's Cube Simulator]({{ site.baseurl }}/CubeSimulator)
 \- A Rubik's cube simulator I made over the course of 5 days as an introduction
    to three.js. I had wanted to build my own Rubik's Cube Simulator for years,
    so to finally have made it makes me very proud.

    There are two ways to turn the cube.
    1. Type the letter of the face you wish to turn. (Hold shift for counterclockwise turns)
    2. Click a piece and drag it in the direction you want to turn the puzzle. For this,
       make sure the mouse is over a face of the cube when you release. Also, you can simply
       click the center piece of a face to turn it clockwise.

    Use the arrow keys to move the camera, which resides on a sphere around the puzzle.
    X and Z will zoom in and out.
    
    [Source Code](https://github.com/kroffo/CubeSimulator)
    
- [Sudoku Solver]({{ site.baseurl }}/SudokuSolver)
  \- A Sudoku solver I made while at camp for a weekend with my family.
     Simply type the numbers of your sudoku in and hit solve!
     
     Note that this solver does not take into account doubletons, and thus
     will fail to solve difficult sudoku puzzles requiring this clever trick.
     
     For more info, checkout the README and source code [here](https://github.com/kroffo/SudokuSolver)
