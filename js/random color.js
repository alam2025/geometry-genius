// const setBg = () => {
//       const randomColor = Math.floor(Math.random()*16777215).toString(16);
//       document.body.style.backgroundColor = "#" + randomColor;
//       color.innerHTML = "#" + randomColor;
//     }
    
//     genNew.addEventListener("click", setBg);
//     setBg();

    const sections= document.querySelectorAll('#geometry-section>div');
    for (let i = 0; i < sections.length; i++) {
      const element = sections[i];
      element.addEventListener('mouseenter',function(){
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            element.style.backgroundColor="#" + randomColor;
            element.addEventListener('mouseleave',function(){
                  element.style.backgroundColor='white';
            })
      })
      
    }