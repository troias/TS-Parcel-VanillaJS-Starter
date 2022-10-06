const countDownRecursiveReturnArr = (num: number): number[] => {
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

const returnRecursiveArrFromStartToEnd = (
  start: number,
  end?: undefined | number
): number[] => {
  if (start === end) {
    return [start];
  } else if (end && start > end) {
    return [start, ...returnRecursiveArrFromStartToEnd(start - 1, end)];
  }
  return [start, ...returnRecursiveArrFromStartToEnd(start + 1, end)];
};

const regexdontmatchvowelsornumbers = (str: string) => {
  const regex = /[^aeiou0-9]/gi;
  return str.match(regex);
};

const checkPalandrome = (str: string) => {
  const regex = /[\W_]/g;
  const lowRegStr = str.toLowerCase().replace(regex, '');
  const reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
};

const convertGivenNumberToRomanNumeral = (num: number) => {
  type romanNumeral = {
    [key: string]: number;
    M: number;
    CM: number;
    D: number;
    CD: number;
    C: number;
    XC: number;
    L: number;
    XL: number;
    X: number;
    IX: number;
    V: number;
    IV: number;
    I: number;
  };

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
    I: 1,
  } as romanNumeral;

  let roman = '';

  for (let key in romanNumeralObj) {
    while (num >= romanNumeralObj[key]) {
      roman += key;
      num -= romanNumeralObj[key];
    }
  }
  return roman;
};

const ceasarsCipherReturnDecodedString = (str: string) => {
  const regex = /[A-Z]/g;
  return str.replace(regex, (letter: string) => {
    return String.fromCharCode((letter.charCodeAt(0) % 26) + 65);
  });
};

const telephoneNumberValidator = (str: string) => {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  return regex.test(str);
};

const checkCashRegister = (price: number, cash: number, cid: any) => {
  interface currencyUnit {
    [key: string]: number;
    PENNY: number;
    NICKEL: number;
    DIME: number;
    QUARTER: number;
    ONE: number;
    FIVE: number;
    TEN: number;
    TWENTY: number;
    'ONE HUNDRED': number;
  }

  const currencyUnit = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    'ONE HUNDRED': 100,
  } as currencyUnit;

  let change = cash - price;
  let cidTotal = cid.reduce(
    (acc: number, curr: [string, number]) => acc + curr[1],
    0
  );
  cidTotal = Math.round(cidTotal * 100) / 100;

  if (cidTotal === change) {
    return { status: 'CLOSED', change: cid };
  }

  if (cidTotal < change) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  const changeArr = cid
    .reverse()
    .map((curr: [string, number]) => {
      const currUnit = currencyUnit[curr[0]];
      let value = 0;
      while (change >= currUnit && curr[1] >= currUnit) {
        change -= currUnit;
        change = Math.round(change * 100) / 100;
        curr[1] -= currUnit;
        value += currUnit;
      }
      return [curr[0], value];
    })
    .filter(curr => curr[1] > 0);

  if (changeArr.length < 1 || change > 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  return { status: 'OPEN', change: changeArr };
};
