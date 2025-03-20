const Crypto = require("crypto")
const writeToFile = require("../util/write-to-file")
const requestBodyParser = require("../util/body-parser")
module.exports = async (req,res) =>{
    if(req.url === "/api/movies"){
        try {
            let body = await requestBodyParser(req)
            console.log("Request Body",body)
            body.id = crypto.randomUUID();
            if(!req.movies) req.movies = []
            req.movies.push({id: body.id, ...body})
            // console.log("this is bodyy",body)
            // console.log("req.movies:----",req.movies)
            writeToFile(req.movies)
            res.writeHead(201, {"Content-Type":"application/json"})
            res.end()
        } catch (error) {
            console.log(error);
            
        }
    }
} 