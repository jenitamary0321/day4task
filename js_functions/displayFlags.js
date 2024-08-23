  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        countries.forEach(country => {
            console.log(country.flags.png);  
        });
    })
    .catch(error => console.error('Error fetching data:', error));
