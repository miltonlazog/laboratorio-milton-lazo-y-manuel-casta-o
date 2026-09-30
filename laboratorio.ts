// Integrantes:
//Milton Nicolas Lazo Guzman
//Manuel Sebastian Castaño Cruz

const nombres: string[] = ["Ana", "Luis", "Marta"];
const salariosBase: number[] = [450, 550, 480];
const horasExtra: number[][] = [[5, 2], [0], [2]];
const antiguedad: number[] = [4, 1, 5];
const descuentos: number[] = [46.16, 56.38, 49.20];

function calcularPagoHorasExtra(tarifa: number = 4.0, ...registros: number[]): number {
  let totalHoras: number = 0;
  for (const horas of registros) {
    totalHoras + horas;
  }
  return totalHoras * tarifa;
}

function calcularSalarioBruto(salarioBase: number, pagoHorasExtra: number): number {
  return salarioBase + pagoHorasExtra;
}

function bonoPorAntiguedad(anios: number): number {
  return anios >= 3 ? 20 : 0;
}

function obtenerBono(anios: number, callback: (anios: number) => number): number {
  return callback(anios);
}

function calcularSalarioNeto(bruto: number, bono: number, descuento?: number): number {
  return bruto + bono - (descuento ?? 0);
}

function sumarNomina(salarios: number[]): number {
  if (salarios.length === 0) {
    return 0;
  }
  return (salarios[0] ?? 0) + sumarNomina(salarios.slice(1));
}

const salariosNetos: number[] = [];
for (let i = 0; i < nombres.length; i++) {
  const nombre: string = nombres[i] ?? "";
  const base: number = salariosBase[i] ?? 0;
  const horas: number[] = horasExtra[i] ?? [];
  const anios: number = antiguedad[i] ?? 0;
  const descuento: number | undefined = descuentos[i];

  const pagoExtra: number = calcularPagoHorasExtra(undefined, ...horas);
  const bruto: number = calcularSalarioBruto(base, pagoExtra);
  const bono: number = obtenerBono(anios, bonoPorAntiguedad);
  const neto: number = calcularSalarioNeto(bruto, bono, descuento);

  salariosNetos.push(neto);
  console.log(`${nombre}: $${neto.toFixed(2)}`);
}

console.log(`Total de la nómina: $${sumarNomina(salariosNetos).toFixed(2)}`);

console.log(`Un empleado sin horas extras: ${calcularPagoHorasExtra()}`);
console.log(`Calcular salario neto sin deducción: ${calcularSalarioNeto(500, 20)}`);
console.log(`Arreglo de salario vacio: ${sumarNomina([])}`);