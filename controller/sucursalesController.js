const fs = require('fs')
const concesionaria = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const sucursalesController={
    index: (req,res)=>{
        res.set({'content-type':'text/plain; charset=utf-8'})
        res.write(`
                            ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                            ● A CONTINUACIÓN LA INFORMACIÓN DE NUESTRAS SUCURSALES ●
                            ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
        `)
        res.write('\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n') 
        res.write('   ❖ TOTAL DE CONCESIONARIAS: '+ concesionaria.length+' ❖ ')
        res.write('\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n')
        
        concesionaria.forEach(nombre=>{
            res.write('     ❖ Sucursal: '+ nombre.sucursal +' \n\n')
            res.write('     ❖ Dirección: '+ nombre.direccion +' \n\n')
            res.write('     ❖ Teléfono: '+ nombre.telefono +' \n\n')
            res.write('°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n')
        })
       res.end()
    },
    detalle:(req,res)=>{
        let info = req.params.sucursal
        res.set({ 'content-type': 'text/plain; charset=utf-8' });

        concesionaria.forEach(nombre=>{
            // .toLowerCase() es un metodo que se aplica a strig, si se aplica a un strig este pasa todo a minuscula
            if(nombre.sucursal.toLowerCase() == info.toLowerCase()){
                res.write(`
                ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                ● A CONTINUACIÓN TODA LA INFORMACIÓN DE NUESTRAS SUCURSALES ●
                ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                `)

                res.write('\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n') 
                res.write('        ❖ LA SUCURSAL INGRESADA FUE "'+ nombre.sucursal +'" ❖ \n\n')
                res.write('        ❖ CANTIDAD DE AUTOS : ' + nombre.autos.length + ' ❖ \n')
                res.write('\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n')
                
                res.write('        ❖ Sucursal: '+ nombre.sucursal +' \n\n\n')
                res.write('        ❖ Dirección: '+ nombre.direccion +' \n\n\n')
                res.write('        ❖ Teléfono: '+ nombre.telefono +' \n\n\n')
                res.write('        ❖ Autos: \n\n')
                nombre.autos.forEach(auto=>{
                    res.write('                ➢ Marca : '+ auto.marca +'\n')
                    res.write('                ➢ Modelo: '+ auto.modelo +'\n')
                    res.write('                ➢ Año: '+ auto.anio +'\n')
                    res.write('                ➢ Color: '+ auto.color +'                              \n\n\n')
                    
                    
                })
                res.write('°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n')
                
                res.write('°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n')
                res.end()
            } 
        })
        res.send(`
                •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
                • LO SENTIMOS LO INGRESADO NO FUE ENCONTRADA EN NUESTRA BASE DE DATOS!! •
                •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
                `)
        
        
    }

}

module.exports=sucursalesController