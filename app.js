
console.log("The URL of this page is: " + window.location.href);


document.querySelector('.menu').onclick = function() {
    this.classList.toggle('list-active');
    document.querySelector('.list').classList.toggle('list-active');
}

// var windowWidth = document.documentElement.clientWidth;
// if(windowWidth <= '1920') {
//     document.querySelector('.left-column').style.paddingTop = document.querySelector('.navbar-component').offsetHeight + 'px';
// } else {
//     document.querySelector('.left-column').style.paddingTop = 0;
// }


window.addEventListener('resize', function() {
var windowWidth = document.documentElement.clientWidth;
if(windowWidth <= '1920') {
    document.querySelector('.left-column').style.paddingTop = document.querySelector('.navbar-component').offsetHeight + 'px';
} else {
    document.querySelector('.left-column').style.paddingTop = 0;
}
})