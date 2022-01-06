// Music extension, https://github.com/GiovanniSalmeri/yellow-music

"use strict";
document.addEventListener("DOMContentLoaded", function() {
    var scores = document.querySelectorAll("pre.music");
    scores.forEach(function(score, i) {
        // accessibility
        var scoreText = score.firstChild.textContent;
        var metadata = [];
        [/^C:\s*(.*?)\s*$/m, /^T:\s*(.*?)\s*$/m].forEach(function(re) {
            var match = scoreText.match(re);
            if (match) metadata.push(match[1]);
        });
        var label = metadata.join(', ');
        var accessibleText = document.createElement("PRE");
        accessibleText.style.display = "none";
        accessibleText.id = "music"+i;
        accessibleText.textContent = scoreText;
        score.insertAdjacentElement("afterend", accessibleText);
        score.setAttribute("role", "img");
        score.setAttribute("aria-describedby", "music"+i);
        if (label) score.setAttribute("aria-label", label);
        // draw score
        if (musicReflow) {
            score.firstChild.style.display = "block";
            score.firstChild.dataset.source = scoreText;
            score.firstChild.dataset.lastWidth = "0";
            window.addEventListener("resize", function() {
                if (Math.abs(score.firstChild.dataset.lastWidth-score.firstChild.offsetWidth)>2) { // cope for rounding errors
                    score.firstChild.dataset.lastWidth = score.firstChild.offsetWidth;
                    ABCJS.renderAbc(score.firstChild, score.firstChild.dataset.source, { paddingleft: 0, paddingright: 0, staffwidth: score.firstChild.offsetWidth-2, wrap: { minSpacing: 1.8, maxSpacing: 2.7, preferredMeasuresPerLine: 4 }, oneSvgPerLine: true } );
                }
            });
        } else {
            ABCJS.renderAbc(score.firstChild, scoreText, { responsive: 'resize' } );
        }
    });
}, false);
