const baseURL = 'http://localhost:3000';
const randomMessageURL = `${baseURL}/message`;

const api = {
  fetchRandomMessage: async () => {
    const response = await fetch(randomMessageURL);
    const { msg } = await response.json();

    return msg;
  },
};
export default api;
