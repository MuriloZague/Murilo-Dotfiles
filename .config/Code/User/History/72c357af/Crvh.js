let text = document.getElementById('fname');
text.addEventListener("keydown", () => {
    let texto = document.getElementById('fname');
    texto.value = texto.value.toUpperCase();
})