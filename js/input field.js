// edit button apply 

const icons=document.querySelectorAll('p>i');
const  visibility = document.querySelectorAll('div.hidden');

for (let i = 0; i < icons.length; i++) {
      const elementIcon = icons[i];
      const elememtVisibility= visibility[i];

      elementIcon.addEventListener('click',function(){
            elememtVisibility.classList.remove('hidden');
      })
}


//get user input in input field and dinamically allocated the value 
const inputField = document.querySelectorAll('#geometry-section>div>div>input');
const elementFields= document.querySelectorAll('#geometry-section>div>div>p>span');

for (let i = 0; i < inputField.length; i++) {
      const element = inputField[i];
      element.value='';
      element.addEventListener('keyup',function(event){
            
            setElementValue(event.target.value, elementFields[i]);
      })
    
      
}

