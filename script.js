const calculate = () => {

  //Chart displaying function
  displayChart();


  let inputElement = document.getElementById("input_value");
  let input_value = inputElement.value.split(",");

  let num_arr = [];

  //Looping input value :: converts string into number pushed in (num_arr)
  for (var i = 0; i < input_value.length; i++) {
    num_arr.push(parseInt(input_value[i]));
  }

  let sum = 0;
  let increment = 1;


  for (i = 1; i < num_arr.length; i++) {
    increment = 1;

    // If array of i element = zero :: before and later the element will be greater than 0
    if (num_arr[i]===0 && num_arr[i-1]>0 && num_arr[i+1]>0) {


      if (num_arr[i-1] > num_arr[i+1]) {
        sum = sum + num_arr[i+1];
      } else {
        sum = sum + num_arr[i-1];
      }

    } 
     // If array of i element = zero :: before element greater than 0 and later element equal to 0
    else if (num_arr[i]===0 && num_arr[i-1]>0 && num_arr[i+1]=== 0) {

      for (var a = i; a < num_arr.length - 1; a++) {
        
        if (num_arr[a+1]===0) {
          // Increament :: to calculate the number of zero's
          increment = increment + 1;
        
        } else if (num_arr[a+1] !== 0 && num_arr[a+1] > num_arr[i-1]) {

          sum = sum + num_arr[i-1] * increment;
          a = num_arr.length;
        
        } else if (num_arr[a+1] !== 0 && num_arr[a+1] < num_arr[i-1]) {

          sum = sum + num_arr[a+1] * increment;
          a = num_arr.length;
        
        } else if (num_arr[a+1] !== 0 && num_arr[a+1] === num_arr[i-1]) {
            
          sum = sum + num_arr[a+1] * increment;
          a = num_arr.length;
        }
      }

      // To skip the looping, number of elements are zero
      i = i + increment;
    }
  }

  let displayText = document.getElementById("display_unit");
  displayText.innerHTML = `Result : ${sum} Units`;

};


// Display chart function

const displayChart =()=>{

let inputElement = document.getElementById("input_value");
  let input_value = inputElement.value.split(",");

let inp_arr = [];
let backup_inp_arr=[];

//Looping input value :: converts string into number pushed in (num_arr) and (backup_inp_arr)
 for (var i = 0; i < input_value.length; i++) {
   inp_arr.push(parseInt(input_value[i]));
   backup_inp_arr.push(parseInt(input_value[i]));
 }


let new_arr=inp_arr;




for(var i=1;i<inp_arr.length;i++){
 
 if(inp_arr[i]===0 && inp_arr[i-1]>0){
   
   for(var a=i;a<inp_arr.length;a++){
     
     if(inp_arr[a+1]>0 && inp_arr[a+1]>inp_arr[i-1]){

       new_arr[i]=inp_arr[i-1];
       a=inp_arr.length;

       }else if(inp_arr[a+1]>0 && inp_arr[a+1]<inp_arr[i-1]){

       new_arr[i]=inp_arr[a+1];
       a=inp_arr.length;

       }else if(inp_arr[a+1]>0 && inp_arr[a+1]===inp_arr[i-1]){
        
       new_arr[i]=inp_arr[a+1];
       a=inp_arr.length;
       }
     }
   
   }
   
 }
 
 let out_arr=[];


   
 if(backup_inp_arr.length===new_arr.length){
     for(var i=0;i<backup_inp_arr.length;i++){
      
       
       if(backup_inp_arr[i]===0 && new_arr[i]!==0){
         out_arr[i]=new_arr[i]
         }else{
           out_arr[i]=0;
           }
       }
     }



  const inputChart = document.getElementById('inputChart');
        
  new Chart(inputChart, {
    type: 'bar',
    data: {
      labels: inp_arr,
      datasets: [{
        label: 'Blocks & Water',
        data: new_arr,
        backgroundColor: '#52b5dc',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
      
    }
    
  });

  const outputChart= document.getElementById('outputChart');
        
  new Chart(outputChart, {
    type: 'bar',
    data: {
      labels: out_arr,
      datasets: [{
        label: 'Water',
        data: out_arr,
        borderWidth: 0,
        borderColor: '#36A2EB',
      backgroundColor: '#52b5dc',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}

