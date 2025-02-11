
document.getElementById("grant").addEventListener("click", event => {
    browser.permissions.request({
        origins: [
            "http://www.google.com/search*",
            "http://www.google.co.jp/search*",
            "http://www.google.co.uk/search*",
            "http://www.google.es/search*",
            "http://www.google.ca/search*",
            "http://www.google.de/search*",
            "http://www.google.it/search*",
            "http://www.google.fr/search*",
            "http://www.google.com.au/search*",
            "http://www.google.com.tw/search*",
            "http://www.google.nl/search*",
            "http://www.google.com.br/search*",
            "http://www.google.com.tr/search*",
            "http://www.google.be/search*",
            "http://www.google.com.gr/search*",
            "http://www.google.co.in/search*",
            "http://www.google.com.mx/search*",
            "http://www.google.dk/search*",
            "http://www.google.com.ar/search*",
            "http://www.google.ch/search*",
            "http://www.google.cl/search*",
            "http://www.google.at/search*",
            "http://www.google.co.kr/search*",
            "http://www.google.ie/search*",
            "http://www.google.com.co/search*",
            "http://www.google.pl/search*",
            "http://www.google.pt/search*",
            "http://www.google.com.pk/search*",
            "https://www.google.com/search*",
            "https://www.google.co.jp/search*",
            "https://www.google.co.uk/search*",
            "https://www.google.es/search*",
            "https://www.google.ca/search*",
            "https://www.google.de/search*",
            "https://www.google.it/search*",
            "https://www.google.fr/search*",
            "https://www.google.si/search*",
            "https://www.google.com.au/search*",
            "https://www.google.com.tw/search*",
            "https://www.google.nl/search*",
            "https://www.google.com.br/search*",
            "https://www.google.com.tr/search*",
            "https://www.google.be/search*",
            "https://www.google.com.gr/search*",
            "https://www.google.co.in/search*",
            "https://www.google.com.mx/search*",
            "https://www.google.dk/search*",
            "https://www.google.com.ar/search*",
            "https://www.google.ch/search*",
            "https://www.google.cl/search*",
            "https://www.google.at/search*",
            "https://www.google.co.kr/search*",
            "https://www.google.ie/search*",
            "https://www.google.com.co/search*",
            "https://www.google.pl/search*",
            "https://www.google.pt/search*",
            "https://www.google.com.pk/search*"
        ]
    }, (granted) => {
        // The callback argument will be true if the user granted the permissions.
        if (!granted) {
            alert("Be aware that this addon won't work until you grant these permissions, you can still do so on the options page!");
        }
        window.close();
    });
});
