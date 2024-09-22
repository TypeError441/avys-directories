var sunReasons = [
	"The Sun is a nearly perfect sphere of hot plasma",
	"The Sun is a yellow dwarf star",
	"The Sun is a star like many others in our Milky Way galaxy"
];
var sunImgs = [
	"https://images.unsplash.com/photo-1611315943598-5e4ec288de2b?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1611039151169-fa0c789112a9?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1611121997657-69613d0266c4?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
];
var indexSun = 0;

var earthReasons = [
	"The Earth is the third planet from the Sun",
	"The Earth is the only planet where there are living creatures",
	"The Earth is one of four rocky planets on the inside of the Solar System. The other three are Mercury, Venus, and Mars."
];
var earthImgs = [
	"https://images.unsplash.com/photo-1607796059431-132cf42fdaa9?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1606921916293-8a5ef606c20c?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1610297572170-edadca3955d0?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
];
var indexEarth = 0;

function BackSun() {
	if(indexSun != 0) {
		indexSun--;
	} else {
		indexSun = 2;
	}
	setText("SunReason", (indexSun + 1) + ") " + sunReasons[indexSun]);
	setImg("SunImg", sunImgs[indexSun]);
}
function NextSun() {
	if(indexSun != 2) {
		indexSun++;
	} else {
		indexSun = 0;
	}
	setText("SunReason", (indexSun + 1) + ") " + sunReasons[indexSun]);
	setImg("SunImg", sunImgs[indexSun]);
}
function BackEarth() {
	if(indexEarth != 0) {
		indexEarth--;
	} else {
		indexEarth = 2;
	}
	setText("EarthReason", (indexEarth + 1) + ") " + earthReasons[indexEarth]);
	setImg("EarthImg", earthImgs[indexEarth]);
}
function NextEarth() {
	if(indexEarth != 2) {
		indexEarth++;
	} else {
		indexEarth = 0;
	}
	setText("EarthReason", (indexEarth + 1) + ") " + earthReasons[indexEarth]);
	setImg("EarthImg", earthImgs[indexEarth]);
}
function setText(id, text) {
	document.getElementById(id).innerHTML = text;
}
function setImg(id, img) {
	document.getElementById(id).src = img;
}