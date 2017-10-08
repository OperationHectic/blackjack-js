function dealer()
{
   this.score = 0;
   this.handCount = 0;
   this.hand = new Array();
   this.aceCount = 0;
}

dealer.prototype.addScore = function(x)
{
   this.score = this.score + x;
}

dealer.prototype.addAceCount = function()
{
   this.aceCount++;
}

dealer.prototype.reset = function()
{
   this.score = 0;
   this.handCount = 0;
   this.aceCount = 0;
}

