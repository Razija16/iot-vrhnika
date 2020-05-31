$(document).ready(async () => {
    const url = "https://ar-muzej.herokuapp.com/";
    let response = await fetch(url);
    if (response.ok) { 
        let resp = await response.json();
        for(let i = 0; i < resp.length; i++){ 
            if(resp[i].clicked == 'Info opened'){
                $('.dashboard-items-1')
                .append("<div class='col-sm-4 card'> <h3>ID:  " + resp[i]._id + "</h3> <p>Info: " + resp[i].clicked + " </p> <p>Date: " + resp[i].date + " </p></div>");
            }
            else if(resp[i].clicked == 'Info closed') {
                $('.dashboard-items-2')
                .append("<div class='col-sm-4 card'> <h3>ID:  " + resp[i]._id + "</h3> <p>Info: " + resp[i].clicked + " </p> <p>Date: " + resp[i].date + " </p></div>");
            }
            else if(resp[i].clicked == 'Rotating model') {
                $('.dashboard-items-3')
                .append("<div class='col-sm-4 card'> <h3>ID:  " + resp[i]._id + "</h3> <p>Info: " + resp[i].clicked + " </p> <p>Date: " + resp[i].date + " </p></div>");
            }
            else if(resp[i].clicked == 'Play animation') {
                $('.dashboard-items-4')
                .append("<div class='col-sm-4 card'> <h3>ID:  " + resp[i]._id + "</h3> <p>Info: " + resp[i].clicked + " </p> <p>Date: " + resp[i].date + " </p></div>");
            }
        }
        console.log(resp);
    } else {
        alert("HTTP-Error: " + response.status);
    }
});