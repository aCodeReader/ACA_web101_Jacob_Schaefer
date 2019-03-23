var $display = $('.display');
var $total = $('.total');
var output;
var decimal = false;
var operators = ['+', '-', '*', '/'];
var ans = 0;

$(document).ready(function() {
    console.log("hello");
  function clearDisplay() {
    $('.display').text('');
    $('.total').text(0);
  }
  
  $('button').click(function() {
    var keyVal = $(this).data('val');
    output = $display.text();
    var lastChar = output[output.length - 1];
    
    // Oposite
    if (keyVal == 'opos') {
      if ($total.text()[0] == '-') {
        $total.text($total.text().substring(1));
      } else {
        $total.text('-' + $total.text());
      }
      ans = eval($total.text());
    }
    
    // Delete
    else if (keyVal == 'del') {
      $display.text($display.text().slice(0,-1));
    }
    
    // Clear
    else if (keyVal == 'clear') {
      clearDisplay();
      ans = 0;
      decimal = false;
      $display.removeClass("complete");
    }
    
    // Equal
    else if (keyVal == '=') {
      output = output.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-').replace(/Ans/g, 0);
      if (operators.indexOf(lastChar) > -1 || lastChar == '.')
        output = output.replace(/.$/, '');
      if (output) {
        var new_ans = eval(output);
        $total.text(Math.round((ans + new_ans)*10000000)/10000000);
        ans += new_ans;
      }
      $display.addClass("complete");
		  decimal = false;
    }
    
    // Operators
    else if ($(this).is('.oper')) {
      if ($display.is(".complete")) {
        $display.text('Ans' + keyVal);
        $display.removeClass("complete");
      } else if (output != '' && operators.indexOf(lastChar) == -1) {
        $display.text($display.text() + keyVal);
      } else if (output == '' && keyVal == '-') {
        $display.text($display.text() + keyVal);
      }
      if (operators.indexOf(lastChar) > -1 && output.length > 1) {
        $display.text($display.text().replace(/.$/, keyVal));
      }
      decimal = false;
    }
    
    // Decimal
    else if (keyVal == '.') {
      if ($display.is(".complete")) {
        $display.text('0' + keyVal);
        $display.removeClass("complete");
      } else if (output == '') {
        $display.text('0' + keyVal);
      } else if (operators.indexOf(lastChar) > -1) {
        $display.text($display.text() + '0' + keyVal);
      } else {
        if (!decimal) {
          $display.text($display.text() + keyVal);
          decimal = true;
        }
      }
    }
    
    // Numerals
    else {
      if ($display.is(".complete")) {
        $display.text(keyVal);
        ans = 0;
        decimal = false;
        $display.removeClass("complete");
      } else {
        $display.text($display.text() + keyVal);
      }
    }
  })
});

$(window).keydown(function(e) {
	console.log(e.which);
	switch (e.which) {
		case 48:
			key = 0;
			break;
		case 49:
			key = 1;
			break;
		case 50:
			key = 2;
			break;
		case 51:
			key = 3;
			break;
		case 52:
			key = 4;
			break;
		case 53:
			key = 5;
			break;
		case 54:
			key = 6;
			break;
		case 55:
			key = 7;
			break;
		case 56:
			key = 8;
			break;
		case 57:
			key = 9;
			break;
		
		case 191:
			key = '÷';
			break;
		case 190:
			key = '.';
			break;
		case 88:
			key = '×';
			break;
		case 189:
			key = '-';
			break;
		case 187:
			key = '+';
			break;
		case 67:
			key = 'clear';
			break;
    case 8:
			key = 'del';
			break;
		
		case 96:
			key = 0;
			break;
		case 97:
			key = 1;
			break;
		case 98:
			key = 2;
			break;
		case 99:
			key = 3;
			break;
		case 100:
			key = 4;
			break;
		case 101:
			key = 5;
			break;
		case 102:
			key = 6;
			break;
		case 103:
			key = 7;
			break;
		case 104:
			key = 8;
			break;
		case 105:
			key = 9;
			break;
		
		case 111:
			key = '÷';
			break;
		case 109:
			key = '-';
			break;
		case 106:
			key = '×';
			break;
		case 107:
			key = '+';
			break;
		case 13:
			key = '=';
			break;
		case 110:
			key = '.';
			break;
		case 27:
			key = 'clear';
			break;
		default:
			return false;
						}
	$('[data-val="' + key + '"]').addClass('active').click();
}).keyup(function(){
	$('.active').removeClass('active');
});