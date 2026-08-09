(function () {
    'use strict';

    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');
    var contactForm = document.getElementById('contact-form');
    var whatsappNumber = '573022720818';

    function closeMenu() {
        if (!menuToggle || !menu) return;
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menú');
        menu.classList.remove('is-open');
        document.body.classList.remove('menu-open');
    }

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            var isOpen = menu.classList.toggle('is-open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
            document.body.classList.toggle('menu-open', isOpen);
        });

        menu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') closeMenu();
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var nombre = document.getElementById('nombre').value.trim();
            var email = document.getElementById('email').value.trim();
            var evento = document.getElementById('evento').value.trim();
            var mensaje = document.getElementById('mensaje').value.trim();

            if (!nombre || !email || !evento || !mensaje) {
                contactForm.reportValidity();
                return;
            }

            var cliente = {
                nombre: nombre,
                email: email,
                evento: evento,
                mensaje: mensaje,
                fecha: new Date().toISOString()
            };

            var text = [
                'Hola CHICHI TURBO, quiero cotizar un evento.',
                '',
                'Nombre: ' + nombre,
                'Correo: ' + email,
                'Evento: ' + evento,
                'Mensaje: ' + mensaje
            ].join('\n');

            window.open('https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(text), '_blank', 'noopener,noreferrer');
        });
    }

    var revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window && revealElements.length) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        revealElements.forEach(function (element) {
            observer.observe(element);
        });
    } else {
        revealElements.forEach(function (element) {
            element.classList.add('is-visible');
        });
    }
})();

