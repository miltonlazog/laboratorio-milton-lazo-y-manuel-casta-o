// Integrantes:
//Milton Nicolas Lazo Guzman
//Manuel Sebastian Castaño Cruz
const nombres = ["Ana", "Luis", "Marta"];
const salariosBase = [450, 550, 480];
const horasExtra = [[5, 2], [0], [2]];
const antiguedad = [4, 1, 5];
const descuentos = [46.16, 56.38, 49.20];
function calcularPagoHorasExtra(tarifa = 4.0, ...registros) {
    let totalHoras = 0;
    for (const horas of registros) {
        totalHoras + horas;
    }
    return totalHoras * tarifa;
}
function calcularSalarioBruto(salarioBase, pagoHorasExtra) {
    return salarioBase + pagoHorasExtra;
}
function bonoPorAntiguedad(anios) {
    return anios >= 3 ? 20 : 0;
}
function obtenerBono(anios, callback) {
    return callback(anios);
}
function calcularSalarioNeto(bruto, bono, descuento) {
    return bruto + bono - (descuento ?? 0);
}
function sumarNomina(salarios) {
    if (salarios.length === 0) {
        return 0;
    }
    return (salarios[0] ?? 0) + sumarNomina(salarios.slice(1));
}
const salariosNetos = [];
for (let i = 0; i < nombres.length; i++) {
    const nombre = nombres[i] ?? "";
    const base = salariosBase[i] ?? 0;
    const horas = horasExtra[i] ?? [];
    const anios = antiguedad[i] ?? 0;
    const descuento = descuentos[i];
    const pagoExtra = calcularPagoHorasExtra(undefined, ...horas);
    const bruto = calcularSalarioBruto(base, pagoExtra);
    const bono = obtenerBono(anios, bonoPorAntiguedad);
    const neto = calcularSalarioNeto(bruto, bono, descuento);
    salariosNetos.push(neto);
    console.log(`${nombre}: $${neto.toFixed(2)}`);
}
console.log(`Total de la nómina: $${sumarNomina(salariosNetos).toFixed(2)}`);
console.log(`Un empleado sin horas extras: ${calcularPagoHorasExtra()}`);
console.log(`Calcular salario neto sin deducción: ${calcularSalarioNeto(500, 20)}`);
console.log(`Arreglo de salario vacio: ${sumarNomina([])}`);
export {};
//# sourceMappingURL=laboratorio.js.map