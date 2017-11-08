
# Tic-tac-toe
A classic game of tic-tac-toe, meant to be played by two users on the same computer.

You can play here: https://gercks.github.io/EGTicTacToe/

## Technologies used
This game was made using
- HTML
- CSS
- SASS
- Javascript
- jQuery

## How it was made

This game is the first real coding project I have ever done, so had especially humble beginnings. For example, here are the original wireframes:
https://imgur.com/a/qnR8A

Most of this code is different from how I originally imagined and planned it. However, for the most part, I think it is better.

I began by building the basic HTML, CSS, and SASS necessary to display a board. I also used bootstrap to format. 

I then set up my game logic, which uses a jQuery click handler to react to each move made. The click event is passed through several functions that, in order:
  - check if the game is in progress over
  - check if it is the turn of x or o
  - check if the square that was clicked has already been taken
  - if all of the prior conditions are in order, change the html of that square to x or o
  - check if the move just made means the game has been won

I updated my game logic over the course of building the game, but this is the basic structure I was aiming for at the beginning and was able to put together.

Finally, I set up my APIs. Signing up, in, and out, and changing a user's password, were fairly straightforward to put together. However, putting together my game API was a real challenge for me. Fortunately, I was able to set up APIs to create a new game, to track and display the moves made in each game, and to track and display the number of games won by each player.

I ran into several struggles along the way, and found that one of the best ways to problem solve if I wasn't sure what was causing an error was to trace back by steps and console.log in places where I thought the error might have occurred. I was also very fortunate to have help from some very kind and patient fellow students and teachers.

## Improvements for next time

There are several aspects of this game that I plan on updating when I have the chance. First off, the CSS and general design is not ideal in my view, and I would update it to use more appealing fonts and colors, as well as to be formatted in a more cohesive way.

As for my code, the biggest thing I would change would be to connect my index.js file to my events.js file. I was unable to connect the two and am still not sure why, but am confident that with some tinkering I would be able to and thereby organize my code better. I would also like to re-do the function I used to check for a win - it is long and repetitive and I am certain that with more time and effort I could at least halve it in length if not more.

### User Stories

When building this game, I kept the following user stories in mind.

- Easy sign up, in, and out
- Able to change password
- Be able to click on spaces on the gameboard to make a move
- Be able to select another space if an already taken space is accidentally selected
- Be able to choose to play a new game when another ends
- See when and by whom the game has been won
- See how many games have been won by each side
