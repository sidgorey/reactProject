import getData from './getData'

function editData(userid, todoid, title, subtitle)
{
    var jsonData = getData();
    for (var key in jsonData) {
        if (jsonData.hasOwnProperty(key)) {
           if(jsonData[key].id == userid)
           {
                var notes = jsonData[key].notes;
                for(var keynote in notes)
                {
                    if(notes[keynote].id == todoid)
                    {
                        notes[keynote].noteTitle = title;
                        notes[keynote].Description = subtitle;
                        break;
                    }
                }
                break;

           }
        }
     }
     fetch('http://localhost:3000/users', {
     method: 'PUT',
     body: jsonData
     })
     .then(response => response.json())
     .catch(error => console.error('Error:', error))
     .then(response => console.log('Success:', JSON.stringify(response)));


}