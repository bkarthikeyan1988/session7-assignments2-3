$(document).ready(function() {
    if (typeof(localStorage) === 'undefined' ) {
        alert('Your browser does not support HTML5 localStorage. Try upgrading.');
    } else {
        //load the items
        getItems(); 
    }
});
    
var getItems = function() {
    var timeLog, logLength, i;              
    i = 0;
    logLength = localStorage.length-1; //how many items are in the database starting with zero
    timeLog = '';

    //now we are going to loop through each item in the database
    for (i = 0; i <= logLength; i++) {
        var itemKey, value, values, firstname, lastname,username, email;
        //lets setup some variables for the key and values
        itemKey = localStorage.key(i);
                    
        value = localStorage.getItem(itemKey);
        values = JSON.parse(value);
        firstname = values.fname;
        lastname = values.lname;
        username = values.unanme;
        email = values.email;

        //now that we have the item, lets add it to the table
        timeLog += '<tr id="'+itemKey+'" class="tableRow"><td>'+firstname+'</td><td>'+lastname+'</td><td>'+username+'</td><td>'+email+'</td></tr>';
    }

    $("#memberList").append(timeLog); //update the table with the list items
}