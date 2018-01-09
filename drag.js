
/**
 * # 拖放(模拟拖放,原生拖放)
 * 
 * 
 * @param 
 */

(function(window){

    /**
     * 1.模拟拖放
     * 
     * 在没有API的情况下，通过监听document的mousedown事件，如果有mousedown（没有mouseup），则说明进入拖放状态，通过事件对象的target的属性可以确定当前是那一个元素将被拖动
     * 
     * 
     */


    var dragDrop = function(){
        var dragging = null, diffX = 0, diffY = 0;

        function handleEvent(event){
            var target = event.target;
            switch(event.type){
                case "mousedown":
                    if(target.className.indexOf("draggable") > -1){
                        dragging = target;
                        diffX = event.clientX - target.offsetLeft;
                        diffY = event.clientY - target.offsetTop;
                    }
                    break;
                case "mousemove":
                    if(dragging !== null){ 
                        dragging.style.left = (event.clientX - diffX) + 'px';
                        dragging.style.top = (event.clientY - diffY) + 'px';
                    }
                    break;
                case "mouseup":
                    dragging = null;
                    break;
                    
            }
        }
        return {
            enable: function(){
                document.addEventListener("mousedown",handleEvent);
                document.addEventListener("mousemove",handleEvent);
                document.addEventListener("mouseup",handleEvent);
            }
        }
    }();


    /**
     * 2.原生拖放
     * 
     * 拖放是HTML5标准中非常重要的部分，它规定了基于事件机制的API和标签属性（draggable）
     * 
     * 
     */



    window.dragDrop = dragDrop



})(window)

