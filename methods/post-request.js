const Crypto = require("crypto")
const requestBodyParser = require("../util/body-parser")
module.exports = async (req,res) =>{
    if(req.url === "/api/movies"){
        try {
            let body = await requestBodyParser(req)
            console.log("Request Body",body)
            body.id = crypto.randomUUID();
            console.log(body.id);
            req.movies.push(body)
            res.writeHead(201, {"Content-Type":"application/json"})
            res.end()
        } catch (error) {
            console.log(error);
            
        }
    }
} 