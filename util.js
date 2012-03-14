var Util = (function () {
    return {
        generateDivs:function (parent, count, className) {
            var element
            for (var i = 0; i < count; i++) {
                element = document.createElement('div');
                if (className) {
                    element.setAttribute('class', className);
                }
                parent.appendChild(element);
            }
        },
        byId:function (id) {
            return document.getElementById(id);
        },
        onLoad:function (callback) {
            Util.addEvent(window, 'load', callback);
        },
        addEvent:function (element, event, callback) {
            if (element.addEventListener) {
                element.addEventListener(event, callback, false);
            } else if (element.attachEvent) {
                window.attachEvent('on' + event, callback);
            }
        }
    }
})();
