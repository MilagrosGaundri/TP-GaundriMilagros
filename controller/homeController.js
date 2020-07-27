//fs es un modulo nativo de Node que permite trabajar con archivos fisicos
const fs = require('fs')
const concesionaria = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const homeController={
    index: (req,res)=>{
        res.set({'content-type':'text/plain; charset=utf-8'})
        res.write(`
                      ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                      ● ¡TE DAMOS LA BIENVENIDA A NUESTRA PÁGINA DE CONCESIONARIA! ●
                      ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
        `)

        res.write('\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n')
        
        res.write('\n                                ❖ A CONTINUACIÓN NUESTRAS SUCURSALES ❖\n')
        


        
        concesionaria.forEach(sucur=>{
            res.write('\n                                           ❖ '+ sucur.sucursal +' ❖\n')
        }) 
        
        res.write('\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°')
        
        res.write('\n')
        
        res.write('                                   ❖ TOTAL DE CONCESIONARIAS: '+ concesionaria.length+' ❖ ')
        res.write('\n')
        res.write('\n')
        res.write('°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°')
        res.write(`
    
                      ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
                      •   RECORDA QUE PODES VISITAR LOS SIGUIENTES URL TAMBIEN:  •
                      •                                                          •
                      •              ➔ /sucursales                              •
                      •              ➔ /sucursales/:sucursal                    •
                      •              ➔ /marcas                                  •
                      •              ➔ /marcas/:marca                           •
                      •              ➔ /autos                                   •
                      •              ➔/autos/:marca                             •
                      •              ➔/autos/:marca/:dato?                      •
                      •                                                          •                
                      ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    
                
        `)
        res.end()
    }
}

module.exports=homeController