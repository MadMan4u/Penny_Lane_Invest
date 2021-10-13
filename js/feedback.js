$('.left__side-feedback').fadeOut();
$('.button').click( function() {
	$('.left__side-feedback').fadeIn();
});
$('.popup-close').click( function() {
	$('.left__side-feedback').fadeOut();
});
$(document).mouseup( function (e) { 
	var popup = $('.left__side-feedback');
	if (e.target != popup[0] && popup.has(e.target).length === 0){
		$('.left__side-feedback').fadeOut();
	}
});

// button-mobile
$('.left__side-feedback').fadeOut();
$('.button-mobile').click( function() {
	$('.left__side-feedback').fadeIn();
});
$('.popup-close').click( function() {
	$('.left__side-feedback').fadeOut();
});
$(document).mouseup( function (e) { 
	var popup = $('.left__side-feedback');
	if (e.target != popup[0] && popup.has(e.target).length === 0){
		$('.left__side-feedback').fadeOut();
	}
});

function checkParams() {
    var username = $('#username').val();
    var useremail = $('#useremail').val();
    var usernumber = $('#usernumber').val();
    var commentary = $('#commentary').val();

    if (username.length === 0) {
        $('#username').css('background-color', '#F3F3F3');
    } else {
        $('#username').css('background-color', '#fff');
    }
    if (useremail.length === 0) {
        $('#useremail').css('background-color', '#F3F3F3');
    } else {
        $('#useremail').css('background-color', '#fff');
    }
    if (usernumber.length === 0) {
        $('#usernumber').css('background-color', '#F3F3F3');
    } else {
        $('#usernumber').css('background-color', '#fff');
    }
    if (commentary.length === 0) {
        $('#commentary').css('background-color', '#F3F3F3');
    } else {
        $('#commentary').css('background-color', '#fff');
    }
    if(username.length != 0 && useremail.length != 0 && usernumber.length != 0 && commentary.length != 0) {
        $('#submit').css('background', '#555555');
    } else {
        $('#submit').css('background', 'grey');
    }
}
checkParams();
$(function () {
    $('#submit').submit(function () {
        $.ajax({
            type: 'POST',
            url: '../email.php',
            data: {
                username: $(this).username.value,
                useremail: $(this).useremail.value,
                usernumber: $(this).usernumber.value,
                commentary: $(this).commentary.value
            },
            success: function(){
                $('.feedback__end').css('z-index', '1');
             },
             error: function(){
                alert('Ошибка!');
             }
        });
    });
})