const fs = require('fs') //modulo file system

const getFile = (fileRoute) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileRoute, (err, inf) => {
      if (err) {
        reject(err) 
         return        
      }
      resolve(inf)
    })
  })
}

getFile('C:/Users/1627725/Documents/Conocimiento/Node/codigo-js/Promises/text.txt')//Ruta se modifica por la ubicacion del archivo
.then(info => console.log(`Resultado exitoso: ${info}`))
.catch(err => console.error(err))

