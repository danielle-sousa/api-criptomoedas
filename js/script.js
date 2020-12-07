// API Key
var apikey = {
    key: 
}

//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
.then((response) => {
    if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
    return response.json();
})
.then((api) => {
    console.log(api);
})
.catch((error) => {
    console.error(error.message);
});