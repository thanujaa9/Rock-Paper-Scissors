# Copilot Instructions for ROCK PAPER SCISSORS

## Project Overview
This is a simple browser-based Rock Paper Scissors game implemented with vanilla JavaScript, HTML, and CSS. There are no frameworks or build tools; all files are loaded directly in the browser.

## File Structure
- `index.html`: Main HTML file. Contains the UI structure for the game.
- `style.css`: Styles for the game UI, including layout, colors, and hover effects.
- `app.js`: Main JavaScript logic for gameplay, user interaction, and score tracking.
- `rock.png`, `paper.png`, `scissors.png`: Images used for the choices.

## Key Patterns & Conventions
- All UI logic and game state are managed in `app.js`. No external libraries are used.
- CSS uses flexbox for layout (`.choices`, `.score-board`). Circular buttons for choices are styled with `.choice`.
- Scores are displayed in elements with IDs `user-score` and `comp-score`.
- Game messages are shown in the element with ID `msg`.
- Images are styled to fit inside circular containers and use `object-fit: cover`.

## Developer Workflow
- Open `index.html` in a browser to run the game. No build or test commands are required.
- To debug, use browser DevTools (Console, Elements, Sources).
- Update styles in `style.css` and logic in `app.js`; changes are reflected on reload.

## Integration Points
- No external dependencies or APIs.
- All assets are local and referenced directly in HTML/CSS.

## Example Patterns
- To add a new choice (e.g., "Lizard"), add a new image, update the HTML, and extend the logic in `app.js`.
- To change the theme, update colors in `style.css` (e.g., `h1`, `.choice:hover`).

## Recommendations for AI Agents
- When editing UI, coordinate changes between `index.html`, `style.css`, and `app.js`.
- Keep code modular in `app.js` (use functions for game logic, event handling).
- Maintain consistent styling and layout conventions as seen in `style.css`.
- Document any new patterns or conventions in this file for future reference.

---
If any section is unclear or missing, please provide feedback to improve these instructions.
