var URLs = ["monsterwater.html", "goldenchest.html"];
var titles = ["The Monster of the Water", "The Golden Chest"];
var index = 0;

function Left() {
    index--;
    if(index == -1) {
        index = 1;
    }
    setup();
}
function Right() {
    index++;
    if(index == 2) {
        index = 0;
    }
    setup();
}
function setup() {
    setURL(URLs[index]);
    setTitle(titles[index])
}
function setURL(url) {
    document.getElementById("iframebook").src = "stories/" + url;
}
function setTitle(title) {
    document.getElementById("titlebook").innerHTML = title;
}