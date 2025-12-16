const btnPopap = document.querySelectorAll('.popup-btn');
const popup = document.querySelector('.popup');
const btnClose = popup.querySelector('.popup-close');
const popupContent = popup.querySelector('.popup-content')

const modal = () => {
    btnPopap.forEach(btn => {
        btn.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                popup.style.display = 'block';
                popupContent.style.opacity = '1';
                popupContent.style.transform = 'scale(1)';
            } else {
                popup.style.display = 'block';
                popupContent.style.opacity = '0';
                popupContent.style.transform = 'scale(0)';

                startAnimation();
            }
        });
    });

    function startAnimation() {
        const startTime = Date.now();
        
        function updateAnimation() {
            const progress = (Date.now()- startTime) / 250;
            const clampedProgress = Math.min(progress, 1);
            
            popupContent.style.opacity = clampedProgress;
            popupContent.style.transform = `scale(${clampedProgress})`;
            
            if (progress < 1) {
                requestAnimationFrame(updateAnimation);
            }
        }
        
        requestAnimationFrame(updateAnimation);
    }

    btnClose.addEventListener('click', () => {
        if (window.innerWidth < 768) {
                popup.style.display = 'none';
            } else {
                closeAnimation();
            }
    });

    function closeAnimation() {
        const startTime = Date.now();
    
        function updateAnimation() {
            const progress = (Date.now() - startTime) / 250;
            const clampedProgress = Math.min(progress, 1);

            const reverseProgress = 1 - clampedProgress;

            popupContent.style.opacity = reverseProgress;
            popupContent.style.transform = `scale(${reverseProgress})`;
        
            if (progress < 1) {
                requestAnimationFrame(updateAnimation);
            } else {
                popup.style.display = 'none';
            }
        }
    
        requestAnimationFrame(updateAnimation);
    }
};

export default modal;