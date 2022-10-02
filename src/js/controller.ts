const localNodeServer = 'http://localhost:3000';

const sendReqtoServer = async (url: string, method: string, body: any) => {
  const res = await fetch(url, {
    method: method,

    headers: {
      'Content-Type': 'application/json',
      'no-cors': 'true',
    },
    body: JSON.stringify(body),
  });
  return res.json();
};

const btn = document.querySelector('button')!;
const fetchResult = document.querySelector('#fetch-result')!;

const sendReq = async () => {
  const res = await sendReqtoServer(localNodeServer, 'POST', { name: 'max' });
  fetchResult.innerHTML = res.message;
};

const sendMessage = async (message: string) => {
  const res = await sendReqtoServer(`${localNodeServer}/message`, 'POST', {
    message: message,
  });
  console.log(res);

  fetchResult.innerHTML = res.message;
};

const clickCheck = () => {
  return console.log('clicked');
};

// btn.addEventListener('click', sendMessage('yooo') as any);
btn.addEventListener('click', sendReq as any);
