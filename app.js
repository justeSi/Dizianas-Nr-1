
console.log("The URL of this page is: " + window.location.href);


document.querySelector('.menu').onclick = function() {
    this.classList.toggle('list-active');
    document.querySelector('.list').classList.toggle('list-active');
}

var windowWidth = document.documentElement.clientWidth;
if(windowWidth <= '1920') {
    // console.log('Ekranas mazesnis nei 786');
    document.querySelector('.left-column').style.paddingTop = document.querySelector('.navbar-component').offsetHeight + 'px';
    // console.log('navbar komponento aukstis' + document.querySelector('.navbar-component').offsetHeight + ' ');
} else {
    document.querySelector('.left-column').style.paddingTop = 0;
}


window.addEventListener('resize', function() {
var windowWidth = document.documentElement.clientWidth;
if(windowWidth <= '1920') {
    // console.log('Ekranas mazesnis nei 786');
    document.querySelector('.left-column').style.paddingTop = document.querySelector('.navbar-component').offsetHeight + 'px';
    // console.log('navbar komponento aukstis' + document.querySelector('.navbar-component').offsetHeight + ' ');
} else {
    document.querySelector('.left-column').style.paddingTop = 0;
}
//console.log('Ekrano plotis  ' + windowWidth + 'px');
})