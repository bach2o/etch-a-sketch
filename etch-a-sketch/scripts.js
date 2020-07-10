function genDivs (v) {
    var e = document.body;
    for (var i = 0; i < v; i++) {
        var row = document.createElement("div");
        row.className = "row";
        for (var x = 0; x < v; x++) {
            var cell = document.createElement("div");
            cell.className = "gridsquare";
            cell.innerText = (i*v) + x;
            row.appendChild(cell);
        }
        e.appendChild(row);
    }
    document.getElementById("code").innerText = e.innerHTML;
}