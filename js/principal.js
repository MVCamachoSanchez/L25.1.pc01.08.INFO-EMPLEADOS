/** INFO EMPLEADOS
En una empresa se tiene personal obrero y personal administrativo. La empresa necesita
determinar cuál es el monto promedio que paga por cada tipo de personal.
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana
$120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo)
gana $150:
Monto total pagado a obreros: $270
Promedio pagado a 3 obreros: $90
Monto total pagado a administrativos: $350
Promedio pagado a 2 administrativos: $175 */
import Cl_Empresa from "./Cl_Empresa.js";
import Cl_Personal from "./Cl_Personal.js";

let personal1 = new Cl_Personal("juan","obrero",100);
let personal2 = new Cl_Personal("ana","obrero",120);
let personal3 = new Cl_Personal("lin","administrativo",200);
let personal4 = new Cl_Personal("mary","obrero",50);
let personal5 = new Cl_Personal("carlos","administrativo",150);

let empresa = new Cl_Empresa();

empresa.procesarPersonal(personal1);
empresa.procesarPersonal(personal2);
empresa.procesarPersonal(personal3);
empresa.procesarPersonal(personal4);
empresa.procesarPersonal(personal5);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br> Monto total pagado a los obreros: ${empresa.montoTotalObreros()}$
<br> Promedio pagado a 3 obreros: ${empresa.promedioObreros()}$
<br><br> Monto total pagado a los administrativos: ${empresa.montoTotalAdministrativo()}$
<br> Promedio pagado a 2 administrativos: ${empresa.promedioAdministrativos()}$`
