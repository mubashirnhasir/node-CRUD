module.exports = async (request) => {
    return new Promise((res, rej) => {
        try {
            let body = "";
            request.on("data", (chunk) => {
                body += chunk
            })
            request.on("end", () => {
                res(JSON.parse(body))
            })
        } catch (error) {
            console.log(error);
            rej(error)
        }
    })

}


// module.exports = async (request) => {
//     return new Promise((resolve, reject) => {
//         let body = "";

//         request.on("data", (chunk) => {
//             body += chunk;
//         });

//         request.on("end", () => {
//             try {
//                 // Ensure body is not empty before parsing
//                 if (!body.trim()) {
//                     return resolve({});
//                 }

//                 // Parse JSON safely
//                 const parsedData = JSON.parse(body);
//                 resolve(parsedData);
//             } catch (error) {
//                 console.error("JSON Parsing Error:", error);
//                 reject(new Error("Invalid JSON format"));
//             }
//         });

//         request.on("error", (err) => {
//             reject(err);
//         });
//     });
// };
