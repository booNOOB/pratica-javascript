function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = './img/manha.png'
        document.body.style.background = '#564b43'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = './img/tarde.png'
        document.body.style.background = '#e28b57'
    } else {
        // boa noite
        img.src = './img/noite.png'
        document.body.style.background = '#122f37'
    }
}