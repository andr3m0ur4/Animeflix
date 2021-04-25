$(() => {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            },
            1400: {
                items: 7
            }
        }
    })

    const $doc = $('html, body')
    $('header nav a').click(e => {
        $doc.animate({
            scrollTop: $($.attr(e.target, 'href')).offset().top
        }, 500)
        return false
    })

    $('.botao').eq(1).click(e => {
        $('#modal').modal({
            fadeDuration: 250,
            closeClass: 'icon-remove',
            closeText: 'X'
        })
    })
})