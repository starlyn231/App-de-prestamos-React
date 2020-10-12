import React from "react";
const Resultado = ({ total, plazo, Cantidad }) => (
  <div className="u-full-width resultado">
    <h2>Resumen</h2>
    <p> La cantidad Solicitada es de: ${Cantidad}</p>
    <p> A pagar en: {plazo} Cuotas</p>
    <p> Su pago Mensual sera:${(total / plazo).toFixed(2)} </p>
    <p> Total a pagar es: ${total.toFixed(2)}</p>
  </div>
);

export default Resultado;
