document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#form').onsubmit = () => {
         document.querySelector('#search_list').innerHTML="";

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

                for(var i = 0; i<data.tweets.length ; i++){
                    const li = document.createElement('li');
                    const p = document.createElement('p');
                    // li.innerHTML = data.tweets[i][0];
                    if (data.tweets[i][1] >=0){
                        p.setAttribute("style", "color:green;");
                    } else {
                        p.setAttribute("style", "color:red;")
                    }
                    p.innerHTML = data.tweets[i][0];
                    li.append(p);
                    document.querySelector('#search_list').append(li);
                }
                // document.querySelector('#result').innerHTML = contents;
            }
            else {
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
        document.querySelector('#search_list').innerHTML="";

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

               for(var i = 0; i<data.tweets.length ; i++){
                   const li = document.createElement('li');
                   const p = document.createElement('p');
                   if (data.tweets[i][1] >=0){
                        p.setAttribute("style", "color:green;");
                    } else {
                        p.setAttribute("style", "color:red;")
                    }
                   // li.innerHTML = data.tweets[i][0];
                   p.innerHTML = data.tweets[i][0];
                   li.append(p);
                   document.querySelector('#search_list').append(li);
               }
               // document.querySelector('#result').innerHTML = contents;
           }
           else {
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

   document.querySelector('#psenti').onclick = () =>{
     const senti = 'p';
     document.querySelector('#search_list').innerHTML="";



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

                for(var i = 0; i<data.tweets.length ; i++){
                    if(data.tweets[i][1] >=0){
                        const li = document.createElement('li');
                        const p = document.createElement('p');
                        p.setAttribute("style", "color:green;");
                        // li.innerHTML = data.tweets[i][0];
                        p.innerHTML = data.tweets[i][0];
                        li.append(p);
                        document.querySelector('#search_list').append(li);}
                }
                // document.querySelector('#result').innerHTML = contents;
            }
            else {
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


    document.querySelector('#nsenti').onclick = () =>{
        const senti = 'n';
        document.querySelector('#search_list').innerHTML="";

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

                for(var i = 0; i<data.tweets.length ; i++){
                    if(data.tweets[i][1] <0){
                        const li = document.createElement('li');
                        const p = document.createElement('p');
                        p.setAttribute("style", "color:red;");
                        // li.innerHTML = data.tweets[i][0];
                        p.innerHTML = data.tweets[i][0];
                        li.append(p);
                        document.querySelector('#search_list').append(li);}
                }
                // document.querySelector('#result').innerHTML = contents;
            }
            else {
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