let playerNumber =0;

function makingList(getPlayId, getBtnID){
    playerNumber = playerNumber+1;
    if(playerNumber>5){
      playerNumber=5;
      return alert("Sorry , you can't select more than five");
    }
   const getPlayerId=document.getElementById(getPlayId);

   const playerName =getPlayerId.innerText;
   const  ulList=document.getElementById('ulist');
   const creatlist =document.createElement('li');
   creatlist.innerHTML=playerName;
    
   ulList.appendChild(creatlist);

   const getElement = document.getElementById(getBtnID);
   getElement.style.backgroundColor="magenta";
   getElement.style.color='pink';

   getElement.disabled=true;
   

}
function floatvalue(stringValueId){
    
    const perPlayerPriceId=document.getElementById(stringValueId);
     const perPlyaerStringValue = perPlayerPriceId.value;
     if(perPlyaerStringValue==""){
      return alert('this is null');
     }
     const perPlyaerFloatValue =parseFloat(perPlyaerStringValue);
     return perPlyaerFloatValue;

}

document.getElementById('btn1').addEventListener('click',function(){
   makingList('player1','btn1');
   

})
document.getElementById('btn2').addEventListener('click',function(){
   makingList('player2','btn2');
   

})
document.getElementById('btn3').addEventListener('click',function(){
   makingList('player3','btn3');
   

})
document.getElementById('btn4').addEventListener('click',function(){
   makingList('player4','btn4');
   

})
document.getElementById('btn5').addEventListener('click',function(){
   makingList('player5','btn5');
   

})
document.getElementById('btn6').addEventListener('click',function(){
   makingList('player6','btn6');
   

})






const playExpenseId =document.getElementById('perPlayerExpenseId');

document.getElementById('player-expense').addEventListener('click',function(){
    const perPlayerExpense = floatvalue('per-player-price')
    const playerExpense =playerNumber*perPlayerExpense;
    playExpenseId.innerText=playerExpense;

})

document.getElementById('calculate-total').addEventListener('click',function(){
    const managerExpense = floatvalue('managerFee')
    const coachExpense = floatvalue('coachFee')
    const playerExpenseValue =playExpenseId.innerText; 
    const playerExpenseFloatValue=parseFloat(playerExpenseValue);
    const totalExpense =managerExpense+coachExpense+playerExpenseFloatValue;
     document.getElementById('total-money').innerText=totalExpense
})
