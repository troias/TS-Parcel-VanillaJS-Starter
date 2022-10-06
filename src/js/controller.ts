const apiUtil = require('../../lib/api/utils/api-utils');

const btn = document.querySelector('button')!;
export const fetchResult = document.querySelector('#fetch-result')!;

const clickCheck = () => {
  return console.log('clicked');
};

// btn.addEventListener('click', sendMessage('yooo') as any);
btn.addEventListener('click', apiUtil.sendReq);

const countDownRecursiveReturnArr = (num: number) => {
  if (num === 0) {
    return [];
  }
  return [num, ...countDownRecursiveReturnArr(num - 1)];
};

countDownRecursiveReturnArr(5);

const displayRecrsuriveArrtodom = (arr: number[]) => {
  const ul = document.querySelector('ul')!;
  arr.forEach(num => {
    const li = document.createElement('li');
    li.textContent = num.toString();
    ul.appendChild(li);
  });
};

const returnRecursiveArrFromStartToEnd = (start: number, end: number) => {
  if (start === end) {
    return [start];
  } else if (start > end) {
    return [start, ...returnRecursiveArrFromStartToEnd(start - 1, end)];
  }
  return [start, ...returnRecursiveArrFromStartToEnd(start + 1, end)];
};


const regexdontmatchvowelsornumbers = (str: string) => {

  const regex = /[^aeiou0-9]/gi;
  return str.match(regex);
}

const checkPalandrome = (str: string) => {
  const regex = /[\W_]/g;
  const lowRegStr = str.toLowerCase().replace(regex, '');
  const reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

const convertGivenNumberToRomanNumeral = (num: number) => {
  const romanNumeralObj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let roman = '';

  for (let key in romanNumeralObj) {
    while (num >= romanNumeralObj[key]) {
      roman += key;
      num -= romanNumeralObj[key];
    }
  }
  return roman;
}

const ceasarsCipherReturnDecodedString = (str: string) => {
  const regex = /[A-Z]/g;
  return str.replace(regex, (letter: string) => {
    return String.fromCharCode((letter.charCodeAt(0) % 26) + 65);
  });
}


const telephoneNumberValidator = (str: string) => {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  return regex.test(str);
}

const checkCashRegister = (price: number, cash: number, cid: any) => {

      






