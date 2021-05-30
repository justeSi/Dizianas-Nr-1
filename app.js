
console.log("The URL of this page is: " + window.location.href);


document.querySelector('.menu').onclick = function() {
    this.classList.toggle('list-active');
    document.querySelector('.list').classList.toggle('list-active');

}