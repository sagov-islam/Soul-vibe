'use strict';

$(() => {

    // Accordion 1
    const accordion1Btns = $('.accordion-1__button');
    const accordion1Items = $('.accordion-1__item');
    const accordion1Contents = $('.accordion-1__content');
    const accordion1Arrows = $('.accordion-1__button-arrow img');
   
    
    $(accordion1Btns).each((index, button) => {
        
        $(button).on('click', () => {
            if ($(button).hasClass('accordion-closed')) {

                $(button).removeClass('accordion-closed');
                $(button).addClass('accordion-opened');

                $(accordion1Items[index]).animate({
                    height: $(accordion1Items[index]).height() + ($(accordion1Contents[index]).outerHeight(true) + 31)
                }, 200)

               
                $(accordion1Arrows[index]).css({
                    transform: 'rotate(180deg)'
                }, 500)

            } else if ($(button).hasClass('accordion-opened')) {

                $(button).removeClass('accordion-opened');
                $(button).addClass('accordion-closed');

                $(accordion1Items[index]).animate({
                    height: 78
                }, 200)

                $(accordion1Arrows[index]).css({
                    transform: 'rotate(0deg)'
                }, 500)
                
                
            }
        })
    })

    const accordion2Btns = $('.accordion-2__button');
    const accordion2Items = $('.accordion-2__item');
    const accordion2Contents = $('.accordion-2__content');
    const accordion2Span = $('.accordion-2__button-plus .y');


    $(accordion2Btns).each((index, button) => {

        $(button).on('click', () => {
            const height = accordion2Contents[index].scrollHeight;

            if ($(accordion2Items[index]).hasClass('closed')) {

                $(accordion2Items[index]).removeClass('closed');
                $(accordion2Contents[index]).animate({ height: height + 20}, 100);
                $(accordion2Span[index]).animate({ height: '0%' }, 100)

            } else {

                $(accordion2Items[index]).addClass('closed');
                $(accordion2Contents[index]).animate({ height: 0}, 100)
                $(accordion2Span[index]).animate({ height: '100%' }, 100)

            }
            
        })
    })

    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
              breakpoint: 1480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                
              }
            },
        ]
    })


    // Modal ---->
    $('button[id^=MODAL]').on('click', function() {
        const modalId = $(this).attr('id');
        $(`.modal#${modalId}`).addClass('modal-open');
    })

    $('.modal .btn-close').on('click', function() {
        $(this).parent().parent().parent().removeClass('modal-open')
    })

    $('.modal').on('mousedown', (event) => {
        if ( ! event.target.classList.contains('modal')) return
        $(event.target).removeClass('modal-open');

    })

    // Burger menu ---->

    $('.menu__burger').on('click', function() {
        const parent = $(this).parent();

        if ($(parent).hasClass('menu-closed')) {
            $(parent).removeClass('menu-closed');
            $(parent).addClass('menu-active');
        } else {
            $(parent).addClass('menu-closed');
            $(parent).removeClass('menu-active');
        }
        
    })
    

})