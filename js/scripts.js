// Endpoint URL
const apiUrl = 'https://beta4.api.climatiq.io/estimate';

// Your API key (replace with your actual key)
const apiKey = '2EHKF3KSB5MR42GQHR6EQV0JS47D';

// The headers you'll send with the request
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
};

// Sample data for POST (adjust this to the actual data structure required by the API)
const postData = {
    // example data

        "emission_factor": {
          "activity_id": "electricity-supply_grid-source_residual_mix",
          "data_version": "^3"
         },
        "parameters": {
          "energy": 100,
          "energy_unit": "kWh"
        }
    }

// Fetch data from the API
fetch(apiUrl, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(postData)  // Convert the JavaScript object to a JSON string
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    console.log(data);

})
.catch(error => {
    console.error('There was a problem with the fetch:', error.message);
});