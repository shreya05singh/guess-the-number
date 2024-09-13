const input=document.querySelector('#input');
const btn=document.querySelector('#btn');
const feedback=document.querySelector('#feedback');
const randomNumber=Math.ceil(Math.random()*100)

btn.addEventListener('click',function(){
    const userInput = parseInt(input.value)
    if(userInput < randomNumber){
        console.log("Too less,Try Again!")  
        feedback.innerText="Too Less.Try Again!"   //keyup keydown
    }
     else if(userInput > randomNumber){
        console.log("Too High ,Try Again!")  
        feedback.innerText="Too High.Try Again!"  
    }
    else{
        console.log("you won")
        feedback.innerText=" you won!"
    }
})

