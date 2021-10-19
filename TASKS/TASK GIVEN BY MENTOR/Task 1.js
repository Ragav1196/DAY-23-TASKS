// TO GET ALL THE FLAGS AND DETAILS FROM THE WEBSITE
fetch("https://restcountries.com/v3.1/all")
.then((data)=> data.json())
.then((countries)=>{

    document.body.innerHTML = `
    <section class="mainContainer">
    </section>
    `;
    countries.forEach((data) =>{           
    const element = document.querySelector(".mainContainer")

        element.innerHTML += `
        <article class="flag_container">
            <div class="image_container">
                <img src=${data.flags.png} class="flag">
            </div>

            <div class="detail_container">
                <p>${data.name}</p>
                <p>Population: ${data.population}</p>
                <p>Region: ${data.region}</p>
                <p>Capital: ${data.capital}</p>             
            </div>
        </article>
        `;
    });    
})