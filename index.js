const fs = require("fs");
const axios = require("axios");


async function getJsonProveedores() {

    let res = await axios.get('https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json');
  
    let data = res.data;
    return data;
  }



  async function getJsonClientes() {

    let res = await axios.get('https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json');
  
    let data = res.data;
    return data;
  }
  

  const htmlP = "<h1>Hola Proveedores</h1>";

  const escribirProveedores = getJsonProveedores().then((json) => {
    fs.writeFile("tablaProveedores.html", htmlP, (err) => {
      if(err) throw err;
      console.log("Html creado correctamente");

    });



  });


  const htmlC = "<h1>Hola Clientes</h1>";

  const escribirClientes= getJsonClientes().then((json) => {
    fs.writeFile("tablaClientes.html", htmlC, (err) => {
      if(err) throw err;
      console.log("Html creado correctamente");

    });



    
  });


  module.exports = { escribirClientes, escribirProveedores};