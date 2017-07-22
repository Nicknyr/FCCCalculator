$(document).ready(function(){

    $('#parenthesis-left').click(function(){
        $('#displayText').append('( ');
    });

    $('#parenthesis-right').click(function(){
        $('#displayText').append(') ');
    });

    $('#percentage').click(function(){
        $('#displayText').append('% ');
    });

    $('#clear').click(function(){
        $('#displayText').empty();
    });

    $('#7').click(function(){
        $('#displayText').append('7 ');
    });

    $('#8').click(function(){
        $('#displayText').append('8 ');
    });

    $('#9').click(function(){
        $('#displayText').append('9 ');
    });

    $('#divide').click(function(){
        $('#displayText').append('/ ');
    });

    $('#4').click(function(){
        $('#displayText').append('4 ');
    });

    $('#5').click(function(){
        $('#displayText').append('5 ');
    });

    $('#6').click(function(){
        $('#displayText').append('6 ');
    });

    $('#multiply').click(function(){
        $('#displayText').append('* ');
    });

    $('#1').click(function(){
        $('#displayText').append('1 ');
    });

    $('#2').click(function(){
        $('#displayText').append('2 ');
    });

    $('#3').click(function(){
        $('#displayText').append('3 ');
    });

    $('#subtract').click(function(){
        $('#displayText').append('- ');
    });

    $('#0').click(function(){
        $('#displayText').append('0 ');
    });

    $('#decimal').click(function(){
        $('#displayText').append('. ');
    });

    $('#equals').click(function(){
        $('#displayText').append('= ');
    });

    $('#plus').click(function(){
        $('#displayText').append('+ ');
    });


    var keys = document.querySelectorAll('.button span');
    var operators = ['+', '-', '*', '/'];
    var decimalAdded = false;

    for(var i = 0; i < keys.length; i++){
      keys[i].onclick = function(e){
        var input = document.querySelector('#displayText');
        var inputVal = input.innerHTML;
      }
      console.log(inputVal);
    }

});
