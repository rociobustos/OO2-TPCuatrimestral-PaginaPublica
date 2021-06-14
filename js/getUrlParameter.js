$(document).ready(function(){
            
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = location.search.substring(1), //devuelve la parte de la cadena de consulta de una URL, incluido el signo de interrogación (?). Por lo cual con substring(1) obtengo la cadena sin el ?
            sURLVariables = sPageURL.split('&'), //Divide el string anterior como una matriz de subcadenas, obtenidas tras separarlas por &
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) { //recorro la matriz de subcadenas
            sParameterName = sURLVariables[i].split('='); //separo cada subcadena por el =
            if (sParameterName[0] === sParam) { //Si esta subcadena es igual al parametro que me llega
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]); //retorna undefined o el parametro decodificado.
            }
        }
    };
        
    if( location.search === ""){
        $("table").hide(); //Oculta la tabla
    }
    console.log(getUrlParameter('tipo'));
    if(getUrlParameter('tipo') === "1"){
        //PERMISO DIARIO
        var trThead = '<tr>'+
                            '<th>'+ "Tipo permiso" + '</th>' +
                            '<th>'+ "Nombre" + '</th>' +
                            '<th>'+ "Apellido" + '</th>' +
                            '<th>'+ "Documento" + '</th>' +
                            '<th>'+ "Desde" + '</th>' +
                            '<th>'+ "Hasta" + '</th>' +
                            '<th>'+ "Motivo" + '</th>' +
                        '</tr>';

        var tr ='<tr>'+
                    '<td>'+ getUrlParameter('permiso') + '</td>' +
                    '<td>'+ getUrlParameter('nombre') + '</td>' +
                    '<td>'+ getUrlParameter('apellido') + '</td>' +
                    '<td>'+ getUrlParameter('dni') + '</td>' +
                    '<td>'+ getUrlParameter('desde') + '</td>' +
                    '<td>'+ getUrlParameter('hasta') + '</td>' +
                    '<td>'+ getUrlParameter('motivo') + '</td>' +
                '</tr>';
    }else{
        //PERMISO PERIODO
        var trThead = '<tr>'+
                            '<th>'+ "Tipo permiso" + '</th>' +
                            '<th>'+ "Nombre" + '</th>' +
                            '<th>'+ "Apellido" + '</th>' +
                            '<th>'+ "Documento" + '</th>' +
                            '<th>'+ "Desde" + '</th>' +
                            '<th>'+ "Hasta" + '</th>' +
                            '<th>'+ "Cant. días" + '</th>' +
                            '<th>'+ "Rodado" + '</th>' +
                        '</tr>';

        var tr ='<tr>'+
                        '<td>'+ getUrlParameter('permiso') + '</td>' +
                        '<td>'+ getUrlParameter('nombre') + '</td>' +
                        '<td>'+ getUrlParameter('apellido') + '</td>' +
                        '<td>'+ getUrlParameter('dni') + '</td>' +
                        '<td>'+ getUrlParameter('desde') + '</td>' +
                        '<td>'+ getUrlParameter('hasta') + '</td>' +
                        '<td>'+ getUrlParameter('cantDias') + '</td>' +
                        '<td>'+ getUrlParameter('rodado') + '</td>' +
                '</tr>';

    }

    $(".table>thead").append(trThead ); //Genero la tabla
    $(".table>tbody").append(tr); //Genero la tabla con los datos que obtengo de la URL
});