var str = "python";
var links = document.links;
console.log(links);
var href;
Array.from(links).forEach(function (element) {
    href = element.href;
    if (href.includes(str)) {
        console.log(href);
    }
});
console.log(`These are the links which contain the key word ${str}`);
