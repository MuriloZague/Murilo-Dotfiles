let text = document.getElementById('fname');
text.addEventListener("blur", () => {
    let texto = document.getElementById('fname');
    texto.value = texto.value.toUpperCase();
})