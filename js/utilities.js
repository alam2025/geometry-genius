//get value from input 
function getValue(id) {
      const field = document.getElementById(id);
      const fieldValue = parseFloat(field.value);
      if (isNaN(fieldValue) || fieldValue<0) {
            alert('Enter a real number .');
            field.value = '';
            return;
      }
      else {
            return fieldValue;
      }
}

//area calculate
function areaCalculate(factor, a, b) {
      const result = factor * a * b;
      return result;
}

//set result
function setResult(result,name) {
      if(isNaN(result)){
            //nothing is show because resalut is nan

      }
      else{
            const resultSection = document.getElementById('result-section');
      const mainResult = document.getElementById('result');

      const div = document.createElement('div');
      const node = document.querySelectorAll('#result div');

      const geometryName= document.getElementById(name).innerText;
      let finalResult= result.toFixed(2);
      
//set elememt in the result section

      div.innerHTML = `
            <h2 class=" result-value flex gap-2 p-1 text-sm"> 
                  <span>${node.length + 1} </span>
                  
                  <span>${geometryName}</span>
                  <span>${finalResult}</span>

                  
                  <span> cm<sup>2</sup></span> 
                  <button class="btn-convert text-xs ">Convert to m<sup>2</sup> 
                  </button>
             </h2><br>
     `;

      mainResult.appendChild(div);
      }
}