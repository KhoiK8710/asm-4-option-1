document.getElementById('about').addEventListener('submit',function (event) {
        event.preventDefault();
        validate_name();
        validate_email();
        validate_subject();
        validate_message();
    })

function validate_name() {
    var name = document.getElementById('name').value;
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

function validate_email() {
    var email = document.getElementById('email').value;
    const event = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(email);
    if (email == '') {
        document.getElementById('email_error').innerHTML = 'Please fill out your email.';
    }
    else if (email.length >= 100) {
        document.getElementById('email_error').innerHTML = 'Your email should not exceed 100 characters.';
    }
    else if (!event.test(email)) {
            alert('Please enter the correct email format')
        }
     else {
        document.getElementById('email_error').innerHTML = '';
    }
  
}

function validate_subject() {
    var subject = document.getElementById('subject').value;
    console.log(subject);
    if (subject == '') {
        document.getElementById('subject_error').innerHTML = 'Please fill out the subject.';
    }
    else if (subject.length <= 50) {
        document.getElementById('subject_error').innerHTML = 'Subject should not shorter than 50 characters.';
    }
    else if (subject.length >= 250) {
        document.getElementById('subject_error').innerHTML = 'Subject should not exceed 250 characters.';
    }
    else {
        document.getElementById('subject_error').innerHTML = '';
    }
}

function validate_message() {
    var message = document.getElementById('message').value;
    console.log(message);
    if (message == '') {
        document.getElementById('message_error').innerHTML = 'Please fill out the message.';
    }
    else if (message.length >= 500) {
        document.getElementById('message_error').innerHTML = 'Message should not exceed 500 characters.'
    }
    else {
        document.getElementById('message_error').innerHTML = '';
    }
}