function putData(userid, notesArray, callback)
{
    fetch('http://localhost:3000/users'.concat('/').concat(userid), {
        method: 'PUT',
        body: JSON.stringify({
            "notes" : notesArray
        }),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => {
          
          callback(false)
      })
      .catch(error => {
          console.error('Error:', error);
          callback(true)
        }
      );
}

export default (putData)