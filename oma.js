// Haetaan JSON-data Githubista
fetch('https://elisakatariina.github.io/tehtava1/tehtava1.JSON')

// Muunnetaan vastaus JSON muotoon
.then(function (response) { 
  return response.json(); 
})

// Käsitellään muunnettu (eli JSON muotoinen) vastaus
.then(function (responseJson) {
    // Kutsutaan funktiota ja välitetään sille json-vastaus
    kerro(responseJson);
  })
  
// Jos tuli jokin virhe
.catch(function (error) { 
  document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
});
// Funktio JSON-datan käsittelyyn
function kerro(data){
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään
    
    // Otsikkotiedon hakeminen ja sijoittaminen h1-elementtiin
    teksti = "<h1>" + data.otsikko + "</h1>";
    teksti = teksti + "<p>" + data.kuvaus + "</p>";
    teksti = teksti + "<p><img src='" + data.kuva + "' alt='kuva' ></p>";
    teksti = teksti + "<h3>Opintojakso: " + data.opintojakso.nimi + " " + data.opintojakso.tunnus + " " + data.opintojakso.opintopisteet + " op</h3>";
    teksti = teksti + "<ul>"
    teksti = teksti + "</ul>"
    for(var i = 0; i < data.sisalto.length; i++) {
      teksti = teksti + "<li>" + data.sisalto[i] + "</li>";
    }
    teksti = teksti + "<h3>Linkit</h3>";
    for (var i = 0; i < data.tekniikat.length; i++) {
     teksti = teksti + "<li>" + data.tekniikat[i].aihe + " <a href='" + data.tekniikat[i].linkki + "' target='_blank'>" + data.tekniikat[i].linkki + "</a></li>";
    }
    
    // Teksti-muuttujan sisällön tulostus
    document.getElementById("vastaus").innerHTML = teksti;
}







