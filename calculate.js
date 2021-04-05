function calculate(id) {
    let A = document.equation.a.value;
    let B = document.equation.b.value;
    let C = document.equation.c.value;
    let x1 = "";
    let x2 = "";
    let D = B * B - 4 * A * C;


    if (A == 0) {
        alert("Error: 'A' Can't be zero");
        return;
    }

    if (D < 0) {
        x1 = "(" + -B / (2 * A) + "+ i*" + Math.sqrt(-D) / (2 * A) + ")";
        x2 = "(" + -B / (2 * A) + "+ i*" + -Math.sqrt(-D) / (2 * A) + ")";
    } else {
        if (D == 0) {
            x1 = -B / (2 * A);
            x2 = -B / (2 * A);
        } else {
            x1 += -B / (2 * A) - Math.sqrt(D) / (2 * A);
            x2 += -B / (2 * A) + Math.sqrt(D) / (2 * A);
        }
    }
    let tbody = document.getElementById(id).getElementsByTagName("tbody")[0];
    let row = document.createElement("tr");
    row.addEventListener('click', function (e) {
        let rem = e.target.parentNode;
        rem.parentNode.removeChild(rem);
    });
    let td1 = document.createElement("td");
    td1.appendChild(document.createTextNode(x1));
    let td2 = document.createElement("td");
    td2.appendChild(document.createTextNode(x2));
    row.appendChild(td1);
    row.appendChild(td2);
    tbody.appendChild(row);
}

