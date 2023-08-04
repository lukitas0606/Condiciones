function checkPassword() {
    const select1 = document.getElementById("select1");
    const select2 = document.getElementById("select2");
    const select3 = document.getElementById("select3");
    const resultParagraph = document.getElementById("result");

    const password = select1.value + select2.value + select3.value;

    if (password === "911") {
        resultParagraph.textContent = "Password 1 correcto";
    } else if (password === "714") {
        resultParagraph.textContent = "Password 2 correcto";
    } else {
        resultParagraph.textContent = "Password incorrecto";
    }
}

