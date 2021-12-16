"use strict";
document.addEventListener("DOMContentLoaded", function() {
    var scores = document.querySelectorAll("pre.music");
    scores.forEach(function(score) {
        if (musicReflow) {
            score.firstChild.style.display = "block";
            score.firstChild.dataset.source = score.firstChild.textContent;
            score.firstChild.dataset.lastWidth = "0";
            window.addEventListener("resize", function() {
                if (Math.abs(score.firstChild.dataset.lastWidth-score.firstChild.offsetWidth)>2) { // cope for rounding errors
                    score.firstChild.dataset.lastWidth = score.firstChild.offsetWidth;
                    ABCJS.renderAbc(score.firstChild, score.firstChild.dataset.source, { paddingleft: 0, paddingright: 0, staffwidth: score.firstChild.offsetWidth-2, wrap: { minSpacing: 1.8, maxSpacing: 2.7, preferredMeasuresPerLine: 4 }, oneSvgPerLine: true } );
                }
            });
        } else {
            ABCJS.renderAbc(score.firstChild, score.firstChild.textContent, { responsive: 'resize' } );
        }
    });
}, false);
