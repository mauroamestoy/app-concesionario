let autos = [{
    marca: 'Ford',
    modelo: 'Fiesta',
    color: 'Azul',
    anio: 2019,
    km: 200,
    precio: 150000,
    cuotas: 12,
    patente: 'APL123',
    vendido: false
},
{
    marca: 'Toyota',
    modelo: 'Corolla',
    color: 'Blanco',
    anio: 2019,
    km: 0,
    precio: 100000,
    cuotas: 14,
    patente: 'JJK116',
    vendido: false
},
{
    marca: 'Toyota',
    modelo: 'Corolla',
    color: 'Blanco',
    anio: 2019,
    km: 0,
    precio: 10000,
    cuotas: 14,
    patente: 'JJK114',
    vendido: false
},
{
    marca: 'Toyota',
    modelo: 'Corolla',
    color: 'Blanco',
    anio: 2019,
    km: 0,
    precio: 1000,
    cuotas: 14,
    patente: 'JJK115',
    vendido: false
}
]

/* const concesionaria = {
  autos: autos,
  buscarAuto: function buscar(patente){
      let autoFiltrado = '';
      autos.filter(function(buscar){
          return buscar.patente == patente
          })
          if (autoFiltrado != 0){
              return autoFiltrado;
          } else {
              return null;
          }
      }
      } */

let personas = [{
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
}]

const concesionaria = {
    autos: autos,
    personas: personas,
    //reciba por parámetro la patente y devuelva el auto al cual le corresponde
    buscarAuto: function filtrarAutos2(numero) {
        let autoFiltrado2 = [];
        autos.forEach(function (buscar) {
            if (buscar.patente == numero)
                autoFiltrado2.push(buscar);
        });
        return autoFiltrado2 != 0 ? autoFiltrado2[0] : null;
    },
    //recibe la patente y, en caso de encontrar al automóvil, le asigna el estado de vendido
    venderAuto: function autoVendido(patente) {
        let encontrado = this.buscarAuto(patente);
        encontrado.vendido = true;
        return encontrado;
    },
    //lista de autos para la venta (excluir los vendidos=true)
    autosParaLaVenta: function lista() {
        let noVendidos = autos.filter(function (autoNoVendido) {
            return autoNoVendido.vendido != true;
        })
        return noVendidos;
    },
    //cuáles de los autos para la venta son 0 km
    autos0KM: function nuevos() {
        let nuevo = this.autosParaLaVenta().filter(function (autoNuevo) {
            return autoNuevo.km < 100;
        })
        return nuevo;
    },
    //devuelve una lista que contiene el precio de venta de cada auto vendido
    listaDeVentas: function preciosDeVenta() {
        let vendidos = [];
        autos.forEach(function (autoVendido) {
            if (autoVendido.vendido == true) {
                vendidos.push(autoVendido.precio)
            };
        })
        return vendidos;
    },
    totalDeVentas: function facturacion() {
        let sumaVendidos = this.listaDeVentas().reduce(function (acum, precio) {
            if (this.listaDeVentas.lenght > 0) {
                return acum + precio;
            } else {
                return '0';
            }
        })
        return sumaVendidos;
    },
    puedeComprar: function comprador(auto, persona) {
        return persona.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas) && persona.capacidadDePagoTotal >= auto.precio;
    },
    autosQuePuedeComprar: function autosQuePuedeComprar(persona) {
        let listaAutos = [];
        autos.forEach(function (autoAComprar) {
            if (persona.capacidadDePagoEnCuotas >= (autoAComprar.precio / autoAComprar.cuotas) && persona.capacidadDePagoTotal >= autoAComprar.precio) {
                listaAutos.push(autoAComprar)
            };
        })
        return listaAutos;
    }
}
console.log(concesionaria.autosQuePuedeComprar(personas[0]));