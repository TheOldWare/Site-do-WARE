window.onload = function() {
    let senha = prompt("Senha");
    if (senha == "LoveYouRay") {
        alert("Senha correta!");
    } else {
        alert("Senha Icorreta!")
        window.location.reload();
    }
}