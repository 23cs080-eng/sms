function mark(status) {
    const name = document.getElementById("name").value;
    const data = JSON.parse(localStorage.getItem("att")) || [];
    data.push({ name, status });
    localStorage.setItem("att", JSON.stringify(data));
    render();
}

function render() {
    const data = JSON.parse(localStorage.getItem("att")) || [];
    const table = document.getElementById("table");
    table.innerHTML = "<tr><th>Name</th><th>Status</th></tr>";
    data.forEach(r => {
        table.innerHTML += `<tr><td>${r.name}</td><td>${r.status}</td></tr>`;
    });
}
render();
