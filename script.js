(function () {
    'use strict';

    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');
    var contactForm = document.getElementById('contact-form');
    var whatsappNumber = '573022720818';
    var STORAGE_KEY = 'chichi_turbo_clientes';

    function getClientes() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        } catch (error) {
            return [];
        }
    }

    function saveClientes(clientes) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(clientes));
    }

    function addCliente(cliente) {
        var clientes = getClientes();
        clientes.unshift(cliente);
        saveClientes(clientes);
        renderClientes();
    }

    function formatDate(iso) {
        var date = new Date(iso);
        return date.toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
    }

    function renderClientes() {
        var tbody = document.querySelector('#clientes-table tbody');
        var emptyMessage = document.querySelector('.table-empty');
        if (!tbody || !emptyMessage) return;

        var clientes = getClientes();
        tbody.innerHTML = '';

        if (!clientes.length) {
            emptyMessage.style.display = 'block';
            return;
        }

        emptyMessage.style.display = 'none';
        clientes.slice(0, 30).forEach(function (cliente) {
            var row = document.createElement('tr');
            row.innerHTML = '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.email + '</td>' +
                '<td>' + cliente.evento + '</td>' +
                '<td>' + cliente.mensaje + '</td>' +
                '<td>' + formatDate(cliente.fecha) + '</td>';
            tbody.appendChild(row);
        });
    }

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

            addCliente(cliente);

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

    renderClientes();
})();
