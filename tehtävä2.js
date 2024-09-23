fetch('https://run.mocky.io/v3/1ddfc5f7-6739-439a-9308-059c171eb7a2')
// Muunnetaan vastaus JSON muotoon

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
    document.getElementById("vastaus2").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
  });

  // Funktio JSON-datan käsittelyyn
  function kerro(data){
    var teksti = ""; 
    // Otsikkotiedon hakeminen ja sijoittaminen h1-elementtiin
    teksti = "<h1>" + data.otsikko + "</h1>";
    teksti = teksti + "<p>" + data.kurssinimi + "</p>";
    teksti = teksti + "<p>" + data.lukumäärä + "</p>";
    teksti = teksti + "<p>" + data.osallistujiennimet + "</p>";
    teksti = teksti + "<p>" + data.alkamispäivä + "</p>";
    teksti = teksti + "<p>" + data.päättymispäivä + "</p>";
    teksti = teksti + "<p>" + data.kesto + "</p>";
    teksti = teksti + "<p><img src='" + data.kuva + "' alt='kuva' ></p>";

      // Teksti-muuttujan sisällön tulostus
    document.getElementById("vastaus2").innerHTML = teksti;
  }
  
//  "kuvaus": "JSON-tiedoston suunnittelu ja tietojen hakeminen",
//    "kuva": "",
//    "lukumäärä":"osallistujien lukumäärä : 25",
//    "osallistujiennimet":"Osallistujien nimet:",
//    "alkamispäivä":"Toteutuksen alkamispäivä: 9.11.2024",
//    "päättymispäivä":"Toteutuksen päättymispäivä: 30.12.2024",
//    "kesto":"Toteutuksen kesto viikoina: 8vk ",//
