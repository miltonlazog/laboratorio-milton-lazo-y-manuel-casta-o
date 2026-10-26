//NOMBRE: Milton Nicolás Lazo Guzmán
;
function atenderReservacion(lista) {
    const atendida = lista.shift();
    if (atendida) {
        console.log(`Atendido: ${atendida.cliente}, ${atendida.personas} personas`);
    }
    else {
        console.log("No hay reservaciones por atender");
    }
}
function buscarReservaciones(lista, id) {
    const encontrada = lista.find((r) => r.id === id);
    if (encontrada) {
        console.log("Reservacion encontrada: ", encontrada);
    }
    else {
        console.log("No existe ni una reservación con el id: ", id);
    }
}
;
const reservaciones = [
    { id: 1, cliente: "Ricardo Villatoro", personas: 4, zona: "Interior" },
    { id: 2, cliente: "David Munoz", personas: 3, zona: "Terraza" },
    { id: 3, cliente: "Ousmane Dembele", personas: 5, zona: "Terraza" },
    { id: 4, cliente: "Guillermo Estradella", personas: 6, zona: "Interior" },
];
console.log(`===RESERVACIONES===`);
console.log(reservaciones);
const reservacionNormal = { id: 5, cliente: "Lionel Messi", personas: 6, zona: "Terraza" };
reservaciones.push(reservacionNormal);
const reservacionPrioritaria = { id: 6, cliente: "Nayib Bukele", personas: 5, zona: "Interior" };
reservaciones.unshift(reservacionPrioritaria);
console.log("===Lista de atencion===");
console.log(reservaciones);
console.log("===ATENCION===");
atenderReservacion(reservaciones);
const listaVacia = [];
atenderReservacion(listaVacia);
console.log("===BUSQUEDA===");
buscarReservaciones(reservaciones, 3);
buscarReservaciones(reservaciones, 7);
console.log("===Terraza con 5 o mas personas===");
const cantidadAntes = reservaciones.length;
const grandesTerraza = reservaciones.filter((r) => r.zona === "Terraza" && r.personas >= 5);
const cantidadDespues = reservaciones.length;
if (grandesTerraza.length > 0) {
    console.log(grandesTerraza);
    ;
}
else {
    console.log("No hay reservaciones de Terraza con 5 o mas personas");
}
console.log("\n=== Estado final ===");
console.log("Reservaciones pendientes:", reservaciones);
console.log("Cantidad de pendientes:", reservaciones.length);
console.log("Coincidencias del filtro:", grandesTerraza.length);
console.log("Cantidad antes de filtrar:", cantidadAntes);
console.log("Cantidad después de filtrar:", cantidadDespues);
console.log(cantidadAntes === cantidadDespues
    ? "El filtro no elimino ningun registro."
    : "Algo salio mal: el filtro cambio la cantidad.");
console.log("Total esperado (4 + 2 - 1):", 4 + 2 - 1, "| Total real:", reservaciones.length);
export {};
