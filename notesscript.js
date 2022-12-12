setInterval(cyclePages, 2000);

const tobiLutkePres = ["images\\tobilutke\\0.jpg",
"images\\tobilutke\\1.jpg",
"images\\tobilutke\\2.jpg",
"images\\tobilutke\\3.jpg",
"images\\tobilutke\\4.jpg",
"images\\tobilutke\\5.jpg",
"images\\tobilutke\\6.jpg",
"images\\tobilutke\\7.jpg",
"images\\tobilutke\\8.jpg",
"images\\tobilutke\\9.jpg",
"images\\tobilutke\\10.jpg",
"images\\tobilutke\\11.jpg",];

const techPres = ["images\\tech\\0.jpg",
"images\\tech\\1.jpg",
"images\\tech\\2.jpg",
"images\\tech\\3.jpg",
"images\\tech\\4.jpg",
"images\\tech\\5.jpg",
"images\\tech\\6.jpg",
"images\\tech\\7.jpg",
"images\\tech\\8.jpg",];

var tobiCurrentPage = 0;
var techCurrentPage = 0;

function cyclePages() {
    tobiChangePage(tobiCurrentPage);
    techChangePage(techCurrentPage);
}

// Tobi

function tobiChangePage(pg) {
    document.getElementById("tobi").src = tobiLutkePres[pg];
    if (tobiCurrentPage == tobiLutkePres.length - 1) {
        tobiCurrentPage = 0;
        return;
    }
    tobiCurrentPage++;
}

// Tech

function techChangePage(pg) {
    document.getElementById("tech").src = techPres[pg];
    if (techCurrentPage == techPres.length - 1) {
        techCurrentPage = 0;
        return;
    }
    techCurrentPage++;
}