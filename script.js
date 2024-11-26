// Adiciona uma classe no header se o scroll for ativado
function handleScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}


// Percebe o scroll da página
window.addEventListener('scroll', handleScroll);