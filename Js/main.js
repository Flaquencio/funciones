/*Funcion: es un bloque de codigo independiente que se la puede
usar en cualquier parte de mi programa 
Sirve para facilitar el codigo y reutilizar el codigo
sintaxis basica

function nombre_funcion(){
    bloque de codigo
} */

function saludo(nombre){
    document.write("Hola " + nombre)
}

//llamamos a la funcion
saludo("Elvis" + "<br>")

//function suma(numero1, numero2){
    //Iniciamos las variables a utilizar
    //var numero1=numero1
    //var numero2=numero2
    //document.write(numero1+numero2)
    //var resultado = numero1+numero2
    //document.write(resultado)
    //return numero1+numero2
//}
//document.write(suma(10,30))

var maximo = function maximo(valor1, valor2){
    if(valor1>valor2){
        return valor1
    }else{
        return valor2
    }
}
maximo(50,25)
document.write ("<br>" + "El numero mayor es " + maximo(50,2))

var suma = function(numero1, numero2){
    var numero1=parseInt(document.getElementById("numero1").value);
    var numero2=parseInt(document.getElementById("numero2").value);
    var resultado = numero1+numero2
    return resultado
}
document.write(suma(10,2))