let text = document.getElementById('fname');
text.addEventListener("focusout", () => {
    let texto = document.getElementById('fname');
    texto.value = texto.value.toUpperCase();
})