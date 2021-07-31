const axios = require('axios');

exports.handler = async (event) => {
  for (const { body } of event.Records) {
    const params = JSON.parse(body);
    await axios.post(`${process.env.BINANCE_APP_URL}/trade`, params)
    .then(function (response) {
      console.log('foi!', response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return `Successfully processed messages.`;
};
