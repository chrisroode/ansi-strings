# ansi-strings
Extremely lightweight collection of ansi escape sequence string useful for creating colorful terminal text output.  Concate the strings how you like.

No-nonsense naming:
<img width="611" height="843" alt="ansi-strings-example" src="https://github.com/user-attachments/assets/81bace23-dbe1-4ed7-9eb9-3a87ab479b00" />

## Example Usage
1) Install the package
```
npm install ansi-strings
```

2) Import the file
```
const anst = require('ansi-strings');

console.log(`This text is ${anst.faa}red${anst.rr}.`);
```

or
```
import * as anst from 'ansi-strings';

console.log(`This text is ${anst.faa}red${anst.rr}.`);
```

3) You can use any string concation you like, but the library was designed to look nice with `${slanty-quote-strings}`.

## Naming conventions
use {anst.rr} to reset to normal.  If you want to change the background, use _ [underscore] at the start of the key.  Remember that now!

### Controls
  - anst.rr: reset text to default normal.
  - anst.bold: makes text bold.
  - anst.faint: makes text faint.
  - anst.italic: makes text italic.
  - anst.underline: makes text underlined.

### 16 color mode
  - anst.a0: foreground 16 color #1
  - anst.a1: foreground 16 color #2
  - ...
  - anst.a15: foreground 16 color #16
  - anst._a0: background 16 color #1
  - anst._a1: background 16 color #2
  - ...
  - anst._a15: background 16 color #16

### 256 greyscale mode
  - anst.a: foreground black.
  - anst.[b-w]: all the grayscales.
  - anst.x: foreground white.
  - anst._a: background black.
  - anst._[b-w]: all the grayscales.
  - anst._x: background white.
  
### 256 colors
Use three letters.  First one is a-f for red.  Second is a-f for green.  Third is a-f for blue.  Examples below.
  - anst.faa: red.
  - anst.ffa: yellow.
  - anst.fca: orange.
  - anst._ffa: red background.
  - anst._faa + anst.ffa: mustard on ketchup.

## Contributing
There's nothing really to contribute.  Holler if you find a bug or know of an optimization.  This code is going to stay light and simple...it's done.  Fork if you want to add features.
