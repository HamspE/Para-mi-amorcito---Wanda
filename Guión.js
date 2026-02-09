$(document).ready(function() {
    
    // 1. GENERAR FONDO BOKEH (Luces ambientales suaves)
    const bokehContainer = document.getElementById('bokeh');
    
    function createBokeh() {
        const bokeh = document.createElement('div');
        bokeh.classList.add('bokeh-light');
        
        // Tamaños grandes y sutiles
        const size = Math.random() * 150 + 50 + 'px';
        bokeh.style.width = size;
        bokeh.style.height = size;
        
        bokeh.style.left = Math.random() * 100 + 'vw';
        // Empiezan desde abajo
        bokeh.style.bottom = '-20vh'; 
        
        // Animación muy lenta y elegante
        bokeh.style.animationDuration = (Math.random() * 15 + 15) + 's';
        
        bokehContainer.appendChild(bokeh);
        
        // Limpieza
        setTimeout(() => bokeh.remove(), 30000);
    }
    
    // Crear luces con menos frecuencia para no saturar
    setInterval(createBokeh, 1500);
    // Crear algunas iniciales
    for(let i=0; i<10; i++) createBokeh();


    // 2. INTERACCIÓN DE ABRIR CARTA (Transición Premium)
    $('.valentines-day').click(function() {
        $(this).css('animation', 'none');
        
        // El sobre cae suavemente
        $('.envelope').animate({ top: '100px', opacity: 0 }, 800, 'swing');
        $('.heart-seal, .text, .front').animate({ opacity: 0 }, 600);

        // Retraso para la aparición de la carta
        setTimeout(() => {
            $('.valentines-day').hide();

            $('#card').css({
                'visibility': 'visible',
                'opacity': 0,
                // Inicia un poco más pequeño y rotado en 3D sutilmente
                'transform': 'scale(0.8) perspective(1000px) rotateX(10deg)' 
            });

            // Animación de entrada lujosa (más lenta y fluida)
            $('#card').animate({ 'opacity': 1 }, {
                duration: 1200,
                easing: 'swing', // O una curva bezier personalizada si se desea más control
                step: function(now, fx) {
                    // Interpolación hacia el estado final (escala 1, rotación 0)
                    var scale = 0.8 + (now * 0.2);
                    var rotateX = 10 - (now * 10);
                    $(this).css('transform', `scale(${scale}) perspective(1000px) rotateX(${rotateX}deg)`);
                }
            });
        }, 700);
    });
});