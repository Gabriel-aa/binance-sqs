const axios = require('axios');

exports.handler = async (event) => {
  for (const { body } of event.Records) {
    console.log('processing...');
    const params = JSON.parse(body);
    await axios.post(`${process.env.BINANCE_APP_URL}/trade`, params)
    .then(function () {
      console.log('done!');
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return `Successfully processed messages.`;
};
