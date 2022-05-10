let radiologia =
[
  {
    "HORA":"11:00:00 AM",
    "ESPECIALISTA":"IGNACIO SCHULZ",
    "PACIENTE":"FRANCISCA ROJAS",
    "RUT":"9878782-1",
    "PREVISION":"FONASA",
    "AREA":"RADIOLOGIA"
  },
  {
    "HORA":"11:30:00 AM",
    "ESPECIALISTA":"FEDERICO SUBERCASEAUX",
    "PACIENTE":"PAMELA ESTRADA",
    "RUT":"15345241-3",
    "PREVISION":"ISAPRE",
    "AREA":"RADIOLOGIA"
  },
  {
    "HORA":"03:00:00 PM",
    "ESPECIALISTA":"FERNANDO WURTHZ",
    "PACIENTE":"ARMANDO LUNA",
    "RUT":"16445345-9",
    "PREVISION":"ISAPRE",
    "AREA":"RADIOLOGIA"
  },
  {
    "HORA":"03:30:00 PM",
    "ESPECIALISTA":"ANA MARIA GODOY",
    "PACIENTE":"MANUEL GODOY",
    "RUT":"17666419-0",
    "PREVISION":"FONASA",
    "AREA":"RADIOLOGIA"
  },
  {
    "HORA":"04:00:00 PM"
    ,"ESPECIALISTA":"PATRICIA SUAZO",
    "PACIENTE":"RAMON ULLOA",
    "RUT":"14989389-K",
    "PREVISION":"FONASA",
    "AREA":"RADIOLOGIA"
  }

];
let traumatologia= [
{"HORA":"08:00:00 AM","ESPECIALISTA":"MARIA PAZ ALTUZARRA","PACIENTE":"PAULA SANCHEZ","RUT":"15554774-5","PREVISION":"FONASA","AREA":"TRAUMATOLOGIA"},
{"HORA":"10:00:00 AM","ESPECIALISTA":"RAUL ARAYA","PACIENTE":"ANGELICA NAVAS","RUT":"15444147-9","PREVISION":"ISAPRE","AREA":"TRAUMATOLOGIA"},
{"HORA":"10:30:00 AM","ESPECIALISTA":"MARIA ARRIAGADA","PACIENTE":"ANA KLAPP","RUT":"17879423-9","PREVISION":"ISAPRE","AREA":"TRAUMATOLOGIA"},
{"HORA":"11:00:00 AM","ESPECIALISTA":"ALEJANDRO BADILLA","PACIENTE":"FELIPE MARDONES","RUT":"1547423-6","PREVISION":"ISAPRE","AREA":"TRAUMATOLOGIA"},
{"HORA":"11:30:00 AM","ESPECIALISTA":"CECILIA BUDNIK","PACIENTE":"DIEGO MARRE","RUT":"16554741-K","PREVISION":"FONASA","AREA":"TRAUMATOLOGIA"},
{"HORA":"12:00:00 PM","ESPECIALISTA":"ARTURO CAVAGNARO","PACIENTE":"CECILIA MENDEZ","RUT":"9747535-8","PREVISION":"ISAPRE","AREA":"TRAUMATOLOGIA"},
{"HORA":"12:30:00 PM","ESPECIALISTA":"ANDRES KANACRI","PACIENTE":"MARCIAL SUAZO","RUT":"11254785-5","PREVISION":"ISAPRE","AREA":"TRAUMATOLOGIA"}
];
let dental = [
{"HORA":"08:30:00 AM","ESPECIALISTA":"ANDREA ZUNIGA","PACIENTE":"MARCELA RETAMAL","RUT":"11123425-6","PREVISION":"ISAPRE","AREA":"DENTAL"},
{"HORA":"11:00:00 AM","ESPECIALISTA":"MARIA PIA ZANARTU","PACIENTE":"ANGEL MUNOZ","RUT":"9878789-2","PREVISION":"ISAPRE","AREA":"DENTAL"},
{"HORA":"11:30:00 AM","ESPECIALISTA":"SCARLETT WITTING","PACIENTE":"MARIO KAST","RUT":"7998789-5","PREVISION":"FONASA","AREA":"DENTAL"},
{"HORA":"01:00:00 PM","ESPECIALISTA":"FRANCISCO VON TEUBER","PACIENTE":"KARIN FERNANDEZ","RUT":"18887662-K","PREVISION":"FONASA","AREA":"DENTAL"},
{"HORA":"01:30:00 PM","ESPECIALISTA":"EDUARDO VINUELA","PACIENTE":"HUGO SANCHEZ","RUT":"17665461-4","PREVISION":"FONASA","AREA":"DENTAL"},
{"HORA":"02:00:00 PM","ESPECIALISTA":"RAQUEL VILLASECA","PACIENTE":"ANA SEPULVEDA","RUT":"14441281-0","PREVISION":"ISAPRE","AREA":"DENTAL"}
];


let elTituloR = document.getElementById('titulo_rad');
let primeraAtencionRadiologia = document.getElementById('primera_at_rad');
let ultimaAtencionRadiologia = document.getElementById('ultima_at_rad');



for(let i = 0 ; i< radiologia.length; i++)
{
  let mensaje1R = 'Primera Atencion: ';
  let mensaje2R = 'Ultima Atencion: ';
  let tituloAtencionR = '';
  if(i==0)
  {
    tituloAtencionR = radiologia[i]["AREA"];
    mensaje1R = mensaje1R + radiologia[i]["PACIENTE"]+"-"+radiologia[i]["PREVISION"];

    elTituloR.innerHTML=tituloAtencionR;
    primeraAtencionRadiologia.innerHTML=mensaje1R;
    console.log(mensaje1R);
  }
  else if(i== (radiologia.length - 1)){
    tituloAtencionR = radiologia[i]["AREA"];
    elTituloR.innerHTML=tituloAtencionR;
    mensaje2R = mensaje2R + radiologia[i]["PACIENTE"]+"-"+radiologia[i]["PREVISION"];
    ultimaAtencionRadiologia.innerHTML = mensaje2R;
    console.log(mensaje2R);
  }
}





let elTituloT = document.getElementById('titulo_trau');
let primeraAtencionTraumatologia = document.getElementById('primera_at_trau');
let ultimaAtencionTraumatologia= document.getElementById('ultima_at_trau');



for(let i = 0 ; i< traumatologia.length; i++)
{
  let mensaje1T = 'Primera Atencion: ';
  let mensaje2T = 'Ultima Atencion: ';
  let tituloAtencionT = '';
  if(i==0)
  {
    tituloAtencionT = traumatologia[i]["AREA"];
    mensaje1T = mensaje1T + traumatologia[i]["PACIENTE"]+"-"+traumatologia[i]["PREVISION"];

    elTituloT.innerHTML=tituloAtencionT;
    primeraAtencionTraumatologia.innerHTML=mensaje1T;
    console.log(mensaje1T);
  }
  else if(i== (traumatologia.length - 1)){
    tituloAtencionT = traumatologia[i]["AREA"];
    elTituloT.innerHTML=tituloAtencionT;
    mensaje2T = mensaje2T + traumatologia[i]["PACIENTE"]+"-"+traumatologia[i]["PREVISION"];
    ultimaAtencionTraumatologia.innerHTML = mensaje2T;
    console.log(mensaje2T);
  }
}




let tablaR = document.getElementById('tablaRadiologia');


let textoRadiologia = "<tr><th>HORA</th> <th>ESPECIALISTA</th> <th>PACIENTE</th> <th>RUT</th> <th>PREVISION</th> <th>AREA</th>  </tr>";

for(let i=0;i<radiologia.length;i++ )
{
  textoRadiologia +=
  `
  <tr>
      <td>${radiologia[i]["HORA"]}</td>
      <td>${radiologia[i]["ESPECIALISTA"]}</td>
      <td>${radiologia[i]["PACIENTE"]}</td>
      <td>${radiologia[i]["RUT"]}</td>
      <td>${radiologia[i]["PREVISION"]}</td>
      <td>${radiologia[i]["AREA"]}</td>
  </tr>
  `;
}

tablaR.innerHTML = textoRadiologia;




let tablaT = document.getElementById('tablaTraumatologia');

let textoTraumatologia = "<tr><th>HORA</th> <th>ESPECIALISTA</th> <th>PACIENTE</th> <th>RUT</th> <th>PREVISION</th> <th>AREA</th>  </tr>";

for(let i=0;i<traumatologia.length;i++ )
{
  textoTraumatologia +=
  `
  <tr>
      <td>${traumatologia[i]["HORA"]}</td>
      <td>${traumatologia[i]["ESPECIALISTA"]}</td>
      <td>${traumatologia[i]["PACIENTE"]}</td>
      <td>${traumatologia[i]["RUT"]}</td>
      <td>${traumatologia[i]["PREVISION"]}</td>
      <td>${traumatologia[i]["AREA"]}</td>
  </tr>
  `;
}

tablaT.innerHTML = textoTraumatologia;


console.log('************SEGUNDA PARTE DEL DESAFIO***************');
console.log('Parte 1 - Agregar elementos al arreglo traumatologia');
traumatologia.push(
  {"HORA":"09:00:00 AM","ESPECIALISTA":"RENÉ POBLETE","PACIENTE":"ANA GELLONA","RUT":"13123329-7","PREVISION":"ISAPRE","AREA":"TRAUMATOLOGIA"},
  {"HORA":"09:30:00 AM","ESPECIALISTA":"MARIA SOLAR","PACIENTE":"RAMIRO ANDRADE","RUT":"12221451-K","PREVISION":"FONASA","AREA":"TRAUMATOLOGIA"},
  {"HORA":"09:30:00 AM","ESPECIALISTA":"RAUL LOYOLA","PACIENTE":"CARMEN ISLA","RUT":"10112348-3","PREVISION":"ISAPRE","AREA":"TRAUMATOLOGIA"},
  {"HORA":"09:30:00 AM","ESPECIALISTA":"ANTONIO LARENAS","PACIENTE":"PABLO LOAYZA","RUT":"13453234-1","PREVISION":"ISAPRE","AREA":"TRAUMATOLOGIA"}
);
console.log(traumatologia);

console.log('_____________________________________');
console.log('Parte 2 - Eliminar elementos del arreglo radiologia');
radiologia.shift();
console.log(radiologia);


console.log('_____________________________________');
console.log('Parte 3- Mostrar datos separados por guiones')
let arregloDatosMostrar = [];
let divDental = document.getElementById('consultasDental2');
for(registros of dental){
  console.log(registros);
  for(propiedades in registros){
    console.log(propiedades);
    console.log(registros[propiedades]);
    arregloDatosMostrar.push(registros[propiedades]);

  }
  arregloDatosMostrar.push('<br>');
}
console.log('Finaliza iteracion de arreglo dental');
console.log(arregloDatosMostrar);

let stringDental = arregloDatosMostrar.join('-');
console.log(stringDental);

divDental.innerHTML = stringDental;


console.log('_____________________________________');
console.log('Parte 4- listado total de pacientes');



console.log('Parte 4- Mostrar datos separados por guiones')
let arregloParcial = radiologia.concat(traumatologia);
arregloGeneral = arregloParcial.concat(dental);
let arregloNombreMostrar = [];
console.log(arregloGeneral);

let divTodosPacientes= document.getElementById('todosLosPacientes');
for(registros of arregloGeneral){
  for(propiedades in registros){

    if( propiedades  == 'PACIENTE'){
        arregloNombreMostrar.push(registros[propiedades]);
    }//fin if



  }//fin for in
  arregloNombreMostrar.push('<br>');
}//fin for of

console.log(arregloNombreMostrar);

divTodosPacientes.innerHTML = arregloNombreMostrar;


console.log('_____________________________________');
console.log('Parte 4- pacientes dental de isapre');
let divDentalIsapre = document.getElementById('dentalIsapre');

let arregloDentalIsapre = dental.filter(function(registro){
  return registro["PREVISION"] == "ISAPRE";
});
let arregloDentalIsapreMostrar = [];
for(registros of arregloDentalIsapre){
  for(propiedades in registros){

    if( propiedades  == 'PACIENTE'){
        arregloDentalIsapreMostrar.push(registros[propiedades]);
    }//fin if
    if( propiedades  == 'PREVISION'){
        arregloDentalIsapreMostrar.push(registros[propiedades]);
    }//fin if

  }//fin for in
  arregloDentalIsapreMostrar.push('<br>');
}//fin for of


console.log(arregloDentalIsapre);
console.log(arregloDentalIsapreMostrar);

let stringDentalIsapre = arregloDentalIsapreMostrar.join('-');
divDentalIsapre.innerHTML = stringDentalIsapre ;
