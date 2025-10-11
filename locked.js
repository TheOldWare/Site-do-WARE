window.onload = function() {
    let senha = prompt("Senha");
    if (senha == "gay") {
        alert("Senha correta!");
    } else {
        alert("Senha Icorreta!")
        window.location.reload();
    }
}