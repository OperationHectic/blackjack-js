function card(imgSrc, value, idNum)
{
   this.imgSrc = imgSrc;
   this.value = value;
   this.idNum = idNum;
}

function deck()
{
   this.nextCard = 0;
   var cardImgs = new Array("2c", "2d", "2h", "2s", "3c", "3d", "3h", "3s", "4c", "4d", "4h", "4s", 
	                    "5c", "5d", "5h", "5s", "6c", "6d", "6h", "6s", "7c", "7d", "7h", "7s", 
			    "8c", "8d", "8h", "8s", "9c", "9d", "9h", "9s", "10c", "10d", "10h", "10s", 
			    "jc", "jd", "jh", "js", "qc", "qd", "qh", "qs", "kc", "kd", "kh", "ks", 
			    "ac", "ad", "ah", "as");   
   var cardValues = new Array(2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 
	                      5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 
	                      8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 
			      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
			      11, 11, 11, 11);
   this.cards = new Array();
	
   for(var i=0; i<cardImgs.length; i++)
   {
       this.cards[i] = new card("cards/"+cardImgs[i]+".png", cardValues[i], i+1); 
   }
}

deck.prototype.shuffle = function()
{
   var i = 0;
   var ran1, ran2;
   var temp;
   while(i<300)
   {
      ran1 = Math.floor(Math.random()*52);
      ran2 = Math.floor(Math.random()*52);
      temp = this.cards[ran1];
      this.cards[ran1] = this.cards[ran2];
      this.cards[ran2] = temp;
      i++;
   }
}

deck.prototype.deal = function(curPlayer)
{
   var topCard = this.cards[this.nextCard];
   curPlayer.addScore(topCard.value);
   curPlayer.hand[curPlayer.handCount] = topCard;
   if(topCard.value == 11)
   {
      curPlayer.addAceCount();
   }
   document.getElementById("blank"+(curPlayer.handCount+1)).src = topCard.imgSrc;
   curPlayer.handCount++;
   this.nextCard++;
}

deck.prototype.dealToDealer = function(dealer)
{
   var topCard = this.cards[this.nextCard];
   dealer.addScore(topCard.value);
   dealer.hand[dealer.handCount] = topCard;
   if(topCard.value == 11)
   {
      dealer.addAceCount();
   }
   document.getElementById("dealer"+(dealer.handCount+1)).src = topCard.imgSrc;
   dealer.handCount++;
   this.nextCard++;
}

