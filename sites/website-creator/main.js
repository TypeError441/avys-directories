function run() {
    var doc = document.getElementById("html-editor").value;
    var css = document.getElementById("css-editor").value;
    var js = document.getElementById("js-editor").value;

    doc = doc.replace('<link rel="stylesheet" href="style.css">', '<style>' + css + '</style>');
    doc = doc.replace('<script src="main.js"></script>','<script>' + js + '</script>');
    document.getElementById("output").innerHTML = doc;
}