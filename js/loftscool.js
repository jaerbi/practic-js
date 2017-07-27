$(function() {
   $('#btn-send').click(sendForm);
});

function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/jaerbi42@gmail.com",
        method: "POST",
        data: {
            name: $('#user-name').val(),
            email: $('#user-email').val(),
            phone: $('#user-phone').val()
        },
        dataType: "json" 
    })
    .done(function() {
        document.getElementById("myForm").reset();
        $('.my-form').html('Дякую! Ваше повідомлення відправлено');
    });
}

/*

let sum = function () {
    let result = 0;
    
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    
    return result;
}

let sum2 = sum;

let res = sum2(1,2,3);

console.log(res);*/

/*function rec(number) {
    for (let i = 0; i <= number; i++) {
        console.log(i);
    }
}

rec(10);
*/