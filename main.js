const btn = document.getElementById('btn')

btn.onclick = function () {
    const nebi = parseInt(document.getElementById('Nebi').value)
    const cosqun = parseInt(document.getElementById('Cosqun').value)
    const tebriz = parseInt(document.getElementById('Tebriz').value)
    const vusal = parseInt(document.getElementById('Vusal').value)



    const nebi1 = document.createElement('td')
    const cosqun1 = document.createElement('td')
    const tebriz1 = document.createElement('td')
    const vusal1 = document.createElement('td')
    const netice = document.createElement('td')

    const a = nebi
    const b = cosqun
    const c = tebriz
    const d = vusal

    nebi1.textContent = nebi
    cosqun1.textContent = cosqun
    tebriz1.textContent = tebriz
    vusal1.textContent = vusal

    const tr = document.createElement('tr')

    tr.appendChild(nebi1)
    tr.appendChild(cosqun1)
    tr.appendChild(tebriz1)
    tr.appendChild(vusal1)
    tablo.appendChild(tr)
    tr.appendChild(netice)



    Nebi.value = ""
    Cosqun.value = ""
    Tebriz.value = ""
    Vusal.value = ""

    Nebi.focus();
    if (a == nebi && b == cosqun && c == tebriz && d == vusal) {
        const hesablama = (nebi + cosqun + tebriz + vusal) / 4
        netice.textContent = hesablama
    }
    else if (b == cosqun && c == tebriz && d == vusal) {
        const hesablama = (cosqun + tebriz + vusal) / 3
        netice.textContent = hesablama
    }
    else if (a == nebi && c == tebriz && d == vusal) {
        const hesablama = (nebi + tebriz + vusal) / 3
        netice.textContent = hesablama
    }
    else if (c == tebriz && d == vusal) {
        const hesablama = (tebriz + vusal) / 2
        netice.textContent = hesablama
    }
    else if (a == nebi && b == cosqun) {
        const hesablama = (nebi + cosqun) / 2
        netice.textContent = hesablama
    }
    else if (a == nebi && c == tebriz) {
        const hesablama = (nebi + tebriz) / 2
        netice.textContent = hesablama
    }
    else if (a == nebi && d == vusal) {
        const hesablama = (nebi + vusal) / 2
        netice.textContent = hesablama
    }
    else if (b == cosqun && c == tebriz){
        const hesablama = (cosqun + tebriz) / 2
        netice.textContent = hesablama
    } 
    else if(b == cosqun && d == vusal){
        const hesablama = (cosqun + vusal) / 2
        netice.textContent = hesablama
    }
    else if(c == tebriz  && d == vusal){
        const hesablama = (tebriz + vusal) / 2
        netice.textContent = hesablama
    }
    else{
        netice.textContent = "en az 2 sexsin ortalamasi lazimdir: !!"
    }
}