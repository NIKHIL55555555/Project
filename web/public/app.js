// const API_URL = 'http://localhost:5000/api';
const RECPDATA_URL = 'http://localhost:5001/data';
const SENSORDATA_URL = 'http://localhost:5003/sensor-data';
const USERDATA_URL = 'http://localhost:5002/user-data';

// $.get(`${API_URL}/devices`)
//   .then(response => {
//     response.forEach(device => {
//       $('#devices tbody').append(`
//       <tr>
//         <td>${device.user}</td>
//         <td>${device.name}</td>
//       </tr>`
//       );
//     });
//   })
//   .catch(error => {
//     console.error(`Error: ${error}`);
// });

$.get(`${SENSORDATA_URL}/SensorData`)
  .then(response => {
    response.forEach(device => {
      $('#patientdata tbody').append(`
      <tr>
        <td>${device.room_temp}</td>
        <td>${device.body_temp}</td>
      </tr>`
      );
    });
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });

let value = false;
$.get(`${RECPDATA_URL}/devices`)
  .then(response => {
    $('#add-user').on('click', () => {
      const name = $('#name').val();
      const user = $('#user').val();
      response.forEach(device => {
        if (user == '124' && name == device.password) {
          alert(`Successfully Login ${user}`)
          location.href = '101.html';
        }
        else if (user == '125' && name == device.password) {
          alert(`Successfully Login ${user}`)
          location.href = '102.html';
        }
        else if (user == '126' && name == device.password) {
          alert(`Successfully Login ${user}`)
          location.href = '103.html';
        }
        else if (user == '127' && name == device.password) {
          alert(`Successfully Login ${user}`)
          location.href = '104.html';
        }
        else
        {
          location.href = '404.html'
        }
      })
    });
    // console.log(response);
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });


// $.get(`${USERDATA_URL}/devices`)
//   .then(response => {
//     response.forEach(device => {
//     });
//   })
//   .catch(error => {
//     console.error(`Error: ${error}`);
//   });

// $('#add-user').on('click', () => {
//   const name = $('#name').val();
//   const password = $('#password').val();
//   const sensorData = [];

//   const body = {
//     name,
//     password,
//     sensorData
//   };

//   $.post(`${USERDATA_URL}/devices`, body)
//     .then(response => {
//       location.href = '/';
//     })
//     .catch(error => {
//       console.error(`Error: ${error}`);
//     });
// });

$('#add-device').on('click', () => {
  const name = $('#name').val();
  const user = $('#user').val();
  const sensorData = [];

  const body = {
    name,
    user,
    sensorData
  };

  $.post(`${RECPDATA_URL}/devices`, body)
    .then(response => {
      location.href = '/';
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
});

$('#124').on('click', () => {
  const id = '124';
  const password = $('#Password').val();

  const body = {
    id,
    password
  };

  $.post(`${RECPDATA_URL}/devices`, body)
    .then(response => {
      location.href = '/';
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
});

$('#125').on('click', () => {
  const id = '125';
  const password = $('#Password1').val();

  const body = {
    id,
    password
  };

  $.post(`${RECPDATA_URL}/devices`, body)
    .then(response => {
      location.href = '/';
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
});

$('#126').on('click', () => {
  const id = '126';
  const password = $('#Password2').val();

  const body = {
    id,
    password
  };

  $.post(`${RECPDATA_URL}/devices`, body)
    .then(response => {
      location.href = '/';
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
});

$('#127').on('click', () => {
  const id = '127';
  const password = $('#Password3').val();

  const body = {
    id,
    password
  };

  $.post(`${RECPDATA_URL}/devices`, body)
    .then(response => {
      location.href = '/';
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
});