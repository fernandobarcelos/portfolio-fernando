// -----------------------------
// Alternar Tema Claro/Escuro
// -----------------------------
const botaoTema = document.getElementById("temaBtn");
const body = document.body;

botaoTema.addEventListener("click", () => {
    body.classList.toggle("dark");

    // Ícone muda junto
    if (body.classList.contains("dark")) {
        botaoTema.textContent = "☀️";
    } else {
        botaoTema.textContent = "🌙";
    }
});

// -----------------------------
// Validação do Formulário
// -----------------------------
document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita recarregar a página

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const sucesso = document.getElementById("sucesso");

    // Validações simples
    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Regex simples para email válido
    const emailValido = /\S+@\S+\.\S+/;
    if (!emailValido.test(email)) {
        alert("Digite um e-mail válido!");
        return;
    }

    // Se tudo ok → simular envio
    sucesso.classList.remove("hidden");

    // Limpar campos
    document.getElementById("formContato").reset();

    // Ocultar mensagem após 3s
    setTimeout(() => {
        sucesso.classList.add("hidden");
    }, 3000);
});
