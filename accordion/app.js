const accordions_items = document.querySelectorAll('.accordion-item');

accordions_items.forEach(elem =>
    elem.addEventListener('click', () => {
        if (elem.classList.contains('open')) {
            elem.classList.remove('open');
        } else {
            accordions_items.forEach(elem2 => elem2.classList.remove('open'));
            elem.classList.add('open');
        }
    }))