"use strict";
document.addEventListener("DOMContentLoaded", function() {
    var scores = document.querySelectorAll("pre.music");
    scores.forEach(function(score) {
        var text = score.firstChild.textContent;
        var width = score.firstChild.offsetWidth;
        score.style.width = width;
        ABCJS.renderAbc(score.firstChild, text, { responsive: 'resize' } );
    });
}, false);
