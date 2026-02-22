# gameDev30days

My hobby project for building browser mini-games using HTML, CSS, and JavaScript as part of a 30-day learning challenge.

## Progress Log

### Day 1 - Basic Game Hub Setup

-   Created the first game hub layout with Bootstrap.
-   Added navbar, card-based UI, and a dedicated game area.
-   Connected HTML, CSS, and JavaScript files into one working page.

### Day 2 - Click Counter Core Logic

-   Built click counter logic with score state management.
-   Added score increment function on button click.
-   Implemented reset function to return score to zero.

### Day 3 - Interaction and Level Feedback

-   Added show/hide game area flow to start the game from the hub card.
-   Added level-up feedback alert when score reaches 10.
-   Improved basic user interaction flow in the click game.

### Day 4 - Reaction Time Game (Initial Version)

-   Built reaction-time gameplay with random delay before click prompt.
-   Added early-click detection and fail message.
-   Calculated and displayed reaction time in milliseconds.

### Day 5 - Reaction Score History

-   Added score history list for reaction-time rounds.
-   Stored each round result during runtime.
-   Prepended new scores so latest attempts appear first.

### Day 6 - Reaction Game UI/UX Upgrades

-   Added Start Game button flow and disabled state during active round.
-   Added random game box size each round for variation.
-   Improved overall gameplay pacing and interaction behavior.

### Day 7 - Persistence and Best Time Tracking

-   Added localStorage support for saving reaction scores.
-   Loaded previous scores on page refresh.
-   Added best-time calculation and display.
-   Added click sound effect on successful reaction.

### Day 8 - Number Guess Game

-   Built a number guessing game with a random target between 1 and 50.
-   Added input validation for allowed range.
-   Added live feedback: too high, too low, or correct.
-   Added attempt counter.
-   Added a reset button to start with a new random number.

### Day 9 - Rock Paper Scissors

-   Built a Rock-Paper-Scissors game against computer random choices.
-   Added round result logic (win, lose, draw).
-   Displayed player move and computer move for each round.
-   Added running scoreboard (wins, losses, draws).
-   Added score reset button.

## Day Group Folders

-   `day 1,2,3/`
-   `day 4,5/`
-   `day 6.7/`
-   `day 8,9/`

## Folder Naming Convention

-   Use grouped folder names when multiple challenge days are combined.
-   Format: `day X,Y,Z/` (example: `day 10,11/`).
-   Keep one set of `index.html`, `style.css`, and `script.js` inside each day-group folder.