import axios from 'axios';

const method = 'GET';
const url = 'https://jsonplaceholder.typicode.com/todos';

export const todosFetch = () => {
  return axios({
    method,
    url
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      if (error.response) {
        const code = error.response.status;
        const message = error.response.statusText;
        // The request was made and the server responded with a status code
        console.warn(code, message);
        throw new Error();
      } else if (error.request) {
        // The request was made but no response was received
        console.warn(error.request);
        throw new Error();
      } else {
        // Something happened in setting up the request that triggered an Error
        console.warn('Error', error.message);
        throw new Error();
      }
    });
};
