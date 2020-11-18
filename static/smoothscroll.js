document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
    console.log(anchor);
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let href = this.getAttribute('href');
        href = href.slice(1, href.length);
        console.log(href);
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
