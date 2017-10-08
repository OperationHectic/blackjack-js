function BlackJack()
{
   this.player1 = new player(0, 100, 5);
   this.dealer1 = new dealer();
   this.deck1 = new deck();
   this.deck1.shuffle();
}

BlackJack.prototype.setValues = function()
{
   document.getElementById("playerMoney").value = this.player1.money;
   document.getElementById("playerBet").value = this.player1.bet;
}

BlackJack.prototype.updateScore = function()
{
   document.getElementById("playerScore").value = this.player1.score;
   document.getElementById("dealerScore").value = this.dealer1.score;
   document.getElementById("cardCount").value = this.deck1.nextCard;
}

BlackJack.prototype.checkAce = function()
{
   if(this.player1.score > 21 && this.player1.aceCount > 0)
   {
      this.player1.score = this.player1.score - 10;
	  this.player1.aceCount--;
   }
   if(this.dealer1.score > 21 && this.dealer1.aceCount > 0)
   {
      this.dealer1.score = this.dealer1.score - 10;
	  this.dealer1.aceCount--;
   }
   this.updateScore();
}

BlackJack.prototype.checkInstantWin = function()
{
   if(this.player1.score == 21)
   {
      document.getElementById("playerStatus").innerHTML = "player has 21; player wins";
      this.player1.addMoney();
      this.reset();
   }
}

BlackJack.prototype.checkWin = function()
{
   if(this.player1.score == 21)
   {
	  document.getElementById("playerStatus").innerHTML = "player has 21; player wins";
          this.player1.addMoney();
          this.reset();
   }
   else if(this.player1.score > 21)
   {
	  document.getElementById("playerStatus").innerHTML = "player bust; dealer wins";
	  this.player1.subMoney();
	  this.reset();
   }
   else if(this.dealer1.score == this.player1.score)
   {
	  document.getElementById("playerStatus").innerHTML = "tie game";
	  this.player1.subMoney();
	  this.reset();
   }
   else if(this.dealer1.score > this.player1.score && this.dealer1.score < 22)
   {
          document.getElementById("playerStatus").innerHTML = "dealer wins";
          this.player1.subMoney();
          this.reset();
   }
   else if(this.dealer1.score > 21)
   {
          document.getElementById("playerStatus").innerHTML = "dealer bust; player wins";
          this.player1.addMoney();
          this.reset();
   }
   if(this.player1.money == 0)
   {
          document.getElementById("playerStatus").innerHTML = "player out of money; you lose";
   }
}

BlackJack.prototype.resetText = function()
{
   document.getElementById("playerStatus").innerHTML = "   ";
   this.updateScore();
}

BlackJack.prototype.checkCardCount = function()
{
   if(this.deck1.nextCard > 50)
   {
      this.deck1.shuffle();
      this.deck1.nextCard = 0;
   }
}

BlackJack.prototype.deal = function()
{
   this.checkCardCount();
   for(var i=1; i<8; i++)
   {
      document.getElementById("blank"+i).src = "cards/back.png";
      document.getElementById("dealer"+i).src = "cards/back.png";
   }
   document.getElementById("playerStatus").innerHTML = "   ";
   document.getElementById("msg").innerHTML = "   "
   document.getElementById("dealButton").disabled = true;
   document.getElementById("standButton").disabled = false;
   document.getElementById("hitButton").disabled = false;
   this.deck1.deal(this.player1);
   this.deck1.deal(this.player1);
   this.deck1.dealToDealer(this.dealer1);
   this.updateScore();
   this.checkInstantWin();
}

BlackJack.prototype.hit = function()
{
   this.checkCardCount();
   this.deck1.deal(this.player1);
   this.updateScore();
   this.checkAce();
   this.checkWin();
}

BlackJack.prototype.stand = function()
{
   while(this.dealer1.score < this.player1.score && this.dealer1.score < 22 
   || this.dealer1.score != this.player1.score)
   {
       this.checkCardCount();
       this.deck1.dealToDealer(this.dealer1);
       this.updateScore();
       this.checkAce();
       this.checkWin();
   }
}

BlackJack.prototype.betChange = function()
{
   this.player1.bet = document.getElementById("playerBet").value;
   if(this.player1.bet > this.player1.money)
   {
      this.player1.bet = this.player1.money;
	  document.getElementById("playerBet").value = this.player1.money;
   }
}

BlackJack.prototype.reset = function()
{
   this.player1.reset();
   this.dealer1.reset();
   document.getElementById("playerMoney").value = this.player1.money;
   document.getElementById("playerBet").value = this.player1.bet;
  
   document.getElementById("dealButton").disabled = false;
   document.getElementById("standButton").disabled = true;
   document.getElementById("hitButton").disabled = true; 
   document.getElementById("msg").innerHTML = "press deal for a new game; increase bet if desired"; 
}





