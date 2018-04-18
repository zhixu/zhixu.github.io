var oldURL = document.referrer;
var components = oldURL.split("/");
var container = document.querySelector('.container');
var content = document.querySelector('.content');
if (components.length == 4) {
    container.style.animation = 'slideInUp .5s ease-out';
} else {
    container.style.animation = 'none';
}