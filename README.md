* Skapar ett nytt Empty intelliJ-projekt, lägger det i HTMLCSS-mappen på min dator. 
fick en minHemsida.iml som jag inte ska bry mig om. 
* Skapade .gitignore i root-mappen och lade till .idea, .iml och DS_Store.

* Skapade: 
- mapp/directory "image" som är till mina bilder.
- fil "index.html" för webbläsaren att automatiskt läsa först. Det är en html-fil som innehåller
struturen för sidan, som webbläsaren kan läsa och visa. När någon gör ex, "www.minSida.se" så 
letar servern efter "index.html". Den innehåller: Rubriker, text, bilder, länkar, sektioner, struktur.
- fil "style.css". Den innehåller: Färger, typsnitt, storlekar, avstånd, placering, layout, hur saker ligger bredvid varandra.
- mapp - pagesNavbar med:
- fil "about.html" 
- fil "contact.html"
- mapp - pagesProject med:
- fil "food.html"
- fil "smoothie.html"
- fil "workout.html"

* Behöver inte installera Live Server för det finns automatiskt i intelliJ

* Börjar med index.html
Här har jag DOCTYPE, charset, viewport, titel samt koppling till CSS. (för en modern HTML5-sida)
I <body> har jag strukturen: Header (för navbar), Main (för innehåll + galleri), Footer (för info längst ner)
Navbar gör jag med flex container som är ett element som använder Flexbox (gör att mina "sidlänkar läggs jämte varandra).
Galleriet gör jag på samma sätt med flex container och flexbox som Navbar. Varje projekts bild och rubrik är en klickbar 
till dess egna sida. Flex-wrap anpassar bilderna till mobilsida. 
* Fortsätter med about.html 
Här kan jag kopiera en del kod från index.html tex DOCTYPE, html, head, header, footer.
Jag fick ändra lite sökväger då mappstrukturen är lite annurlunda beroende på vilken sida användaren är inne på.
Lägger till lite text och listor och biler som har lite effekter. 
* Nästa blir contact.html
Här kopierar jag in samma som ovan av det som går. 
Lägger till ett formulär för inlogg och ett för att ställa frågor, har även on option (rullista) att välja ifrån.
* Skapar innehåll i smoothie, food och workout filerna. 
Även här kan jag kopiera in header och footer samt DOCTYPE och thml lang sv. 
Lägger in diverse bilder och text.

* ****** Problem *******
I smoothie.html har jag en lista längst ned som är centrerad men siffrorna (eftersom att det är en ol lista)
lägger sig längst ut till vänster på sidan. 
* ****** Lösning *******
Lade till en klass - receptlist, som jag lade till i css-filen bland listorna som jag har i about-filen.
MEN, tycker att listan kom för långt till vänster så jag tog bort receptlist-klassen från lista_ett, lista_tva osv..
och gjorde egna "max-width", "margin", "text-align", "padding-left", "margin".
Ändrade max-width till 75 för att få den i mitten. 

* La till en mapp javaSript och en fil i den contact.js
Ändrar koden i contact.html så att alla frågor får varsin <form> och lägger till plats för svar på frågorna.
Samt lägger till sökväden till contact.js i botten av koden.
* Lägger in kod i contact.js 
Eftersom att jag gör en statisk hemsida utan server, alltså ingen Java-app med ex SpringBoot som server 
(använder inte Java backend, bara HTML/CSS/JS) så behöver jag inte ha pom.xml-fil, Maven osv. 
För att spara tid bad jag AI om hjälp med contact.js filen eftersom det inte var något krav att formulären skulle fungera.

* Ändrade lite inställningar på layouten på navbaren. Ville ha dem högerjusterade och att de kommer till en ny rad om bredden är för liten
* Lägger till en länk till i navbaren för "projekt" och gör en projekt.html i pagesNavbar-mappen.
* Redigerar alla sidor med navbar så att projekt är med. 

* ****** Problem ******
När jag kopierade och klistrade in samma navbar i alla filer så blev sökvägarna fel.
Fick ändra dessa så att de kom i rätt "nivå" i fil-trädet. Ändrade detta med ../ och ./
* Har kontrollerat att alla länker funkar mellan varandra. 👍🏼

* Lade till reset.css som jag hade glömt. Gjorde en fil i root-mappen och lade till link i alla 
filer med sökväg till reset.css, detta för att nolställa standard styling.
* Snyggat till kommentarer i alla html-sidor och css.
* la till så att klick-länk-rubrikerna under mina bilder på startsidan också fick animation ( blir större och mjuk övergång)
* ändrar navbarens textfärg på hover.
* Lägger till JS så att mina små bilder i projekt-sidorna blir större när man klickar på dem och mindre när man klickar igen. 
gjorde en till ja-fil gallery.js som jag länkade till i de html-filerna som det berörde.
* lade till i @media att extra-bilderna inte syns på mobil.
* kontrollerar bootstrap. jag har det på mina buttons i contact, men ist för att ta bort massa fin CSS 
som jag redan gjort så väljer jag att lägga till en Bootstrap Alert på kontaktsidan (där jag redan hade 
bootstrap in länkat till mina knappar), en Bootstrap Accordion på om mig sidan, en Bootstrap Modal (popup)
som öppnas med en knapp på om mig sidan.
* lade till : En <article> med <p> taggar, <img> och <span> i Om mig med länk stivethe.one
<figcaption> för bildtext.




* ****** Att göra bättre nästa gång *******
* Göra all (så mycket som möjligt) HTML klart innan jag började på med CSS.
Det var roligt att styla så därför gjorde jag det lite efterhand men det hade 
varit lättare att hålla reda på om jag hade gjort all html först.
* Kanske lägga bootstrap-länken i alla html-filer om det skulle vara till fördel för mitt program längre fram.
* valde att inte visa "extra bilderna" på mobilen ist för att göra mindre bilder av dem med srcset. 
* Snyggare layout på tex Om mig-sidan. 





* ****** Vill lägga till om jag hinner ******

* a:link
  a:active

* Nollställa mina frågeformulär med reset

* "Darkmode" med css-variabler och knapp kopplad till JS

* Hoppa till / scrolla sidan till rubriker: <a href="#cars">Gå till favvobilar</a>

* <input type=!number"> för att ge mobilen rätt tangentbord

* The title attribute specifies extra information about an element. 
The information is most often shown as a tooltip text when the mouse moves over the element.

* sidebar
