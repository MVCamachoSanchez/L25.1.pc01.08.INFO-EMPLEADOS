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
