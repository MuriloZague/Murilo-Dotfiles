let text = document.getElementById('fname');
text.addEventListener("keypress", () => {
    let texto = document.getElementById('fname');
    texto.value = texto.value.toUpperCase();
})