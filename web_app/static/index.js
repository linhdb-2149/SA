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
                    // li.innerHTML = data.tweets[i][0];
                    p.style.color = 'blue1';
                    p.innerHTML = data.tweets[i][0];
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
                    // li.innerHTML = data.tweets[i][0];
                    span.innerHTML = data.tweets[i][0].split(':')[0];
                    // p.innerHTML = data.tweets[i][0].split(':').splice(1);
                    p.append(span)
                    p.append(data.tweets[i][0].split(':').splice(1)); 
                    if (data.tweets[i][0].split(':')[0] == 'Positive'){
                        span.style.backgroundColor = 'green';
                        span.style.color = 'white';
                    }
                    if (span.innerHTML == 'Negative'){
                        span.style.backgroundColor = 'red';
                        span.style.color = 'white';
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
                        // li.innerHTML = data.tweets[i][0];
                        span.innerHTML = data.tweets[i][0].split(':')[0];
                        // p.innerHTML = data.tweets[i][0].split(':').splice(1);
                        p.append(span)
                        p.append(data.tweets[i][0].split(':').splice(1));   
                        span.style.backgroundColor = 'green';
                        span.style.color = 'white';
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
                        // li.innerHTML = data.tweets[i][0];
                        span.innerHTML = data.tweets[i][0].split(':')[0];
                        // p.innerHTML = data.tweets[i][0].split(':').splice(1);
                        p.append(span)
                        p.append(data.tweets[i][0].split(':').splice(1));   
                        span.style.backgroundColor = 'red';
                        span.style.color = 'white';
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



    document.querySelector('#opi').onclick = () => {
        const opi = 'o';
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
                    if (data.tweets[i][2] >= 0.5) {
                        const li = document.createElement('li');
                        const p = document.createElement('p');
                        // li.innerHTML = data.tweets[i][0];
                        p.innerHTML = data.tweets[i][0];
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


    document.querySelector('#fac').onclick = () => {
        const opi = 'f';
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
                    if (data.tweets[i][2] < 0.5) {
                        const li = document.createElement('li');
                        const p = document.createElement('p');
                        // li.innerHTML = data.tweets[i][0];
                        p.innerHTML = data.tweets[i][0];
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