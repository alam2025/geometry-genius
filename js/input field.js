const icons=document.querySelectorAll('p>i');
const  visibility = document.querySelectorAll('div.hidden');

for (let i = 0; i < icons.length; i++) {
      const elementIcon = icons[i];
      const elememtVisibility= visibility[i];

      elementIcon.addEventListener('click',function(){
            elememtVisibility.classList.remove('hidden');
      })
}

