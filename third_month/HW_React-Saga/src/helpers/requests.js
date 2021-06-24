export const requests = {
  postRequest: (url, body, method = 'POST') => {
    return fetch(url, {
      body: JSON.stringify(body),
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
};
