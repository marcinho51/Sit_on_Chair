// Chair Clair and Margarita show/hide 

const clair = $('.chair-options__clair');
const margarita = $('.chair-options__margarita');

clair.on('mouseenter', e => clair.children().css("display", "none"));
clair.on('mouseleave', e => clair.children().css("display", "block"));

margarita.on('mouseenter', e => margarita.children().css("display", "none"));
margarita.on('mouseleave', e => margarita.children().css("display", "block"));

// slider

const prev = $('.introduction--left-wing');
const next = $('.introduction--right-wing');
let sliderElements = $('.introduction__photo-part li');
let sliderCounter = 0;

sliderElements.eq(sliderCounter).addClass("visible");



prev.on('click', () => {
    sliderElements.eq(sliderCounter).removeClass("visible");
    sliderCounter--;

    if (sliderCounter < 0) {
        sliderCounter = sliderElements.length - 1;
    }
    sliderElements.eq(sliderCounter).addClass("visible");
});

next.on('click', () => {
    sliderElements.eq(sliderCounter).removeClass("visible");
    sliderCounter++;

    if (sliderCounter > sliderElements.length - 1) {
        sliderCounter = 0;
    }
    sliderElements.eq(sliderCounter).addClass("visible");
});

// calculator

const arrow = $('.calculator--list_arrow');


$('.calculator--sum strong').text(0);
let zeroCalculator = Number($('.calculator--sum strong').text());
zeroCalculator = 0;

arrow.on('click', e => {
    if ($(e.target).next().css("display") === "none") {
        $(e.target).next().css("display", "block");
        $(e.target).next().children().on('click', e => {
            $(e.target).parent().prev().prev().text($(e.target).text());
            switch ($(e.target).text()) {
                case "Clair":
                    {
                        $('.calculator--panel--title').text($(e.target).text());
                        $('.calculator--panel--title.value').text(500);
                        zeroCalculator += 500;
                        break;
                    }
                case "Margarita":
                    {
                        $('.calculator--panel--title').text($(e.target).text());
                        $('.calculator--panel--title.value').text(400);
                        zeroCalculator += 400;
                        break;
                    }
                case "Selena":
                    {
                        $('.calculator--panel--title').text($(e.target).text());
                        $('.calculator--panel--title.value').text(300);
                        zeroCalculator += 300;
                        break;
                    }
                case "Czerwony":
                    {
                        $('.color').text($(e.target).text());
                        $('.color.value').text(90);
                        zeroCalculator += 90;
                        break;
                    }
                case "Czarny":
                    {
                        $('.color').text($(e.target).text());
                        $('.color.value').text(80);
                        zeroCalculator += 80;
                        break;
                    }
                case "Pomarańczowy":
                    {
                        $('.color').text($(e.target).text());
                        $('.color.value').text(70);
                        zeroCalculator += 70;
                        break;
                    }
                case "Tkanina":
                    {
                        $('.pattern').text($(e.target).text());
                        $('.pattern.value').text(100);
                        zeroCalculator += 100;
                        break;
                    }
                case "Skóra":
                    {
                        $('.pattern').text($(e.target).text());
                        $('.pattern.value').text(200);
                        zeroCalculator += 200;
                        break;
                    }
            }
            const titleValue = Number($('.calculator--panel--title.value').text());
            const colorValue = Number($('.color.value').text())
            const patternValue = Number($('.pattern.value').text());
            const transportValue = Number($('.transport.value').text())

            const allValue = titleValue + colorValue + patternValue + transportValue;
            $('.calculator--sum strong').text(allValue);
            $(e.target).parent().css("display", "none");
        });
    } else {
        $(e.target).next().css("display", "none");
    }
});

// calculator - transport

$('.calculator--checkbox label').on('click', () => {
    $('.calculator--checkbox label').toggleClass("active");
    if ($('.calculator--checkbox label').attr("class") === "active") {
        $('.transport').text("Transport");
        $('.transport.value').text(80);
        $('.calculator--sum strong').text(Number($('.calculator--panel--title.value').text()) + Number($('.color.value').text()) + Number($('.pattern.value').text()) + 80);
    } else {
        $('.transport').text("");
        $('.transport.value').text("");
        $('.calculator--sum strong').text(Number($('.calculator--panel--title.value').text()) + Number($('.color.value').text()) + Number($('.pattern.value').text()));
    }
});