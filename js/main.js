
const startapp = () => {
    document.addEventListener('DOMContentLoaded', app)
}
const app = () => {
    let rangeValue = parseInt(JSON.parse(localStorage.getItem('calculator_token'))) || 1;
    const inputRange = document.querySelector('.calc__theme-range');
    inputRange.value = rangeValue;
    changePreferences(rangeValue)
    inputRange.addEventListener('change', e => {
        localStorage.setItem('calculator_token', JSON.stringify(e.target.value))
        changePreferences(parseInt(e.target.value))
    });
}

const changePreferences = value => {
    const body = document.querySelector('body'),
    calcTop = document.querySelector('.calc__top'),
    calcOptions =document.querySelector('.calc__options'),
    calcThemeRange = document.querySelector('.calc__theme-range'),
    calcScreen = document.querySelector('.calc__screen')
    calcButtons = document.querySelector('.calc__buttons')
    calcBtn = document.querySelectorAll('.calc__btn'),
    calcBtnSpecial = document.querySelectorAll('.calc__btn--special');
    calcBtnSpecialEqual =document.querySelector('.calc__btn--special-equal');

    switch (value) {
        case 1:
            // Remove Styles
            body.classList.remove('body-2');
            calcTop.classList.remove('calc__top-2');
            calcOptions.classList.remove('calc__options-2');
            calcThemeRange.classList.remove('calc__theme-range-2');
            calcScreen.classList.remove('calc__screen-2');
            calcButtons.classList.remove('calc__buttons-2');
            calcBtn.forEach(btn => btn.classList.remove('calc__btn-2'));
            calcBtnSpecial.forEach(btn => btn.classList.remove('calc__btn--special-2'));
            calcBtnSpecialEqual.classList.remove('calc__btn--special-equal-2');

            body.classList.remove('body-3');
            calcTop.classList.remove('calc__top-3');
            calcOptions.classList.remove('calc__options-3');
            calcThemeRange.classList.remove('calc__theme-range-3');
            calcScreen.classList.remove('calc__screen-3');
            calcButtons.classList.remove('calc__buttons-3');
            calcBtn.forEach(btn => btn.classList.remove('calc__btn-3'));
            calcBtnSpecial.forEach(btn => btn.classList.remove('calc__btn--special-3'));
            calcBtnSpecialEqual.classList.remove('calc__btn--special-equal-3');

            // Add Styles
            body.classList.add('body-1');
            calcTop.classList.add('calc__top-1');
            calcOptions.classList.add('calc__options-1');
            calcThemeRange.classList.add('calc__theme-range-1');
            calcScreen.classList.add('calc__screen-1');
            calcButtons.classList.add('calc__buttons-1');
            calcBtn.forEach(btn => btn.classList.add('calc__btn-1'));
            calcBtnSpecial.forEach(btn => btn.classList.add('calc__btn--special-1'));
            calcBtnSpecialEqual.classList.add('calc__btn--special-equal-1');
        break;
        case 2:
            // Removing Styles
            body.classList.remove('body-1');
            calcTop.classList.remove('calc__top-1');
            calcOptions.classList.remove('calc__options-1');
            calcThemeRange.classList.remove('calc__theme-range-1');
            calcScreen.classList.remove('calc__screen-1');
            calcButtons.classList.remove('calc__buttons-1');
            calcBtn.forEach(btn => btn.classList.remove('calc__btn-1'));
            calcBtnSpecial.forEach(btn => btn.classList.remove('calc__btn--special-1'));
            calcBtnSpecialEqual.classList.remove('calc__btn--special-equal-1');



            body.classList.remove('body-3');
            calcTop.classList.remove('calc__top-3');
            calcOptions.classList.remove('calc__options-3');
            calcThemeRange.classList.remove('calc__theme-range-3');
            calcScreen.classList.remove('calc__screen-3');
            calcButtons.classList.remove('calc__buttons-3');
            calcBtn.forEach(btn => btn.classList.remove('calc__btn-3'));
            calcBtnSpecial.forEach(btn => btn.classList.remove('calc__btn--special-3'));
            calcBtnSpecialEqual.classList.remove('calc__btn--special-equal-3');


            // Add styles
            body.classList.add('body-2');
            calcTop.classList.add('calc__top-2');
            calcOptions.classList.add('calc__options-2');
            calcThemeRange.classList.add('calc__theme-range-2');
            calcScreen.classList.add('calc__screen-2');
            calcButtons.classList.add('calc__buttons-2');
            calcBtn.forEach(btn => btn.classList.add('calc__btn-2'));
            calcBtnSpecial.forEach(btn => btn.classList.add('calc__btn--special-2'));
            calcBtnSpecialEqual.classList.add('calc__btn--special-equal-2');
        break;
        case 3:
            // Removing Styles
            body.classList.remove('body-1');
            calcTop.classList.remove('calc__top-1');
            calcOptions.classList.remove('calc__options-1');
            calcThemeRange.classList.remove('calc__theme-range-1');
            calcScreen.classList.remove('calc__screen-1');
            calcButtons.classList.remove('calc__buttons-1');
            calcBtn.forEach(btn => btn.classList.remove('calc__btn-1'));
            calcBtnSpecial.forEach(btn => btn.classList.remove('calc__btn--special-1'));
            calcBtnSpecialEqual.classList.remove('calc__btn--special-equal-1');



            body.classList.remove('body-2');
            calcTop.classList.remove('calc__top-2');
            calcOptions.classList.remove('calc__options-2');
            calcThemeRange.classList.remove('calc__theme-range-2');
            calcScreen.classList.remove('calc__screen-2');
            calcButtons.classList.remove('calc__buttons-2');
            calcBtn.forEach(btn => btn.classList.remove('calc__btn-2'));
            calcBtnSpecial.forEach(btn => btn.classList.remove('calc__btn--special-2'));
            calcBtnSpecialEqual.classList.remove('calc__btn--special-equal-2');


            // Add styles
            body.classList.add('body-3');
            calcTop.classList.add('calc__top-3');
            calcOptions.classList.add('calc__options-3');
            calcThemeRange.classList.add('calc__theme-range-3');
            calcScreen.classList.add('calc__screen-3');
            calcButtons.classList.add('calc__buttons-3');
            calcBtn.forEach(btn => btn.classList.add('calc__btn-3'));
            calcBtnSpecial.forEach(btn => btn.classList.add('calc__btn--special-3'));
            calcBtnSpecialEqual.classList.add('calc__btn--special-equal-3');
    
        default:
            break;
    }
}






startapp()