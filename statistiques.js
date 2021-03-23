function showWorld(data) {

    var element = document.getElementById("zoneResultats");

    // Vide la zone de résultat
    element.innerHTML = "";

    // Affiche les données du monde
    let html = "";    
    html += "<p>Cases : " + data.cases + "</p>";
    html += "<p>TodayCases : " + data.todayCases + "</p>";
    html += "<p>Deaths : " + data.deaths + "</p>";
    html += "<p>TodayDeaths : " + data.todayDeaths + "</p>";
    html += "<p>Recovered : " + data.recovered + "</p>";
    html += "<p>TodayRecovered : " + data.todayRecovered + "</p>";
    html += "<p>Active : " + data.active + "</p>";
    html += "<p>critical : " + data.critical + "</p>";
    html += "<p>CasesPerOneMillion : " + data.casesPerOneMillion + "</p>";
    html += "<p>DeathsPerOneMillion : " + data.deathsPerOneMillion + "</p>";
    html += "<p>Tests : " + data.tests + "</p>";
    html += "<p>testsPerOneMillion : " + data.testsPerOneMillion + "</p>";
    html.innerHTML += "<p>Population : " + data.population + "</p>";
    html.innerHTML += "<p>OneCasePerPeople : " + data.oneCasePerPeople + "</p>";
    html.innerHTML += "<p>OneDeathPerPeople : " + data.oneDeathPerPeople + "</p>";
    html.innerHTML += "<p>OneTestPerPeople : " + data.oneTestPerPeople + "</p>";
    html.innerHTML += "<p>ActivePerOneMillion : " + data.activePerOneMillion + "</p>";
    html.innerHTML += "<p>RecoveredPerOneMillion : " + data.recoveredPerOneMillion + "</p>";
    html.innerHTML += "<p>CriticalPerOneMillion : " + data.criticalPerOneMillion + "</p>";
    html.innerHTML += "<p>AffectedCountries : " + data.affectedCountries + "</p>";

    element.innerHTML += html;
}

var callBackGetWorld = function (data) {
    console.log("donnees api", data);
    showWorld(data);
}

function buttonClickGETWorld() {
    var url = "https://disease.sh/v3/covid-19/all";

    $.get(url, callBackGetWorld).done(function () {
        //alert( "second success" );
    })
    .fail(function () { alert("error"); })
    .always(function () {
            //alert( "finished" );
    })
}



function showContinent(continent) {
    var element = document.getElementById("zoneResultats");

    element.innerHTML += "<h2>"+continent.continent+"</h2>";
    element.innerHTML += "<p>Cases : " + continent.cases + "</p>";
    element.innerHTML += "<p>todayCases : " + continent.todayCases + "</p>";
    element.innerHTML += "<p>deaths : " + continent.deaths + "</p>";
    element.innerHTML += "<p>todayDeaths : " + continent.todayDeaths + "</p>";
    element.innerHTML += "<p>recovered : " + continent.recovered + "</p>";
    element.innerHTML += "<p>todayRecovered : " + continent.todayRecovered + "</p>";
    element.innerHTML += "<p>active : " + continent.active + "</p>";
    element.innerHTML += "<p>critical : " + continent.critical + "</p>";
    element.innerHTML += "<p>casesPerOneMillion : " + continent.casesPerOneMillion + "</p>";
    element.innerHTML += "<p>deathsPerOneMillion : " + continent.casesPerOneMillion + "</p>";
    element.innerHTML += "<p>tests : " + continent.tests + "</p>";
    element.innerHTML += "<p>testsPerOneMillion : " + continent.testsPerOneMillion + "</p>";
    element.innerHTML += "<p>population : " + continent.population + "</p>";
    element.innerHTML += "<p>activePerOneMillion : " + continent.activePerOneMillion + "</p>";
    element.innerHTML += "<p>recoveredPerOneMillion : " + continent.recoveredPerOneMillion + "</p>";
    element.innerHTML += "<p>criticalPerOneMillion : " + continent.criticalPerOneMillion + "</p>";
}


function showCountry(countries) {
    var element = document.getElementById("zoneResultats");

    let html = "";
    html += "<h2>"+ countries.country+"</h2>";
    html += "<p>Cases : " + countries.cases + "</p>";
    html += "<p>todayCases : " + countries.todayCases + "</p>";
    html += "<p>deaths : " + countries.deaths + "</p>";
    html += "<p>todayDeaths : " + countries.todayDeaths + "</p>";
    html += "<p>recovered : " + countries.recovered + "</p>";
    html += "<p>todayRecovered : " + countries.todayRecovered + "</p>";
    html += "<p>active : " + countries.active + "</p>";
    html += "<p>critical : " + countries.critical + "</p>";
    html += "<p>casesPerOneMillion : " + countries.casesPerOneMillion + "</p>";
    html += "<p>deathsPerOneMillion : " + countries.casesPerOneMillion + "</p>";
    html += "<p>tests : " + countries.tests + "</p>";
    html += "<p>testsPerOneMillion : " + countries.testsPerOneMillion + "</p>";
    html += "<p>population : " + countries.population + "</p>";
    html += "<p>activePerOneMillion : " + countries.activePerOneMillion + "</p>";
    html += "<p>recoveredPerOneMillion : " + countries.recoveredPerOneMillion + "</p>";
    html += "<p>criticalPerOneMillion : " + countries.criticalPerOneMillion + "</p>";

    element.innerHTML += html;
}

var callBackGetSearch = function (data) {
    console.log("donnees api", data);

    let searchType = document.querySelector("input[name=searchType]:checked").value;
    
    var element = document.getElementById("zoneResultats");

    // Vide la zone de résultat
    element.innerHTML = "";

    if (searchType == "continents") {
        if(Array.isArray(data)) {
            for(i=0 ; i < data.length; i++)
            {
                showContinent(data[i]);
            }        
        }
        else {
            showContinent(data);
        }
    }

    else if (searchType == "countries") {

        if(Array.isArray(data)) {
            for(i=0 ; i < data.length; i++)
            { 
                showCountry(data[i]);
            }        
        }
        else  {
            showCountry(data);
        }
        
    }
    else if(searchType == "all")
    {
        showWorld(data);
    }
}

function buttonClickSearch() {

    let searchType = document.querySelector("input[name=searchType]:checked").value;
    let searchText = "";
    if (searchType != "all") {
        searchText = document.getElementById("searchText").value;
    }

    var url = "https://disease.sh/v3/covid-19/" + searchType + "/" + searchText;

    $.get(url, callBackGetSearch).done(function () {
        //alert( "second success" );
    })
    .fail(function () { alert("error"); })
    .always(function () {
            //alert( "finished" );
    });
}
