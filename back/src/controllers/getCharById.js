const axios = require("axios");

const KEY = "44c4ae584784.b53fa8338454b0c4c255";
const URL = "https://be-a-rym.up.railway.app/api"



const successHandler = (response, res) =>{
    const {id, image, name, gender, species} = response.data;
    res.writeHead(200, {"Content-Type":"application/json"});
    res.end(JSON.stringify({id, name, gender, species, image}));
};

const errorHandler = (error, res) =>{
    res.writeHead(500, {"Content-type":"text/plain"});
    res.end(error.message);
};


const getCharById = (res,id) => {
    axios
    .get(`${URL}/character/${id}?key=${KEY}`)
    .then(response => successHandler(response,res))
    .catch(error => errorHandler(error,res))
};

module.exports = getCharById
