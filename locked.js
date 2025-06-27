window.onload = function() {
    let senha = prompt("Senha");
    if (senha == "Magicwizard") {
        alert("Senha correta!");
    } else {
        alert("Senha Icorreta!")
        window.location.reload();
    }
}