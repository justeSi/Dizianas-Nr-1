
        console.log("The URL of this page is: " + window.location.href);


document.querySelector('.menu').onclick = function() {
    this.classList.toggle('menu-active');
    document.querySelector('.list').classList.toggle('menu-active');

    console.log('%c%s', 'color: #006dcc', 'labas');
 }