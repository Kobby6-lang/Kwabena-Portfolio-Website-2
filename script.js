const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");
menu.onclick = () => 
    {
        menu.classList.toggle('bx-x');
        nav.classList.toggle('active');
    }
    document.addEventListener("DOMContentLoaded", function() {
        var lastScrollTop = 0;
        var nav = document.getElementById("nav");
    
        window.addEventListener("scroll", function() {
            var scrollTop = window.scrollY || document.documentElement.scrollTop;
    
            if (scrollTop > lastScrollTop && scrollTop > 0) {
                // Scrolling down and not at the top - hide the navbar
                nav.style.top = "-80px"; // Adjust the value based on your navbar height
            } else {
                // Scrolling up - show the navbar
                nav.style.top = "0";
            }
    
            lastScrollTop = scrollTop;
        });
    });
        

    