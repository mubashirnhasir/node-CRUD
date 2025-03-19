const http = require("http");
require("dotenv").config();
const getReq = require("./methods/get-request")
const postReq = require("./methods/post-request")
const putReq = require("./methods/put-request")
const deleteReq = require("./methods/delete-request")
let movies = require("./data/movies.json")
const PORT = process.env.PORT || 5001;

// const getReq = (req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "application/json");
//     res.write(JSON.stringify({ title: "GET Request", message: "This is a GET request." }));
//     res.end();
// };

// const postReq = (req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "application/json");
//     res.write(JSON.stringify({ title: "POST Request", message: "This is a POST request." }));
//     res.end();
// };

// const putReq = (req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "application/json");
//     res.write(JSON.stringify({ title: "PUT Request", message: "This is an UPDATE request." }));
//     res.end();
// };

// const deleteReq = (req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "application/json");
//     res.write(JSON.stringify({ title: "DELETE Request", message: "This is a DELETE request." }));
//     res.end();
// };

const server = http.createServer((req, res) => {
    req.movies = movies;
    switch (req.method) {
        case "GET":
            getReq(req, res);
            break;
        case "POST":
            postReq(req, res);
            break;
        case "PUT": // HTTP uses PUT, not UPDATE
            putReq(req, res);
            break;
        case "DELETE":
            deleteReq(req, res);
            break;
        default:
            res.statusCode = 404;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify({ title: "Page Not Found", message: "Nai mila re bhai, page ghr ku ja wapas" }));
            res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server is listening on port number ${PORT}`);
});
