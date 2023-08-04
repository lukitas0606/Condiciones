function calculateTotal() {
    const inputs = document.querySelectorAll("input");
    let total = 0;

    inputs.forEach((input) => {
        total += parseInt(input.value);
    });

    const resultParagraph = document.getElementById("result");

    if (total <= 10) {
        resultParagraph.textContent = `Llevas ${total} stickers`;
    } else {
        resultParagraph.textContent = "Llevas demasiados stickers";
    }
}
