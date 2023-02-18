//random color set
    const sections= document.querySelectorAll('#geometry-section>div');
    for (let i = 0; i < sections.length; i++) {
      const element = sections[i];
      element.addEventListener('mouseenter',function(){
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            element.style.backgroundColor="#" + randomColor;//random color set
            element.addEventListener('mouseleave',function(){
                  element.style.backgroundColor='transparent'; // defalut color set
            })
      })
      
    }