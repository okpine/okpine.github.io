import '../css/index.css';
import $ from 'jquery';

window.$ = $;

let i = 1, length = 10;

$('#left-btn').click(function(){
	i++;
	if(i<=length-5){
		let left = i, right = i+5;
		console.log(i, left, right);
		//$(`td:nth-of-type(n+${left}):nth-of-type(-n+${right})`).css('visibility','visible');
		//$(`td:nth-of-type(-n+${left-1}), td:nth-of-type(n+${right+1})`).css('visibility','hidden');
		$('td').animate({left: '-=111'});
	} else {
		i=length-5;
	}
});


$('#right-btn').click(function(){
	i--;
	if(i>=1){
		let left = i, right = i+5;
		console.log(i, left, right);
		//$(`td:nth-of-type(n+${left}):nth-of-type(-n+${right})`).css('visibility','visible');
		//$(`td:nth-of-type(-n+${left-1}), td:nth-of-type(n+${right+1})`).css('visibility','hidden');
		$('td').animate({left: '+=111'});
	} else {
		i=1;
	}
});
