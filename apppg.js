
var scores,roundScore,activePlayer,dice_img;
scores = [0,0];
roundScore = 0;
activePlayer = 0;
dice_img =document.querySelector('.dice');


dice_img.style.display='none'; //change any css content by javascript

document.querySelector(".btn-roll").addEventListener('click',function() {

	var roundScore_div=document.getElementById('current-score-'+activePlayer);
	var dicenum = Math.floor(Math.random()*6)+1;
	console.log(dicenum);
	dice_img.style.display='block';
	dice_img.src="dice-"+dicenum+".png";

	if(dicenum !== 1) {
		roundScore +=dicenum;
		roundScore_div.innerHTML = roundScore;
		console.log(roundScore);
	} else {
		nextPlayer();
		

		/*if(activePlayer===1) {
			activePlayer=2;
			document.querySelector('.player-1-panel').classList.remove('active');
			document.querySelector('.player-2-panel').classList.add('active');
		}else {
			activePlayer=1;
			document.querySelector('.player-2-panel').classList.remove('active');
			document.querySelector('.player-1-panel').classList.add('active');

		}*/
		

		


		
	}

});

document.querySelector(".btn-hold").addEventListener ('click',function() {
	//upgrading final score
	scores[activePlayer] +=roundScore;

	document.querySelector('#score-'+activePlayer).innerHTML=scores[activePlayer];
	

	//deciding winner
	if (scores[activePlayer] >=20 )
	{
		document.querySelector('#name-'+activePlayer).innerHTML='Winner!';
		roundScore=0;
		dice_img.style.display='none';

		document.querySelector('#current-score-0').innerHTML = 0;
		document.querySelector('#current-score-1').innerHTML = 0;

		document.querySelector('.btn-roll').disabled = true;
		document.querySelector('.btn-hold').disabled = true;

	}
	else 
		nextPlayer();


});

document.querySelector(".btn-new").addEventListener ('click',function() {

	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	dice_img.style.display='none';

	document.querySelector('#score-0').innerHTML=0;
	document.querySelector('#score-1').innerHTML=0;

	document.querySelector('#current-score-0').innerHTML = 0;
	document.querySelector('#current-score-1').innerHTML = 0;

	document.querySelector('#name-0').innerHTML = 'Player 1';
	document.querySelector('#name-1').innerHTML = 'Player 2';

	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	

	document.querySelector('.btn-roll').disabled = false;
	document.querySelector('.btn-hold').disabled = false;



});

function nextPlayer () {

	activePlayer===0 ? activePlayer=1 : activePlayer = 0;
	roundScore=0;
	document.querySelector('#current-score-0').innerHTML = 0;
	document.querySelector('#current-score-1').innerHTML = 0;

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

}