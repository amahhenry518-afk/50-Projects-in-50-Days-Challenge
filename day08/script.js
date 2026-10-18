document.addEventListener('DOMContentLoaded', () => {
    
    const colorDots = document.querySelectorAll('.color-dot');
    const productImg = document.getElementById('productImg');

    colorDots.forEach(dot => {
        dot.addEventListener('click', function() {
        
            colorDots.forEach(d => d.classList.remove('active'));
            
    
            this.classList.add('active');
            
        
            const newImgSrc = this.getAttribute('data-img');
            
        
            productImg.style.opacity = 0;
            setTimeout(() => {
                productImg.src = newImgSrc;
                productImg.style.opacity = 1;
            }, 200);
        });
    });

    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
    
        const spans = mobileMenu.querySelectorAll('span');
        spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
        spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(6px, -6px)' : 'none';
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});
