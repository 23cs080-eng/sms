fetch("partials/navbar.html")
.then(r => r.text())
.then(d => document.getElementById("nav").innerHTML = d)
.then(() => {
    const role = localStorage.getItem("role");
    document.getElementById("profileImg").src =
        role === "admin" ? "images/admin.png" : "images/user.png";
});

if (!localStorage.getItem("role")) {
    location.href = "login.html";
}
