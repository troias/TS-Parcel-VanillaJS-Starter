const apiUtil = require('../../lib/api/utils/api-utils');

const btn = document.querySelector('button')!;
export const fetchResult = document.querySelector('#fetch-result')!;

const clickCheck = () => {
  return console.log('clicked');
};

// btn.addEventListener('click', sendMessage('yooo') as any);
btn.addEventListener('click', apiUtil.sendReq);
