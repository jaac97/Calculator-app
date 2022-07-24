let quantities = [];
let result = 0;
let op = '';

const startapp = () => {
    document.addEventListener('DOMContentLoaded', app)
}
const app = () => {
    let rangeValue = parseFloat(JSON.parse(localStorage.getItem('calculator_token'))) || 1;
    const inputRange = document.querySelector('.calc__theme-range');
    inputRange.value = rangeValue;
    changePreferences(rangeValue)
    inputRange.addEventListener('change', e => {
        localStorage.setItem('calculator_token', JSON.stringify(e.target.value))
        changePreferences(parseFloat(e.target.value))
    });

    const btns = document.querySelectorAll('.calc__btn');
    btns.forEach(btn => btn.addEventListener('click', () => {
        operations(btn.value)
    }))
}

const changePreferences = value => {
    const body = document.querySelector('body'),
        calcTop = document.querySelector('.calc__top'),
        calcOptions = document.querySelector('.calc__options'),
        calcThemeRange = document.querySelector('.calc__theme-range'),
        calcScreen = document.querySelector('.calc__screen')
    calcButtons = document.querySelector('.calc__buttons')
    calcBtn = document.querySelectorAll('.calc__btn'),
        calcBtnSpecial = document.querySelectorAll('.calc__btn--special');
    calcBtnSpecialEqual = document.querySelector('.calc__btn--special-equal');

    switch (value) {
        case 1:
            // Remove Styles
            body
                .classList
                .remove('body-2');
            calcTop
                .classList
                .remove('calc__top-2');
            calcOptions
                .classList
                .remove('calc__options-2');
            calcThemeRange
                .classList
                .remove('calc__theme-range-2');
            calcScreen
                .classList
                .remove('calc__screen-2');
            calcButtons
                .classList
                .remove('calc__buttons-2');
            calcBtn.forEach(btn => btn.classList.remove('calc__btn-2'));
            calcBtnSpecial.forEach(btn => btn.classList.remove('calc__btn--special-2'));
            calcBtnSpecialEqual
                .classList
                .remove('calc__btn--special-equal-2');

            body
                .classList
                .remove('body-3');
            calcTop
                .classList
                .remove('calc__top-3');
            calcOptions
                .classList
                .remove('calc__options-3');
            calcThemeRange
                .classList
                .remove('calc__theme-range-3');
            calcScreen
                .classList
                .remove('calc__screen-3');
            calcButtons
                .classList
                .remove('calc__buttons-3');
            calcBtn.forEach(btn => btn.classList.remove('calc__btn-3'));
            calcBtnSpecial.forEach(btn => btn.classList.remove('calc__btn--special-3'));
            calcBtnSpecialEqual
                .classList
                .remove('calc__btn--special-equal-3');

            // Add Styles
            body
                .classList
                .add('body-1');
            calcTop
                .classList
                .add('calc__top-1');
            calcOptions
                .classList
                .add('calc__options-1');
            calcThemeRange
                .classList
                .add('calc__theme-range-1');
            calcScreen
                .classList
                .add('calc__screen-1');
            calcButtons
                .classList
                .add('calc__buttons-1');
            calcBtn.forEach(btn => btn.classList.add('calc__btn-1'));
            calcBtnSpecial.forEach(btn => btn.classList.add('calc__btn--special-1'));
            calcBtnSpecialEqual
                .classList
                .add('calc__btn--special-equal-1');
            break;
        case 2:
            // Removing Styles
            body
                .classList
                .remove('body-1');
            calcTop
                .classList
                .remove('calc__top-1');
            calcOptions
                .classList
                .remove('calc__options-1');
            calcThemeRange
                .classList
                .remove('calc__theme-range-1');
            calcScreen
                .classList
                .remove('calc__screen-1');
            calcButtons
                .classList
                .remove('calc__buttons-1');
            calcBtn.forEach(btn => btn.classList.remove('calc__btn-1'));
            calcBtnSpecial.forEach(btn => btn.classList.remove('calc__btn--special-1'));
            calcBtnSpecialEqual
                .classList
                .remove('calc__btn--special-equal-1');

            body
                .classList
                .remove('body-3');
            calcTop
                .classList
                .remove('calc__top-3');
            calcOptions
                .classList
                .remove('calc__options-3');
            calcThemeRange
                .classList
                .remove('calc__theme-range-3');
            calcScreen
                .classList
                .remove('calc__screen-3');
            calcButtons
                .classList
                .remove('calc__buttons-3');
            calcBtn.forEach(btn => btn.classList.remove('calc__btn-3'));
            calcBtnSpecial.forEach(btn => btn.classList.remove('calc__btn--special-3'));
            calcBtnSpecialEqual
                .classList
                .remove('calc__btn--special-equal-3');

            // Add styles
            body
                .classList
                .add('body-2');
            calcTop
                .classList
                .add('calc__top-2');
            calcOptions
                .classList
                .add('calc__options-2');
            calcThemeRange
                .classList
                .add('calc__theme-range-2');
            calcScreen
                .classList
                .add('calc__screen-2');
            calcButtons
                .classList
                .add('calc__buttons-2');
            calcBtn.forEach(btn => btn.classList.add('calc__btn-2'));
            calcBtnSpecial.forEach(btn => btn.classList.add('calc__btn--special-2'));
            calcBtnSpecialEqual
                .classList
                .add('calc__btn--special-equal-2');
            break;
        case 3:
            // Removing Styles
            body
                .classList
                .remove('body-1');
            calcTop
                .classList
                .remove('calc__top-1');
            calcOptions
                .classList
                .remove('calc__options-1');
            calcThemeRange
                .classList
                .remove('calc__theme-range-1');
            calcScreen
                .classList
                .remove('calc__screen-1');
            calcButtons
                .classList
                .remove('calc__buttons-1');
            calcBtn.forEach(btn => btn.classList.remove('calc__btn-1'));
            calcBtnSpecial.forEach(btn => btn.classList.remove('calc__btn--special-1'));
            calcBtnSpecialEqual
                .classList
                .remove('calc__btn--special-equal-1');

            body
                .classList
                .remove('body-2');
            calcTop
                .classList
                .remove('calc__top-2');
            calcOptions
                .classList
                .remove('calc__options-2');
            calcThemeRange
                .classList
                .remove('calc__theme-range-2');
            calcScreen
                .classList
                .remove('calc__screen-2');
            calcButtons
                .classList
                .remove('calc__buttons-2');
            calcBtn.forEach(btn => btn.classList.remove('calc__btn-2'));
            calcBtnSpecial.forEach(btn => btn.classList.remove('calc__btn--special-2'));
            calcBtnSpecialEqual
                .classList
                .remove('calc__btn--special-equal-2');

            // Add styles
            body
                .classList
                .add('body-3');
            calcTop
                .classList
                .add('calc__top-3');
            calcOptions
                .classList
                .add('calc__options-3');
            calcThemeRange
                .classList
                .add('calc__theme-range-3');
            calcScreen
                .classList
                .add('calc__screen-3');
            calcButtons
                .classList
                .add('calc__buttons-3');
            calcBtn.forEach(btn => btn.classList.add('calc__btn-3'));
            calcBtnSpecial.forEach(btn => btn.classList.add('calc__btn--special-3'));
            calcBtnSpecialEqual
                .classList
                .add('calc__btn--special-equal-3');

        default:
            break;
    }
}

const operations = (value) => {
    const calcResult = document.querySelector('.calc__results');
    if(value == 'reset'){
        calcResult.textContent = 0;
        result=0;
        op='';
        quantities=[];
    }else if (value == 'del') {
        calcResult.textContent = calcResult.textContent.slice(0,-1)
        if( calcResult.textContent === '') {
            calcResult.textContent = 0;
        }
    }else if(typeof parseFloat(value) && (!isNaN(parseFloat(value))) || value == '.'){
        console.log(value)
        if(calcResult.textContent == '0'){
            calcResult.textContent = parseFloat(value)
        }else{
            console.log(value)
            if(calcResult.classList.contains('result')){
                calcResult.classList.remove('result')
                if(value == '.'){
                    return calcResult.textContent += '.'
                }
                return calcResult.textContent = parseFloat(value);
            }
            if(value == '.'){
                return calcResult.textContent += '.'
            }
             console.log(value)

            calcResult.textContent +=parseFloat(value)

        }
    }else if(value == '+' || value == '='){
        if(op === ''){
            quantities = [...quantities, parseFloat(calcResult.textContent)]
            op = value;
            calcResult.textContent+= ' ' + value + ' ';
            if(calcResult.classList.contains('result')){
                calcResult.classList.remove('result')
            }

        }else if(value === '+') {

           if(calcResult.textContent.slice(-1) != value){

            quantities = calcResult.textContent.split('+')
            calcResult.textContent+= ' ' + value ;
            
            if(quantities.length > 1){
                quantities.forEach(n => {
                    result +=  parseFloat(n);
                })
                quantities = [];
                result = 0;
            }

           }
          
        }else if(value === '='){ 
            quantities = calcResult.textContent.split(op)
            console.log(quantities)

            quantities.forEach(n => {
                console.log(parseFloat(n))
                result += parseFloat(n)
            })
            op = ''
            
            quantities =[]
            calcResult.textContent = result;
            console.log(result)
            calcResult.classList.add('result')
            result=0
        }
    }

}

startapp()