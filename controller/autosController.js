const fs = require('fs')
const concesionaria = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const autosController={
    index:(req,res)=>{
        res.set({ 'content-type': 'text/plain; charset=utf-8' });
        res.write(`
                        ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                        ● TODOS LOS AUTOS DE NUESTRA CONCESIONARIA ●
                        ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                `)
        let totalAutos=[];
        concesionaria.forEach(nombre=>{
            res.write('\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n')
            res.write('         ❖❖ Sucursal De '+ nombre.sucursal +' ❖❖' )
            
            res.write('\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°')
            nombre.autos.forEach(auto=>{
                totalAutos.push(auto)
                res.write('\n')
                res.write('             ➢ Marca : '+ auto.marca +'\n')
                res.write('             ➢ Modelo: '+ auto.modelo +'\n')
                res.write('             ➢ Año: '+ auto.anio +'\n')
                res.write('             ➢ Color: '+ auto.color +'\n')
                
            })
        }) 
        res.write('\n\n••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••')
        res.write('\n                       ❖ Cantidad de autos pertenecientes a todas las sucursales: '+ totalAutos.length+' ❖')
        res.write('\n••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••')      
        res.end()
    },
    detalle:(req,res)=>{
        res.set({ 'content-type': 'text/plain; charset=utf-8' });
        let marcasID= req.params.marca
         let marcasAutos=[];
         res.write(`
                    ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                    ● TODOS LOS DATOS PERTENECIENTES A ESA MARCA ●
                    ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                    
        \n`) 
        res.write('\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n')
        res.write('              ❖❖ Marca Ingresada "'+ marcasID +'"  ❖❖ \n\n')
        res.write('°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n')

        concesionaria.forEach(nomb=>{
            
            nomb.autos.forEach(a=>{
                let info=[];
                
                if(marcasID.toLowerCase()==a.marca.toLowerCase()){
                    marcasAutos.push(a)
                    
                    info.push(a.marca, a.modelo , a.anio , a.color)

                    res.write('\n                ➢ Marca : '+ info[0] +'\n')
                    res.write('                ➢ Modelo: '+ info[1] +'\n')
                    res.write('                ➢ Año: '+ info[2] +'\n')
                    res.write('                ➢ Color: '+ info[3] +'                              \n\n\n')
                    
                    
                }
                
            })
            
        })
        let cantidad=marcasAutos.length

        res.write('\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n')
        res.write('                               ❖ Total de autos: ' + cantidad.toString() + ' ❖')
        res.write('\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n')
        res.end()
    },
    autoMarca:(req,res)=>{
        res.set({ 'content-type': 'text/plain; charset=utf-8' });
        let marcaID = req.params.marca;
        let dataID = req.params.data;
        
        concesionaria.forEach(concesionarias=>{
            concesionarias.autos.forEach(a=>{
                
                if(a.marca == marcaID.toLowerCase()){
                    let x =[];
                    let info= x.push(a.marca, a.modelo , a.anio , a.color);
                    if(dataID.toLowerCase()== a.color){
                        res.write(`
                        ${'           ❖ Ingresaste el color "'+dataID+'" ❖'}
                        ${'\n                                        ➢ Marca : '+info[0]} 
                        ${'                ➢ Modelo: '+info[1]}
                        ${'                ➢ Color: '+ info[3]} \n\n`)
                        res.end()
                    }else if(dataID.toLowerCase()== a.anio){
                       res.send(`
                       ${'           ❖ Ingresaste el año "'+dataID+'" ❖'}
                       ${'\n                                       ➢ Marca : '+info[0]}
                       ${'                ➢ Modelo: '+info[1]}
                       ${'                ➢ Año: '+info[2]}\n\n`)
                    }else if( dataID.toLowerCase() == a.modelo){
                        res.send(`
                        ${'           ❖ Ingresaste el modelo "'+ dataID +'" ❖'}
                        ${'\n                                        ➢ Marca : '+info[0]}
                        ${'                ➢ Modelo: '+info[1]}
                     ${'                   ➢ Color: '+ info[3]} 
                     ${'                   ➢ Año: '+info[2]}\n\n`)
                
                    }else{
                        res.send(` 



             •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
             •                                                                                   •
             •                                                                                   •
             • LO SENTIMOS LO INGRESADO NO FUE ENCONTRADO EN NUESTRA BASE DE DATOS O NO EXISTE!! •
             •                                                                                   •
             •                                                                                   •
             •                VUELVA A INTENTARLO CON ALGUN DATO DE LOS SIGUIENTES:              •
             •                         ❖ /COLOR - /MODELO - /AÑO ❖                              •
             •                                                                                   •
             •                                                                                   •
             •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
                       `)
                
                    }
                }
            
            })
        
        })
        
    }

}

module.exports=autosController