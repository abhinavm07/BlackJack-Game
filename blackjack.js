let name = window.prompt("Enter your Name: ");
alert("Your name is: "+name);

let sum=0;
let hasBlackJack = false;
let isAlive = false;
let messageStr="";
let cardsStr=document.getElementById("cards")
let sumStr=document.getElementById("cardsSum")
let resultStr=document.getElementById("result")
let cardsArray=[];

let player={
    name:"",
    chips: 250
}
player.name=name;


let playerStats =document.getElementById("player-stats");
playerStats.textContent=player.name +": $"+player.chips;


function aceCardChecker(){
    // console.log(trialCardsArray.length);
console.log(cardsArray)
    let leng = cardsArray.length;
    for(let i =0;i<leng;i++){
        if(cardsArray[i]===1){
            let aceCard=window.prompt("You have an Ace. Your cards are: "+cardsArray+" How would you like to use it?");
            alert("is this the card you wanted? "+aceCard);
            if(aceCard==1){
            cardsArray[i]=1;
            }
            else if(aceCard==11){
            cardsArray[i]=11;
            }
    }
    // console.log(trialCardsArray);
}
}

function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13)+1;
    if(randomCard>=11){
        return 10;
    }
    {
    return randomCard
    }
    }

function startGame(){
    isAlive = true;
    cardsArray=[];
    for(let i =0;i<2;i++){
        let card=getRandomCard();
        cardsArray.push(card);
    
    }
    aceCardChecker();

    for(let x=0;x<=cardsArray.length;x+=1){
    sum = cardsArray[0]+cardsArray[1];
    renderGame();
    }
}
function renderGame(){
    cardsStr.textContent="Cards: "
    for(let i=0;i<cardsArray.length;i++){
    cardsStr.textContent+=cardsArray[i]+" , ";

    }
    sumStr.textContent="Sum: "+sum;
    if(sum<=20){
    messageStr="Would you like to draw another card?"
    }
    else if(sum ===21){
    messageStr="You've got a Blackjack!"
    hasBlackJack = true;
    isAlive=false;
    }
    else{
    messageStr="You're out of the game!"
    isAlive = false;
    }
    // console.log(messageStr);
    resultStr.textContent=messageStr;
    // console.log(hasBlackJack);
    // console.log(isAlive);
}

function addCards(){ 
    console.log(cardsArray);
    let lengt=cardsArray.length;
    console.log(lengt);
    if(length<!2||isAlive!==false){
    let card = getRandomCard();

    if(card===1){
        let aceCard=window.prompt("You have an Ace. Your cards are: "+cardsArray+","+card+" How would you like to use it?");
        alert("is this the card you wanted? "+aceCard);
        if(aceCard==1){
        card=1;
        }
        else if(aceCard==11){
        card=11;
        }
    }
    sum+=card
    cardsArray.push(card);
    console.log(cardsArray)
    cardsStr.textContent+=" , "+cardsArray[2];
    renderGame()
    }
    
}


// added the ace card feature for two cards but fucked up the existing arreys -_-
//problem fixed XD
// I fucking made it (T-T)