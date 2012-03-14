var Util = function () {
    return {
        generateDivs:function (type, className) {
            var element
            for (var i = 0; i < 1000; i++) {
                element = document.createElement('div');
                element.setAttribute('class', 'card');
                R.byId('container').appendChild(element);
            }
        }
    }
}

function generateDivs() {

}
