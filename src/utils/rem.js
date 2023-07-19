function setRem() {
    var html = document.documentElement;
    var oWidth = document.body.clientWidth || document.documentElement.clientHeight;
    html.style.fontSize = (oWidth / 750) * 100 + 'PX';

}


document.addEventListener('DOMContentLoaded', function() {
    setRem();
})

window.onresize = function() {
    setRem();
}