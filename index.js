let txtEncr = document.querySelector("#encriptar-texto");
let txtDescr = document.querySelector("#txt-desencriptado");
const btnEncr = document.querySelector("#btn-encriptar");
const btnDescr = document.querySelector("#btn-desencriptar");


function validarTexto() {
    let textoEscrito = document.querySelector("#encriptar-texto").value;
    let validador = textoEscrito.match(/^[a-z\s]*$/);

    if (!validador || validador.length === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
}

function btnEncriptar() {
    if (!validarTexto()) {
        const textoEncr = encriptarTexto(txtEncr.value);
        txtDescr.value = textoEncr;
    }
}

function encriptarTexto(txtEncriptado) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
    txtEncriptado = txtEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (txtEncriptado.includes(matrizCodigo[i][0])) {
            txtEncriptado = txtEncriptado.replaceAll(
            matrizCodigo[i][0],
            matrizCodigo[i][1]
            );
        }
    }

    return txtEncriptado;
}

function desencriptarTexto(txtDescriptar) {
        let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
        ];
        txtDescriptar = txtDescriptar.toLowerCase();

        for (let i = 0; i < matrizCodigo.length; i++) {
        if (txtDescriptar.includes(matrizCodigo[i][1])) {
            txtDescriptar = txtDescriptar.replaceAll(
            matrizCodigo[i][1],
            matrizCodigo[i][0]
            );
        }
        }

    return txtDescriptar;
}

function btnDesencriptar() {
    if (!validarTexto()) {
        const textoDecr = desencriptarTexto(txtEncr.value);
        txtDescr.value = textoDecr;
    }
}

btnEncr.addEventListener("click", btnEncriptar);
btnDescr.addEventListener("click", btnDesencriptar);