const header = document.getElementsByTagName("h2").item(0);
console.log(header.firstChild.nodeType);
console.log(header.firstChild.nodeValue );
header.firstChild.nodeValue ="Texto cambiado con nodeValue";