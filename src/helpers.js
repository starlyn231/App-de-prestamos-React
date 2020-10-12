export function calcularTotal(Cantidad, plazo) {
  let totalCantidad;
  if (Cantidad <= 1000) {
    totalCantidad = Cantidad * 0.25;
  } else if (Cantidad > 1000 && Cantidad <= 5000) {
    totalCantidad = Cantidad * 0.2;
  } else if (Cantidad > 5000 && Cantidad <= 10000) {
    totalCantidad = Cantidad * 0.15;
  } else {
    totalCantidad = Cantidad * 0.1;
  }

  let totalPlazo = 0;

  switch (plazo) {
    case 3:
      totalPlazo = Cantidad * 0.05;
      break;
    case 6:
      totalPlazo = Cantidad * 0.1;

      break;
    case 12:
      totalPlazo = Cantidad * 0.15;
      break;
    case 24:
      totalPlazo = Cantidad * 0.2;
      break;

    default:
      break;
  }

  return totalPlazo + totalCantidad + Cantidad;
}
