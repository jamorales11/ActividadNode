const http = require("http");
const index = require("./index");
const fs = require("fs");


http
  .createServer((req, res) => {
    if (req.url == "/api/proveedores") {
      console.log("Hola Proveedores");
      
        index.escribirProveedores.then(() =>{
            fs.readFile("tablaProveedores.html","utf8", (err,data) => {
                if (err) throw err; 
	
            
            res.writeHead(200, {'Content-Type': 'text/html'}); 
        
            
            res.end(data);
            })
        });

    }







    if (req.url == "/api/clientes") {
        console.log("Hola Clientes");
      
        index.escribirProveedores.then(() =>{
            fs.readFile("tablaClientes.html","utf8", (err,data) => {
                if (err) throw err; 
	
            
            res.writeHead(200, {'Content-Type': 'text/html'}); 
        
            
            res.end(data);
            })
        });
    }
  })

  .listen(8081);
