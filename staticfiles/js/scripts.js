window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
            navbarCollapsible.classList.remove('bg-primary')

        } else {
            navbarCollapsible.classList.add('navbar-shrink');
            navbarCollapsible.classList.add('bg-primary')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }

        });
    });
    navbarToggler.addEventListener('click',()=>{
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (window.scrollY === 0) {
            navbarCollapsible.classList.toggle('bg-primary')

        } else {
            navbarCollapsible.classList.add('bg-primary')
        }

    });
    
    
    const darkmode=document.querySelector('.darkmode');
    
    // Function to update the mode and save it to local storage
    function updateMode(isDarkMode) {
        const toggled=document.body.classList.toggle('dark-mode', isDarkMode);
        const Change=toggled?darkmode.innerHTML='<i class="fa fa-lightbulb"></i> LIGHT':darkmode.innerHTML='<i class="fa fa-moon"></i> DARK ';
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    }

    // Event listener for dark mode toggle
    darkmode.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        updateMode(isDarkMode);
    });
    
    // On page load, apply the saved mode
    window.addEventListener('load', () => {
        const savedMode = localStorage.getItem('darkMode');
        const isDarkMode = savedMode === 'enabled';
        updateMode(isDarkMode);
    });
    const Checkout=document.querySelector('.checkout');
    // Set the countdown time (in seconds)
    let countdownTime = 10; 
    // Update the countdown every 1 second
    const countdownInterval = setInterval(() => {
        if (countdownTime > 0) {
            countdownTime--;
        } else {
            clearInterval(countdownInterval);
            Checkout.style.display='flex';
        }
    }, 1000);

    // closing Checkout
    const Close=document.querySelector('.close');
    
    
    Close.addEventListener('click',()=>{
        Checkout.style.display='none';
    });
});

const Packages=document.querySelectorAll('#selectPackage');
Packages.forEach(item=>{
    item.addEventListener('click',()=>{
        window.location.href='contact.html';
    });
});
const otherPackages=document.querySelectorAll('.other-prices li');
otherPackages.forEach(item=>{
    item.addEventListener('click',()=>{
        window.location.href='contact.html';
    });
});



