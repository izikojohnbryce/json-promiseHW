
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




$("#btn").click(() => myPromise()

.then(response => {
    return {
        stauts:100, // adding ineer status for the "then" exm. i we want to use in internal status.
        errorMessage:"",
        data:response}
}).catch(error=>{

    return {
        stauts:1000,
        errorMessage:error,
        data:[]
    }
})

.then((res) => {
    const html = res.data.map(value=>
            `<div>
                <h2>Country Name:${value.name}</h2>
                <img src="${value.flag}" width="300px" height="100px" />
                <p>Population:${value.count}</p>
            </div>`
    ).join('');
    $('#country').html(html)
}))