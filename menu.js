
window.addEventListener("scroll", function() {
    let header = document.querySelector('#cabeca');
    let doacoesSection = document.querySelector('#verde');
    
    if (window.scrollY > 500) {
        header.classList.add('rolagem');
    } else {
        header.classList.remove('rolagem');
    }


    const doacoesPosition = doacoesSection.getBoundingClientRect();

    if (doacoesPosition.top <= window.innerHeight && doacoesPosition.bottom >= 1000) {
        // Se a seção de doações estiver visível, alterar a cor do header
        header.classList.remove('rolagem');
        header.classList.add('doacao');
    } else {
        // Caso contrário, garantir que a classe "doacao" seja removida
        header.classList.remove('doacao');
    }
});

