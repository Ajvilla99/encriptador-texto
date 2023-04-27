// function encriptar(texto) {
//     return texto.replace(/[aeiou]/g, function(match) {
//       return llaves[match];
//     });
//   }

//   function desencriptar(texto) {
//     return texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
//   }

  function encriptar() {

    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");

    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent  = "Texto encriptado con éxito";
        parrafo.textContent = "";
    } else {

        tituloMensaje.textContent = "Ningún Mensaje fue encontrado"
        parrafo.textContent = "Ingresa el texto que desea encriptar o desencriptar"
        alert("Debes ingresar algún texto")
    }
  }

  function desencriptar() {

    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent  = "Texto desencriptado con éxito";
      parrafo.textContent = "";
    } else {
      tituloMensaje.textContent = "Ningún Mensaje fue encontrado"
      parrafo.textContent = "Ingresa el texto que desea encriptar o desencriptar"
      alert("Debes ingresar algún texto")
    }
  }