"use strict";
document.addEventListener("DOMContentLoaded", function() {
    var scores = document.querySelectorAll("pre.music");
    scores.forEach(function(score) {
        var text = score.firstChild.textContent;
        score.style.width = score.firstChild.offsetWidth;
        ABCJS.renderAbc(score.firstChild, text, { responsive: 'resize' } );
    });
}, false);
