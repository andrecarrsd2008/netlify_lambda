const axios = require('axios');

exports.handler = function(event, context, callback){
  const API_URL = 'https://api.github.com/users';
  const API_CLIENT_ID = '2ba2bcc85fcea544648c';
  const API_CLIENT_SECRET = 'c906cb6c446fc3c5cd71742ce88f66d894b47a82'
 
  const URL = `${API_URL}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`;

  // Send user response
  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    });
  }

  // Perform API call
  const getUsers = () => {
    axios.get(URL)
    .then(res => send(res.data))
    .catch(err => send(err));
  }

  // Make sure method is GET
  if(event.httpMethod == 'GET') {
    // Run
    getUsers();
  }
}