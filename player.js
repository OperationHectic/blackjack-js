function player(score, money, bet)
{
   this.score = score;
   this.money = money;
   this.bet = bet;
   this.handCount = 0;
   this.hand = new Array();
   this.aceCount = 0;
}

player.prototype.addScore = function(x)
{
   this.score = this.score + x;
}

player.prototype.addAceCount = function()
{
   this.aceCount++;
}

player.prototype.addMoney = function()
{
    this.money = this.money + (this.bet*2);
}

player.prototype.subMoney = function()
{
    this.money = this.money - this.bet;
}

player.prototype.reset = function()
{
   this.score = 0;
   this.handCount = 0;
   this.aceCount = 0;
}
