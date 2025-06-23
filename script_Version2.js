// Paste all your JavaScript here (from your original <script> block)
/* Example: */
let mybutton = document.getElementById("backToTopBtn");
window.onscroll = function() { scrollFunction(); };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// ... all the rest of your JS code from the <script> block ...