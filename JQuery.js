function YQueryElemnt(nodeList) {
    this.nodeList = nodeList;
    nodeList.forEach((now, index) => {
        this[index] = now;   
    });

    return this;
}
// constructor

function $(querySelectorStr){
    const elements = document.querySelectorAll(querySelectorStr);
    
    if(!elements) return null;
    return new YQueryElemnt(elements);
}
// $ func

YQueryElemnt.prototype.css = function(attribute, value){
    this.nodeList.forEach(element => {
        element.style[attribute] = value;
    });
    return this;
}
// css

YQueryElemnt.prototype.html = function(html){
    if(!html) return [...(this.nodeList)].map(element => element.innerHTML);
    return this.nodeList.forEach(element => element.innerHTML = html);
}
//html

YQueryElemnt.prototype.on = function(eventType, callback){
    this.nodeList.forEach(element => element["on" + eventType] = callback); 
    return this;
}
//on event

YQueryElemnt.prototype.getAttr = function(attrName){
    return [...(this.nodeList)].map(element => element.getAttribute(attrName));
}
//getAttr

YQueryElemnt.prototype.setAttr = function(attrName, value){
    this.nodeList.forEach(element => element[attrName] = value);
    return this;
}
//setAttr