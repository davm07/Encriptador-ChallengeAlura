let txtEncr = document.querySelector("#encriptar-texto");
let txtDescr = document.querySelector("#txt-desencriptado");
const btnEncr = document.querySelector("#btn-encriptar");
const btnDescr = document.querySelector("#btn-desencriptar");
const btnCopiar = document.querySelector("#btn-copiar");


function validarTexto() {
    let textoEscrito = document.querySelector("#encriptar-texto").value;
    let validador = textoEscrito.match(/^[a-z\s]*$/);

    if (!validador || textoEscrito.length === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
}

function btnEncriptar() {
    if (!validarTexto()) {
        let textoEncr = encriptarTexto(txtEncr.value);
        txtDescr.value = textoEncr;
        txtEncr.value = "";
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
    let textoDecr;
    if (txtEncr.value.length == 0 && txtDescr.value.length > 0) {
        textoDecr = desencriptarTexto(txtDescr.value);
        txtEncr.value = textoDecr;
        txtDescr.value = "";
    }
    else if (!validarTexto()) {
        textoDecr = desencriptarTexto(txtEncr.value);
        txtDescr.value = textoDecr;
        txtEncr.value = "";
    }
}

function copiarTexto() {
    let texto = txtDescr.value.select();
    navigator.clipboard.writeText(texto);
    txtDescr.value = "";
}

btnEncr.addEventListener("click", btnEncriptar);
btnDescr.addEventListener("click", btnDesencriptar);
btnCopiar.onclick = copiarTexto;