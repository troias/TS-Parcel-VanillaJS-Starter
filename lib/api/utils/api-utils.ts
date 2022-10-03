const localNodeServer = 'http://localhost:3001';
import { fetchResult } from '../../../src/js/controller';

const sendReqtoServer = async (url: string, method: string, body: any) => {
  const checkBody = () => {
    if (method === 'POST') {
      return JSON.stringify(body);
    } else {
      return null;
    }
  };
  const res = await fetch(url, {
    method: method,

    headers: {
      'Content-Type': 'application/json',
      'no-cors': 'true',
      cors: 'false',
    },

    body: checkBody(),
  });
  return res.json();
};

const sendReq = async () => {
  const res = await sendReqtoServer(localNodeServer, 'POST', { name: 'max' });
  fetchResult.innerHTML = res.message;
};

const sendGetReq = async () => {
  const res = await sendReqtoServer(localNodeServer, 'GET', {});
  fetchResult.innerHTML = res.message;
};

const fetchPageHtml = async () => {
  const res = await sendReqtoServer(localNodeServer, 'GET', {});
  fetchResult.innerHTML = res.message;
  console.log(res);
};

export { sendReq, sendGetReq, fetchPageHtml };
