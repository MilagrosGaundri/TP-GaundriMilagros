const fs = require('fs')
const concesionaria = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const marcasController={
    index: function(req,res){
        res.set({ 'content-type': 'text/plain; charset=utf-8' });
        
        res.write(`
                        ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                        ● TODAS LA MARCAS DE NUESTRA CONCESIONARIA ●
                        ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                `)
        res.write('\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n')         

        let marcasSinRepetir=[];
        concesionaria.forEach(nombre=>{
            nombre.autos.forEach(auto=>{
                
                if(marcasSinRepetir.indexOf(auto.marca)==-1){
                    marcasSinRepetir.push(auto.marca)
                } 
            })        
        })
        res.write('                ➢ '+ marcasSinRepetir.join(`                       
                ➢ `) +'\n') 
        
        res.write('\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n') 
        res.write('   ❖ TOTAL DE MARCAS: '+ marcasSinRepetir.length+' ❖ \n\n')
        res.write('   ❖ TOTAL DE CONCESIONARIAS: '+ concesionaria.length+' ❖ ')
        
        res.write('\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n')

        res.end()
    },
    detalle: (req,res)=>{
        let marcas = req.params.marcaID;
        res.set({ 'content-type': 'text/plain; charset=utf-8' });
        let info=[];
        res.write(`
                    ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                    ● TODOS LOS AUTOS PERTENECIENTES A ESA MARCA ●
                    ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
        \n`) 
        concesionaria.forEach(nomb=>{
            nomb.autos.forEach(auto=>{ 
                
                if(auto.marca.toLowerCase() == marcas.toLowerCase()){ 
                   info.push(auto) 
                }   
            })
        })
        res.write('°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n')
        res.write('      ❖ La marca ingresada fue: "' + marcas +'" ❖\n\n')
        res.write('°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n')
        info.forEach(a=>{    
            res.write('        ➢ Marca : '+ a.marca +'\n')
            res.write('        ➢ Modelo: '+ a.modelo +'\n')
            res.write('        ➢ Año: '+ a.anio+'\n\n')
        })
        let leerMarca=info.length;
        res.write('°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n')
        res.write('      ❖ Autos pertenecientes a la marca '+ marcas +' : '+ leerMarca + ' ❖ \n\n')
        res.write('°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n')
        res.end()
                  
       
    }

}

module.exports= marcasController