function calculate() {
    const m1 = +document.getElementById("m1").value;
    const m2 = +document.getElementById("m2").value;
    const avg = (m1 + m2) / 2;
    document.getElementById("output").innerText =
        avg >= 35 ? "PASS" : "FAIL";
}
