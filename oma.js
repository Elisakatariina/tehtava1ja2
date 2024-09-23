// Haetaan JSON-data URL-osoitteesta Mocky-palvelusta
fetch('https://run.mocky.io/v3/a8443afe-df62-4d9c-bf8e-f46ff6564b7d')

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
    teksti = teksti + "<h3>Opintojakso: " + data.opintojakso.nimi + "</h3>";
    teksti = teksti + "<ul>"
    teksti = teksti + "</ul>"
    for(var i = 0; i < data.sisalto.length; i++) {
      teksti = teksti + "<li>" + data.sisalto[i] + "</li>";
    }

    for (var i = 0; i < data.tekniikat.length; i++) {
     teksti = teksti + "<p>" + data.tekniikat[i].aihe + " <a href='" + data.tekniikat[i].linkki + "' target='_blank'>" + data.tekniikat[i].linkki + "</a></p>";
    }
    
    // Teksti-muuttujan sisällön tulostus
    document.getElementById("vastaus").innerHTML = teksti;
}







