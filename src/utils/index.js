const titi = 'lqUlp0pBKZAD3VOvS9JQO1hELspnR4M1s5PfWvsjrp2';

const sendToIfttt = async (eventName, value1, value2) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const urlencoded = new URLSearchParams();
  urlencoded.append('value1', value1);
  urlencoded.append('value2', value2);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    mode: 'no-cors',
  };

  fetch(`https://maker.ifttt.com/trigger/${eventName}/with/key/${titi}`, requestOptions).then(() => {
    console.log('done');
  });
};

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line

const validEmail = (email) => re.test(email);

export {
  validEmail, sendToIfttt,
};
