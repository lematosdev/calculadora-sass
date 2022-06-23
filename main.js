const inputs = document.querySelectorAll(
  'input[type="radio"]'
);

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
