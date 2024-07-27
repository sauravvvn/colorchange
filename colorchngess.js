const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')
buttons.forEach(function(button){
    button.addEventListener('click',function(eventkaobject){
   if(eventkaobject.target.id==='grey'){
    body.style.backgroundColor=eventkaobject.target.id
   }
   if(eventkaobject.target.id==='white'){
    body.style.backgroundColor=eventkaobject.target.id
   }
   if(eventkaobject.target.id==='blue'){
    body.style.backgroundColor=eventkaobject.target.id
   }
   if(eventkaobject.target.id==='yellow'){
    body.style.backgroundColor=eventkaobject.target.id
   }

    })
})