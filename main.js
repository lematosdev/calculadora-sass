const inputs = document.querySelectorAll(
  'input[type="radio"]'
);

const numbers = document.querySelectorAll('.number');

const operators = document.querySelectorAll('.operator');

const delInput = document.querySelector('.delete');

const reset = document.querySelector('.reset');

const screen = document.querySelector(
  '.calculator-screen > span'
);

const decimal = document.querySelector('.decimal');

const equal = document.querySelector('.equal-sign');

let firstValue = '0';
let secondValue = '0';
let operator = '';

decimal.onclick = function () {
  if (operator === '') {
    if (firstValue.length === 0) {
      firstValue = '0.';
    } else if (firstValue.indexOf('.') === -1) {
      firstValue += '.';
    }
    screen.innerText = firstValue;
  } else {
    if (secondValue.length === 0) {
      secondValue = '0.';
    } else if (secondValue.indexOf('.') === -1) {
      secondValue += '.';
    }
    screen.innerText = `${firstValue}${operator}${secondValue}`;
  }
};

reset.onclick = function () {
  firstValue = '0';
  secondValue = '0';
  operator = '';
  screen.innerText = '0';
};

equal.onclick = function () {
  if (firstValue && secondValue && operator) {
    if (operator === '/' && secondValue === '0') {
      screen.innerText = 'Error';
      firstValue = '0';
      secondValue = '0';
      operator = '';
      return
    };
    const result = String(
      eval(
        `${firstValue}${
          operator === 'x' ? '*' : operator
        }${secondValue}`
      )
    );
    firstValue = result;
    secondValue = '';
    operator = '';
    screen.innerText = parseValues(result);
  }
};
function parseValues(value) {
  return Number(value.replace(/,/g, '')).toLocaleString(
    'en-US'
  );
}

delInput.onclick = function () {
  let slice;
  if (operator === '') {
    slice = screen.innerText.slice(0, -1);
    firstValue = parseValues(slice);
    screen.innerText = firstValue;
  } else {
    slice = screen.innerText
      .split(operator)[1]
      .slice(0, -1);

    if (secondValue.length === 0) {
      operator = '';
    }
    secondValue = slice;
    screen.innerText = `${parseValues(
      firstValue
    )}${operator}${
      parseValues(secondValue) === '0'
        ? ''
        : parseValues(secondValue)
    }`;
  }
};

operators.forEach((o) => {
  o.onclick = function () {
    if (operator === '' || secondValue === '0') {

      operator = o.innerText;
      screen.innerText = `${parseValues(
        firstValue
      )}${operator}`;
    } else if (Number(secondValue) && operator) {
      const result = eval(
        `${firstValue}${
          operator === 'x' ? '*' : operator
        }${secondValue}`
      );
      firstValue = String(result);
      secondValue = '';
      operator = o.innerText;
      screen.innerText = parseValues(firstValue) + operator;
    }
  };
});

numbers.forEach((number) => {
  number.onclick = function () {
    if (screen.innerText.length >= 13) return;
    if (operator === '') {
      if (
        firstValue === '0' &&
        firstValue.indexOf('.') === -1
      ) {
        firstValue = number.innerText;
      } else {
        firstValue += number.innerText;
      }
      screen.innerText = parseValues(firstValue);
    } else {
      if (
        secondValue === '0' &&
        secondValue.indexOf('.') === -1
      ) {
        secondValue = number.innerText;
      } else {
        secondValue += number.innerText;
      }
      screen.innerText = `${parseValues(
        firstValue
      )}${operator}${parseValues(secondValue)}`;
    }
  };
});

const CSS_VARIABLES = {
  bgColor: '--bg-color',
  bgCalcColor: '--calc-bg-color',
  primaryTextColor: '--primary-text-color',
  secondaryTextColor: '--secondary-text-color',
  delResetTextColor: '--del-reset-text-color',
  bgScreenColor: '--bg-screen-color',
  keyColor: '--key-color',
  bgKeyColor: '--key-bg-color',
  shadowKeyColor: '--key-shadow-color',
  shadowSecondaryKeyColor: '--key-secondary-shadow-color',
  calcKeyHover: '--calc-key-hover',
  delResetHover: '--del-reset-hover',
  toggleKeyColor: '--key-toggle-color',
  equalKeyShadowColor: '--key-equal-shadow-color',
  equalKeyHoverColor: '--key-equal-hover-color',
  thirdTextColor: '--third-text-color'
};

const theme1 = {
  bgColor: 'hsl(222, 26%, 31%)',
  primaryTextColor: 'hsl(221, 14%, 31%)',
  secondaryTextColor: 'white',
  bgScreenColor: 'hsl(224, 36%, 15%)',
  bgCalcColor: 'hsl(223, 31%, 20%)',
  keyColor: 'hsl(30, 25%, 89%)',
  bgKeyColor: 'hsl(225, 21%, 49%)',
  shadowKeyColor: 'hsl(224, 28%, 35%)',
  shadowSecondaryKeyColor: 'hsl(28, 16%, 65%)',
  calcKeyHover: 'white',
  delResetHover: 'rgb(143, 159, 206)',
  toggleKeyColor: 'hsl(6, 63%, 50%)',
  equalKeyShadowColor: 'hsl(6, 70%, 34%)',
  equalKeyHoverColor: 'hsl(3, 100%, 68%)',
  thirdTextColor: 'white',
  delResetTextColor: 'white'
};

const theme2 = {
  bgColor: 'hsl(0, 0%, 90%)',
  primaryTextColor: 'hsl(60, 10%, 19%)',
  secondaryTextColor: 'hsl(60, 10%, 19%)',
  bgScreenColor: 'hsl(0, 0%, 93%)',
  bgCalcColor: 'hsl(0, 5%, 81%)',
  keyColor: 'hsl(30, 25%, 89%)',
  bgKeyColor: 'hsl(185, 42%, 37%)',
  shadowKeyColor: 'hsl(185, 58%, 25%)',
  shadowSecondaryKeyColor: 'hsl(28, 16%, 65%)',
  calcKeyHover: 'white',
  delResetHover: '#62b4bc',
  toggleKeyColor: 'hsl(25, 98%, 40%)',
  equalKeyShadowColor: 'hsl(25, 99%, 27%',
  equalKeyHoverColor: '#fe8a38',
  thirdTextColor: 'white',
  delResetTextColor: 'white'
};

const theme3 = {
  bgColor: 'hsl(268, 75%, 9%)',
  primaryTextColor: 'hsl(52, 100%, 62%)',
  secondaryTextColor: 'hsl(52, 100%, 62%)',
  thirdTextColor: 'hsl(198, 20%, 13%)',
  delResetTextColor: 'white',
  bgScreenColor: 'hsl(268, 71%, 12%)',
  bgCalcColor: 'hsl(268, 71%, 12%)',
  keyColor: 'hsl(268, 47%, 21%)',
  bgKeyColor: 'hsl(281, 89%, 26%)',
  shadowKeyColor: 'hsl(290, 70%, 36%)',
  shadowSecondaryKeyColor: 'hsl(285, 91%, 52%)',
  calcKeyHover: '#6a35ac',
  delResetHover: '#8630b1',
  toggleKeyColor: 'hsl(176, 100%, 44%)',
  equalKeyShadowColor: 'hsl(177, 92%, 70%)',
  equalKeyHoverColor: '#94fef8'
};

function changeCSSTheme(theme) {
  for (const key in CSS_VARIABLES) {
    document.documentElement.style.setProperty(
      CSS_VARIABLES[key],
      theme[key]
    );
  }
}

inputs.forEach((i) => {
  i.addEventListener('change', (e) => {
    switch (e.target.value) {
      case '1':
        changeCSSTheme(theme1);
        break;
      case '2':
        changeCSSTheme(theme2);
        break;
      case '3':
        changeCSSTheme(theme3);
        break;
    }
  });
});
