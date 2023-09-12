let player={
  name:"",
  age:23,
  chips:0,
  sayHello: function(){
    console.log("HI")
  }
}
let playerData=document.getElementById("player")
player.sayHello()
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message")
let sumEl=document.getElementById("sum")
let cardEl=document.getElementById("cards")
let Card=0
let CardArray=[]

function startGame(){
  isAlive=true
  let firstCard=getRandomCard()
  let secondCard=getRandomCard()
  CardArray=[firstCard, secondCard]
  sum=firstCard+secondCard
  renderGame()
}
function newUser(){
  document.getElementById("Go0").classList.toggle("active");
  document.getElementById("menu").classList.toggle("shut");
  CardArray=[]
  sum=0
  messageEl.textContent="Want to play a round?"
  document.getElementById("inn2").value=""
  document.getElementById("inn1").value=""
  renderGame()
}
function toggle(){
  player.name=document.getElementById("inn1").value
  player.chips=document.getElementById("inn2").value
  if(player.name==""){
    player.name="Player"
  }
  if(player.chips==""){
    player.chips=0
  }
  playerData.textContent=player.name+": $"+player.chips
  document.getElementById("Go0").classList.toggle("active");
  document.getElementById("menu").classList.toggle("shut");
}

function renderGame(){
  cardEl.textContent="Cards: "
  for(let i=0;i<CardArray.length;i++){
    cardEl.textContent+=CardArray[i]+" "
  }
  if(sum<=20 && sum>0){
    messageEl.textContent="DO you want to draw a new card"
  } else if(sum===21){
    messageEl.textContent="Wohoo! You've got BlackJack!"
    hasBlackJack=true
    isAlive=false
  } else if(sum>21){
    messageEl.textContent="You're out of the game!"
    isAlive=false
  }
  sumEl.textContent="sum: "+sum
}

function getRandomCard(){
  let num=Math.floor(Math.random()*13)+1
  console.log(num)
  if(num===1){
    num=11
  }
  else if(num>10){
    num=10
  }
  return num
}

function newCard(){
  if(isAlive==true){
    Card=getRandomCard()
    sum+=Card
    CardArray.push(Card)
    renderGame()
  }
  else{
    messageEl.textContent="Please Re-start the Game"
  }
}
