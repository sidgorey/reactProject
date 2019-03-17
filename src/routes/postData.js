
function postData( data, callback){


    let jsonData = {
        "id" : data,
        "notes": []
    }
    fetch('http://localhost:3000/users', {
        method: 'POST', 
        body: JSON.stringify(jsonData), // data can be `string` or {object}!
        headers:{
        'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => {
        
        callback(false);
        
    })
        .catch(error => {
            console.error('Error:', error);
            callback(true)
        });

    
}
export default (postData)