document.addEventListener('DOMContentLoaded', () => {
    
    // Variáveis de Elementos Globais
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const nav = document.querySelector('nav');

    // ------------------------------------
    // 1. Toggle Menu Mobile (Hamburger)
    // ------------------------------------
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Alterna o ícone de hamburger (fa-bars) para fechar (fa-times)
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // ------------------------------------
    // 2. Navegação Suave (Smooth Scrolling)
    // ------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calcula a posição de rolagem, subtraindo a altura da barra de navegação
                const navHeight = nav.offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Fecha o menu mobile após o clique (em telas pequenas)
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.querySelector('i').classList.add('fa-bars');
                    menuToggle.querySelector('i').classList.remove('fa-times');
                }
            }
        });
    });


    // ------------------------------------
    // 3. Adiciona Sombra/Efeito à Nav ao Rolar
    // ------------------------------------
    const addNavShadow = () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', addNavShadow);
    addNavShadow(); 

    // ===========================================
    // --- FUNÇÕES DE CONTROLE DOS CARROSSEIS ---
    // ===========================================

    /**
     * Configura a navegação de um carrossel específico.
     * @param {string} carouselId - ID do contêiner de rolagem (ex: 'stackCarousel').
     * @param {string} prevBtnId - ID do botão anterior (ex: 'prevStack').
     * @param {string} nextBtnId - ID do botão próximo (ex: 'nextStack').
     * @param {number} itemWidth - Largura do item no CSS (ex: 350 para Stack/Projetos, 550 para LinkedIn).
     * @param {number} gap - Espaçamento entre os itens (gap CSS).
     */
    function setupCarousel(carouselId, prevBtnId, nextBtnId, itemWidth, gap) {
        const carousel = document.getElementById(carouselId);
        const prevButton = document.getElementById(prevBtnId);
        const nextButton = document.getElementById(nextBtnId);

        if (carousel && prevButton && nextButton) {
            const scrollDistance = itemWidth + gap;

            nextButton.addEventListener('click', () => {
                carousel.scrollBy({
                    left: scrollDistance,
                    behavior: 'smooth'
                });
            });

            prevButton.addEventListener('click', () => {
                carousel.scrollBy({
                    left: -scrollDistance,
                    behavior: 'smooth'
                });
            });
        }
    }


    // ------------------------------------
    // 4. Carrossel de STACK TÉCNICA (Stack)
    // Largura do item: 350px | Gap: 30px -> Distância: 380
    // ------------------------------------
    setupCarousel('stackCarousel', 'prevStack', 'nextStack', 350, 30);


    // ------------------------------------
    // 5. Carrossel de PROJETOS (Projects)
    // Largura do item: 350px | Gap: 30px -> Distância: 380
    // ------------------------------------
    setupCarousel('projectsCarousel', 'prevProject', 'nextProject', 350, 30);


    // ------------------------------------
    // 6. Carrossel de LINKEDIN INSIGHTS
    // Largura do item: 550px | Gap: 30px -> Distância: 580 (Ajustado para o card maior)
    // ------------------------------------
    setupCarousel('linkedinCarousel', 'prevLinkedIn', 'nextLinkedIn', 550, 30);
});