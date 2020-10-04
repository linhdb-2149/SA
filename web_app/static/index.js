  function sendreq() {

  }

  document.addEventListener('DOMContentLoaded', () => {

      document.querySelector('#form').onsubmit = () => {
          document.querySelector('#search_list').innerHTML = "";

          // Initialize new request
          const request = new XMLHttpRequest();
          const search_query = document.querySelector('#form-username').value;
          request.open('POST', '/search');

          // Callback function for when request completes
          request.onload = () => {

              // Extract JSON data from request
              const data = JSON.parse(request.responseText);

              // Update the result div
              if (data.success) {

                  for (var i = 0; i < data.tweets.length; i++) {
                      const li = document.createElement('li');
                      const p = document.createElement('p');
                      const span = document.createElement('span');
                      const span_text = document.createElement('span');
                      // li.innerHTML = data.tweets[i][0];
                      span.innerHTML = data.tweets[i][0].split(':')[0];
                      // p.innerHTML = data.tweets[i][0].split(':').splice(1);
                      span_text.innerHTML = data.tweets[i][0].split(':')[1];
                      p.append(span)
                      p.append(span_text);
                      if (data.tweets[i][0].split(':')[0] == 'Positive'){
                          span.style.backgroundColor = 'green';
                          span.style.color = 'white';
                          span_text.style.color = 'green';
                      }
                      if (span.innerHTML == 'Negative'){
                          span.style.backgroundColor = 'red';
                          span.style.color = 'white';
                          span_text.style.color = 'red';
                      }
                      li.append(p);
                      document.querySelector('#search_list').append(li);
                  }
                  // document.querySelector('#result').innerHTML = contents;
              } else {
                  // document.querySelector('#result').innerHTML = 'There was an error.';
              }
          }

          // Add data to send with request
          const data = new FormData();
          data.append('search_query', search_query);

          // Send request
          request.send(data);
          return false;

      };

      document.querySelector('#sentiment_btn').onclick = () => {
          document.querySelector('#search_list').innerHTML = "";

          // Initialize new request
          const request = new XMLHttpRequest();
          const search_query = document.querySelector('#form-username').value;
          request.open('POST', '/sentiment');

          // Callback function for when request completes
          request.onload = () => {

              // Extract JSON data from request
              const data = JSON.parse(request.responseText);

              // Update the result div
              if (data.success) {
                  for (var i = 0; i < data.tweets.length; i++) {
                      const li = document.createElement('li');
                      const p = document.createElement('p');
                      const span = document.createElement('span');
                      const span_text = document.createElement('span');
                      // li.innerHTML = data.tweets[i][0];
                      span.innerHTML = data.tweets[i][0].split(':')[0];
                      // p.innerHTML = data.tweets[i][0].split(':').splice(1);
                      span_text.innerHTML = data.tweets[i][0].split(':')[1];
                      p.append(span)
                      p.append(span_text);
                      if (data.tweets[i][0].split(':')[0] == 'Positive'){
                          span.style.backgroundColor = 'green';
                          span.style.color = 'white';
                          span_text.style.color = 'green';
                      }
                      if (span.innerHTML == 'Negative'){
                          span.style.backgroundColor = 'red';
                          span.style.color = 'white';
                          span_text.style.color = 'red';
                      }
                      // li.innerHTML = data.tweets[i][0];
                      // p.innerHTML = data.tweets[i][0];
                      li.append(p);
                      document.querySelector('#search_list').append(li);



                  }
                  // document.querySelector('#result').innerHTML = contents;
              } else {
                  // document.querySelector('#result').innerHTML = 'There was an error.';
              }
          }

          // Add data to send with request
          const data = new FormData();
          data.append('search_query', search_query);
          // Send request
          request.send(data);
          return false;

      };

      document.querySelector('#psenti').onclick = () => {
          const senti = 'p';
          document.querySelector('#search_list').innerHTML = "";



          // Initialize new request
          const request = new XMLHttpRequest();
          const search_query = document.querySelector('#form-username').value;
          request.open('POST', '/search');

          // Callback function for when request completes
          request.onload = () => {

              // Extract JSON data from request
              const data = JSON.parse(request.responseText);

              // Update the result div
              if (data.success) {
                  for (var i = 0; i < data.tweets.length; i++) {
                      if (data.tweets[i][1] >= 0) {
                          const li = document.createElement('li');
                          const p = document.createElement('p');
                          const span = document.createElement('span');
                          const span_text = document.createElement('span');
                          // li.innerHTML = data.tweets[i][0];
                          span.innerHTML = data.tweets[i][0].split(':')[0];
                          span_text.innerHTML = data.tweets[i][0].split(':')[1];
                          // p.innerHTML = data.tweets[i][0].split(':').splice(1);
                          p.append(span)
                          p.append(span_text);   
                          span.style.backgroundColor = 'green';
                          span.style.color = 'white';
                          span_text.style.color = 'green';
                          li.append(p);
                          document.querySelector('#search_list').append(li);
                      }

                  }
                  // document.querySelector('#result').innerHTML = contents;
              } else {
                  // document.querySelector('#result').innerHTML = 'There was an error.';
              }
          }

          // Add data to send with request
          const data = new FormData();
          data.append('search_query', search_query);

          // Send request
          request.send(data);
          return false;
      };


      document.querySelector('#nsenti').onclick = () => {
          const senti = 'n';
          document.querySelector('#search_list').innerHTML = "";

          // Initialize new request
          const request = new XMLHttpRequest();
          const search_query = document.querySelector('#form-username').value;
          request.open('POST', '/search');

          // Callback function for when request completes
          request.onload = () => {

              // Extract JSON data from request
              const data = JSON.parse(request.responseText);

              // Update the result div
              if (data.success) {
                  for (var i = 0; i < data.tweets.length; i++) {
                      if (data.tweets[i][1] < 0) {
                          const li = document.createElement('li');
                          const p = document.createElement('p');
                          const span = document.createElement('span');
                          const span_text = document.createElement('span');
                          // li.innerHTML = data.tweets[i][0];
                          span.innerHTML = data.tweets[i][0].split(':')[0];
                          span_text.innerHTML = data.tweets[i][0].split(':')[1];
                          // p.innerHTML = data.tweets[i][0].split(':').splice(1);
                          p.append(span)
                          p.append(span_text);   
                          span.style.backgroundColor = 'red';
                          span.style.color = 'white';
                          span_text.style.color = 'red';
                          // li.innerHTML = data.tweets[i][0];
                          li.append(p);
                          document.querySelector('#search_list').append(li);
                      }


                  }
                  // document.querySelector('#result').innerHTML = contents;
              } else {
                  // document.querySelector('#result').innerHTML = 'There was an error.';
              }
          }

          // Add data to send with request
          const data = new FormData();
          data.append('search_query', search_query);

          // Send request
          request.send(data);
      return false;
     };
  });