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

const arrow = $('.list_arrow');

// let zeroCalculator = parseInt($('.sum strong').text());
// zeroCalculator = 0;

arrow.on('click', e => {
    if ($(e.target).next().css("display") === "none") {
        $(e.target).next().css("display", "block");
        $(e.target).next().children().on('click', e => {
            $(e.target).parent().prev().prev().text($(e.target).text());
            switch ($(e.target).text()) {
                case "Clair":
                    {
                        $('.title').text($(e.target).text());
                        $('.title.value').text(500);
                        // zeroCalculator += 500;
                        break;
                    }
                case "Margarita":
                    {
                        $('.title').text($(e.target).text());
                        $('.title.value').text(400);
                        // zeroCalculator += 400;
                        break;
                    }
                case "Selena":
                    {
                        $('.title').text($(e.target).text());
                        $('.title.value').text(300);
                        // zeroCalculator += 300;
                        break;
                    }
                case "Czerwony":
                    {
                        $('.color').text($(e.target).text());
                        $('.color.value').text(90);
                        // zeroCalculator += 90;
                        break;
                    }
                case "Czarny":
                    {
                        $('.color').text($(e.target).text());
                        $('.color.value').text(80);
                        // zeroCalculator += 80;
                        break;
                    }
                case "Pomarańczowy":
                    {
                        $('.color').text($(e.target).text());
                        $('.color.value').text(70);
                        // zeroCalculator += 70;
                        break;
                    }
                case "Tkanina":
                    {
                        $('.pattern').text($(e.target).text());
                        $('.pattern.value').text(100);
                        // zeroCalculator += 100;
                        break;
                    }
                case "Skóra":
                    {
                        $('.pattern').text($(e.target).text());
                        $('.pattern.value').text(200);
                        // zeroCalculator += 200;
                        break;
                    }
            }
            let titleValue = parseInt($('.title.value').text());
            if (titleValue === NaN) {
                titleValue = 0;
            }
            let colorValue = parseInt($('.color.value').text())
            if (colorValue === NaN) {
                colorValue = 0;
            }
            let patternValue = parseInt($('.pattern.value').text());
            if (patternValue === NaN) {
                patternValue = 0;
            }
            let transportValue = parseInt($('.transport.value').text())
            if (transportValue === NaN) {
                transportValue = 0;
            }
            let allValue = titleValue + colorValue + patternValue + transportValue;
            console.log(allValue);
            $('.sum strong').text(allValue);
            $(e.target).parent().css("display", "none");
        });
    } else {
        $(e.target).next().css("display", "none");
    }
});

$('.checkbox label').on('click', () => {
    $('.checkbox label').toggleClass("active");
    if ($('.checkbox label').attr("class") === "active") {
        $('.transport').text("Transport");
        $('.transport.value').text(80);
        $('.sum strong').text(zeroCalculator + 80);
    } else {
        $('.transport').text("");
        $('.transport.value').text("");
        $('.sum strong').text(zeroCalculator);
    }
});