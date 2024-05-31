function reqListener() {
    const countryarr = JSON.parse(this.responseText);
    console.log(countryarr);
    for(let country of countryarr){
        console.log(country.name.common);
        console.log(country.region);
        console.log(country.subregion);
        console.log(country.population);
        
    }
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  