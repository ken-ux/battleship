# battleship

This is a browser-based version of [Battleship](<https://en.wikipedia.org/wiki/Battleship_(game)>).

## How to Play

1. Click any space on your board to place a ship horizontally. The player is provided 5 ships of the following unit lengths: 5, 4, 3, 3, 2.
2. After placing ships, click on the computer's board to begin playing.
3. Win by hitting all the computer's ships before they get yours.

## Development Methodology

The main focus for this project was using principles of test-driven development (TDD) to efficiently develop the structure of the code base. This process meant:

- Writing unit tests with Jest to outline specific goals for discrete modules.
- Adding code to modules that pass all tests.
- Revising tests or adding more to test suites as the complexity of the code base increased.

All tests can be found in the `tests` folder of this project.

## Lessons Learned

- Running Jest with ECMAScript (aka ES6) syntax.
- Using triangulation to iteratively produce robust unit tests.
- Handling distinct syntax for specific Jest matchers, such as wrapping functions to ensure thrown errors are recorded through the `toThrow()` matcher.
- When pushing instances of my `Ship` class to an array, its methods wouldn't be available when the instance was referenced from the array. To fix this, I had to dive deeper into Javascript's execution context. I learned that initializing methods in the class as arrow functions binds them, preventing loss of reference to the class.
- Breaking down tests into smaller units and repeating setups using hooks provided by Jest, such as `beforeEach()`.
- I was having an issue displaying **only** the player's ships on their board. By conditionally styling each square on the gameboards with a `styleSquare()` function, it would spoil the location of the computer's ships too. After trying to write a solution in JavaScript, I realized a simple CSS selector targeting the player's board was the most elegant solution.

## Future Considerations

These are further ideas for consideration if this project is picked up again in the future:

- Let users place ships vertically.
- Improve the computer's intelligence e.g. having it hit adjacent spaces after it successfully hits a ship.
- Let two users play against each other.
