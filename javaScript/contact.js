// ================================
// Vänta tills hela HTML-sidan är färdigladdad
// ================================
// DOMContentLoaded betyder:
// "Kör koden först när all HTML är inläst och redo"
// Det gör att vi säkert kan hämta element med getElementById
document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // FORM 1 – JA / NEJ-FRÅGA
    // =====================================================

    // Hämtar själva formuläret (hela <form>-elementet)
    const formFraga = document.getElementById("formFraga");

    // Hämtar input-fältet där användaren skriver sin fråga
    const inputFraga = document.getElementById("fraga");

    // Hämtar <p>-elementet där vi ska visa svaret
    const svarFraga = document.getElementById("svarFraga");


    // Lyssnar efter att formuläret skickas (när man trycker på "Skicka")
    formFraga.addEventListener("submit", (event) => {

        // Hindrar webbläsaren från att göra sin standard-grej:
        // (ladda om sidan och skicka formuläret till en server)
        event.preventDefault();


        // Hämtar texten som användaren skrivit
        // .trim() = tar bort mellanslag före/efter text
        // .toLowerCase() = gör allt till små bokstäver
        // (så att vi lättare kan jämföra texten)
        const text = inputFraga.value.trim().toLowerCase();


        // Om användaren inte skrev något alls
        if (text.length === 0) {

            // textContent ändrar texten i <p>-elementet
            svarFraga.textContent = "Skriv en fråga först 🙂";

            // return betyder: stoppa funktionen här
            return;
        }


        // =====================================
        // Först: hämta texten användaren skrev
        // (vi antar att du redan har text = inputFraga.value.trim().toLowerCase();)
        // =====================================

        // Lista med ord som alltid ska ge NEJ
        const negativeWords = ["ful", "tråkig", "dålig"];

        // Lista med ord som alltid ska ge JA
        const positiveWords = ["snygg", "smart", "rolig", "bäst", "underbar"];


        // =====================================
        // 1️⃣ Kolla om texten innehåller något negativt ord
        // =====================================

        if (negativeWords.some(word => text.includes(word))) {

            svarFraga.textContent = "Nej ❌";


        // =====================================
        // 2️⃣ Annars: kolla om texten innehåller något positivt ord
        // =====================================

        } else if (positiveWords.some(word => text.includes(word))) {

            svarFraga.textContent = "Ja ✅";


        // =====================================
        // 3️⃣ Annars: kör slumpgenerator
        // =====================================

        } else {

            const randomNumber = Math.random();

            if (randomNumber < 0.5) {
                svarFraga.textContent = "Ja ✅";
            } else {
                svarFraga.textContent = "Nej ❌";
            }
        }
    });



    // =====================================================
    // FORM 2 – "Vad gjorde du idag?"
    // =====================================================

    // Hämtar formuläret
    const formFragaTva = document.getElementById("formFragaTva");

    // Hämtar inputfältet
    const inputFragaTva = document.getElementById("fragaTva");

    // Hämtar paragrafen där svaret ska visas
    const svarFragaTva = document.getElementById("svarFragaTva");


    // Lyssnar på submit
    formFragaTva.addEventListener("submit", (event) => {

        // Stoppar sid-omladdning
        event.preventDefault();

        // Hämtar användarens text
        const text = inputFragaTva.value.trim();


        // Om inget är skrivet
        if (text.length === 0) {

            svarFragaTva.textContent = "Berätta något! Jag är nyfiken 😄";
            return;
        }


        // Här använder vi så kallad "template string"
        // Backticks ` ` gör att vi kan stoppa in variabler med ${ }
        svarFragaTva.textContent =
            `Kul! Hoppas "${text}" blir en riktigt bra grej idag ✨`;
    });



    // =====================================================
    // FORM 3 – Råd i livet
    // =====================================================

    // Hämtar formuläret
    const formFragaTre = document.getElementById("formFragaTre");

    // Hämtar dropdown-menyn (<select>)
    const selectFragaTre = document.getElementById("fragaTre");

    // Hämtar paragrafen där svaret ska visas
    const svarFragaTre = document.getElementById("svarFragaTre");


    // Lyssnar på submit
    formFragaTre.addEventListener("submit", (event) => {

        // Stoppar sid-omladdning
        event.preventDefault();

        // Hämtar vilket värde som är valt i dropdownen
        // .value ger oss värdet från <option value="...">
        const val = selectFragaTre.value;


        // Om användaren valde "ja"
        if (val === "ja") {

            // Visa förprogrammerat råd
            svarFragaTre.textContent =
                "Råd: Sov, ät och rör på dig – och jämför dig inte för mycket med andra 💛";

        } else {

            // Annars (om användaren valde "nej")
            svarFragaTre.textContent =
                "Okej 😈 Då säger jag bara: du verkar ha koll ändå!";
        }
    });


});
