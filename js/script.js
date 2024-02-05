function gombRanyomas() {
              var tartalomDiv = document.getElementById('tartalom');
              tartalomDiv.scrollIntoView({ behavior: 'smooth' });
            }
function frissitEttremAllapot() {
        var jelenlegiIdo = new Date();
        var ora = jelenlegiIdo.getHours();

        var etteremTextElem = document.getElementById('etteremtext');
        var onlineElem = document.getElementById('online');
        var offlineElem = document.createElement('span');
        offlineElem.id = 'offline';
        offlineElem.textContent = 'ZÁRVA';

        if (ora >= 8 && ora < 21) {
            etteremTextElem.removeChild(offlineElem);
            etteremTextElem.appendChild(onlineElem);
        } else {
            etteremTextElem.removeChild(onlineElem);
            etteremTextElem.appendChild(offlineElem);
        }
    }

    frissitEttremAllapot();

    setInterval(frissitEttremAllapot, 60000);