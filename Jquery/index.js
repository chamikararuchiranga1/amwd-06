$('#show-btn').click(function (){
    $('#view').show();
})

$('#hide-btn').click(function (){
    $('#view').hide();
});


$(document).ready(function () {
    $('#about').hide();
    $('#add-customer').hide();
    $('#add-item').hide();
})

$('#about-btn').click(function (){
    $('#about').show();
    $('#home').hide();
    $('#add-customer').hide();
    $('#add-item').hide();
});

$('#home-btn').click(function (){
    $('#home').show();
    $('#about').hide();
    $('#add-customer').hide();
    $('#add-item').hide();
});

$('#cus-btn').click(function (){
    $('#home').hide();
    $('#about').hide();
    $('#add-customer').show();
    $('#add-item').hide();
});

$('#item-btn').click(function (){
    $('#home').hide();
    $('#about').hide();
    $('#add-customer').hide();
    $('#add-item').show();
});
