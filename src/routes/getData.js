
function getAllUsers(email,callback){
    
    
    fetch('http://localhost:3000/users'.concat('/').concat(email))
    .then(function(response){
        return response.json();
    })    
    .then(function(myJson){
        
        callback(myJson, false);
        return myJson
        
    })
    .catch((error,myJson) => {
        console.error('Error:', error);
        callback(myJson, true)
    });

    
    
}

export default (getAllUsers)