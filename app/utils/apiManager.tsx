export const getSongsList = () => {
  return fetch({
    url: 'https://itunes.apple.com/search?term=Michael+jackson',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
