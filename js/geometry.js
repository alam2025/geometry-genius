
// traingle 
document.getElementById('btn-traingle').addEventListener('click',function(){
      // get base 
      const b= getValue('base');
      //get height
      const h= getValue('height');
      const areaOfTraingle = areaCalculate(0.5,b,h);
      // set result 
      setResult(areaOfTraingle,'triangle-name');
  
})

// rectangle 
document.getElementById('btn-rectangle').addEventListener('click',function(){
      // get base 
      const w= getValue('width');
      //get height
      const l= getValue('length');
      const areaOfRactangle = areaCalculate(1,w,l);
      // set result 
      setResult(areaOfRactangle,'rectangle-name');
  
})



 //parallelogram  
 document.getElementById('btn-parallelogram').addEventListener('click',function(){
      //get base
      const b= getValue('parallelogram-base');
      //get height
      const h= getValue('parallelogram-height');
      // calculate area 
      const areaOfParallelogram = areaCalculate(1,b,h);
      //set result
      setResult(areaOfParallelogram,'parallelogram-name');
 })

//  rhombus 
document.getElementById('btn-rhombus').addEventListener('click',function(){
      //get d1
      const d1= getValue('rhombus-d1');
      //get d2
      const d2 = getValue('rhombus-d2');
      // calculate area 
      const areaOfRhombus= areaCalculate(0.5,d1,d2);
      //set result
      setResult(areaOfRhombus,'rhombus-name');
      
})


//pentagon
document.getElementById('btn-pentagon').addEventListener('click',function(){
      //get p
      const p= getValue('pentagon-p');
      //get value b
      const b= getValue('pentagon-b');
      //calculate area
      const areaOfPentagon= areaCalculate(0.5,p,b);
      //set result
      setResult(areaOfPentagon,'pentagon-name');
})


// ellipse 
document.getElementById('btn-ellipse').addEventListener('click',function(){
      //get a
      const a= getValue('ellipse-a');
      //get value b
      const b= getValue('ellipse-b');
      //calculate area
      const areaOfEllipse= areaCalculate(3.14,a,b);
      //set result
      setResult(areaOfEllipse,'ellipse-name');
})
