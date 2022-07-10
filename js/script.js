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
                    height: $(accordion1Items[index]).height() + ($(accordion1Contents[index]).outerHeight(true) + 30)
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

})