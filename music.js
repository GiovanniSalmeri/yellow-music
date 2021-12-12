"use strict";
document.addEventListener("DOMContentLoaded", function() {
    var scores = document.querySelectorAll("pre.music");
    scores.forEach(function(score) {
        score.style.width = score.firstChild.offsetWidth;
        ABCJS.renderAbc(score.firstChild, score.firstChild.textContent, { responsive: 'resize' } );
    });
}, false);
