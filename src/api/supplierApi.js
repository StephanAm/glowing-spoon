const request = require('request');
const suppliers = [
    { id: 'a', name: 'AMax90'},
    { id: 'b', name: 'Cortez'},
    { id: 'c', name: 'Classic Pub.'},
    { id: 'd', name: 'UltraBow'}
  ];
  

function GetSuppliers(){
    /*
    [
        {
          "id": 0,
          "name": "string",
          "city": "string",
          "reference": "string"
        }
      ]
      */
    return new Promise((resolve) =>{
        request('http://frontendshowcase.azurewebsites.net/api/Suppliers', (error, response, body)=> {
            if (!error && response.statusCode == 200) {
              resolve(JSON.parse(body));
            }
          });
    });
}

export default {
    GetSuppliers
}