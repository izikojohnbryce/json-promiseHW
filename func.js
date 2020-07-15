
let myPromise = () => new Promise((resolve, reject) =>{
    $.ajax({
        type: "GET",
        url: "https://restcountries.eu/rest/v2/all",
        success: (response) => {
           
            resolve(response.map((value) =>{
                return {
                name:value.name,
                flag:value.flag,
                count: value.population
            }
        }));
        },
        error: (error) => {
            reject("data didn't arrive");
        }
    });
});
