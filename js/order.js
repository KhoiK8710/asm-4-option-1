document.getElementById('about').addEventListener('submit',function (event) {
    event.preventDefault();
    validate_name();
    validate_message();
    validate_date();
    validate_deliver();
})

function validate_name() {
    var name = document.getElementById('names').value;
    console.log(name);
    if (name == '') {
        document.getElementById('name_error').innerHTML = 'Please fill out your name.';
    }
    else if (name.length >= 100) {
        document.getElementById('name_error').innerHTML = 'Your name should not exceed 100 characters.';
    }
    else {
        document.getElementById('name_error').innerHTML = '';
    }
}

function validate_message() {
    var message = document.getElementById('message').value;
    console.log(message);
    if (message == "") {
        document.getElementById("message_error").innerHTML = "Please fill out" 
    }
    else if (message.length >= 30) {
        document.getElementById('message_error').innerHTML = "Message should not exceed 30 characters.";
    }
    else {
        document.getElementById('message_error').innerHTML = '';
    }
}

function validate_date() {
    var date = document.getElementById('day').value;
    var dates = new Date();
    var dateFormat = dates.getFullYear() + "-" +((dates.getMonth()+1).length != 2 ? "0" + (dates.getMonth() + 1) : (dates.getMonth()+1)) + "-" + 
    String(dates.getDate()).padStart(2, '0');
    console.log(dateFormat);
    console.log(date);
    if (date == '') {
        document.getElementById('date_error').innerHTML = "Vui lòng nhập ngày";
    }

    else if (date < dateFormat) {
        document.getElementById('date_error').innerHTML = "Vui lòng nhập ngày lớn hơn ngày hiện tại";
    }
    else {
        document.getElementById('date_error').innerHTML = '';
    }
}

function validate_deliver() {
    var deliver = document.getElementById('delives').value;
    console.log(deliver);
    if (deliver == '') {
        document.querySelector("#delives_error").innerHTML = 'Please fill out the address.';
    }
    else if (deliver >= 500) {
        document.querySelector("#delives_error").innerHTML = "Address should not exceed 500 characters.";
    }
    else {
        document.querySelector("#delives_error").innerHTML = '';
    }
}