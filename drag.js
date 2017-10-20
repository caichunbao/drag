function drag(id) {
    var elem = document.getElementById(id);
    elem.onmousedown = function() {
        var disX = 0;
        var disY = 0;
    }
    elem.onmousemove = function(){
        var xValue = event.target.clintX;
        var yValue = event.target.clintY;
    }
}
