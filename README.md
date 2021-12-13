Music 0.8.18
============
Display music scores.

<p align="center"><img src="music-screenshot.png?raw=true" width="795" height="836" alt="Screenshot"></p>

## How to display a music score

Write the music score in [ABC notation](https://abcnotation.com/) and put it into a block code with the attribute `music`. ABC is a format that allows to write easily simple and complex musical scores, even without a graphical editor.

## Example

A simple musical score in ABC notation:

    ```music
    X: 1
    T: Yellow
    Q: 1/4=60
    M: 4/4
    L: 1/8
    K: B
    %%vocalfont Open Sans 9
    z CDC D4 | z CDC D2 E2 | C8 | z B,CB, C F2 (B, | 
    w: Look at the stars | Look how they shine for you | And all the things you do
    B),8 | z2 z/ G,/B,/G,/ (B,>G,) B,/(G,/F,/) z/| z CDC D4 | z CDC D2 E2 | 
    w: | Yeah they were all * yel-low * | I came a-long | I wrote a song for
    C8 | z B,CB, C F2 (B, | B,8) | z2 z/ G,/B,/G,/ B,>(G, B,)/(G,/F,/) z/| 
    w: you | And ev-'ry thing you do * | And it was called yel * low *
    z8 | z CDC D F2 C | z8 | z B,CB, C F2 B, | 
    w: So then I took my turn | Oh what a thing to~'ve done
    z8 | z z/ G,/ B,/G,/ B,3 G,/(B,/G,/) z/ | z8 | z8 | 
    w: And it was all yel-low* | 
    z2 B,2(G3F) | z B,B,F FD D2 | z2 B,2(G3F) | z B,B,F FD D2 | 
    w: Your skin* | Oh yeah your skin and bones | Turn in-* | to some-thing beau-ti-ful
    z2 B,2(G3F) | z B,B,F FD (D2 | G,8) | z B,B,F FD (D2 | F,8)| 
    w: You know * | You know I love you so | * | You know I love you so *
    ```

## Installation

[Download extension](https://github.com/GiovanniSalmeri/yellow-music/archive/master.zip) and copy zip file into your `system/extensions` folder. Right click if you use Safari.

This extension uses [abcjs](https://paulrosen.github.io/abcjs/) by Paul Rosen and Gregory Dyke. This library has [a few minor differences](https://paulrosen.github.io/abcjs/overview/abc-notation.html) from ABC standard.

## Developer

Giovanni Salmeri. [Get help](https://github.com/GiovanniSalmeri/yellow-music/issues).
