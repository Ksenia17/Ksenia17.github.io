var card1 = document.querySelector('#card1');
var card2 = document.querySelector('#card2');
var card3 = document.querySelector('#card3');

var ad1 = document.querySelector('#add1');
var ad2 = document.querySelector('#add2');
var ad3 = document.querySelector('#add3');

if ( card1!==null){
	card1.onclick = function(){
		card1.style.zIndex = 0;
		card1.style.border = '2px solid red';
	}
}
if ( card2!==null){
	card2.onclick = function(){
		card2.style.zIndex = 0;
		card2.style.border = '2px solid red';
	}
}
if ( card3!==null){
	card3.onclick = function(){
		card3.style.zIndex = 0;
		card3.style.border = '2px solid red';
	}
}


if ( ad1!==null){
	ad1.onclick = function(){
		
		card1.style.border = '1px solid Gainsboro';
	}
}
if ( ad2!==null){
	ad2.onclick = function(){
		
		card2.style.border = '1px solid Gainsboro';
	}
}
if ( ad3!==null){
	ad3.onclick = function(){
		
		card3.style.border = '1px solid Gainsboro';
	}
}			