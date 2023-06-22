const calculate = () => {
  let inputElement = document.getElementById("input_value");
  let input_value = inputElement.value.split(",");

  let num_arr = [];

  for (var i = 0; i < input_value.length; i++) {
    num_arr.push(parseInt(input_value[i]));
  }

  let sum = 0;

  let increment = 1;

  for (i = 1; i < num_arr.length; i++) {
    increment = 1;

    if (num_arr[i] === 0 && num_arr[i - 1] > 0 && num_arr[i + 1] > 0) {


      if (num_arr[i - 1] > num_arr[i + 1]) {
        sum = sum + num_arr[i + 1];
      } else {
        sum = sum + num_arr[i - 1];
      }

    } 
    
    else if (num_arr[i] === 0 && num_arr[i - 1] > 0 && num_arr[i + 1] === 0) {

      for (var a = i; a < num_arr.length - 1; a++) {
        
        if (num_arr[a + 1] === 0) {
          increment = increment + 1;
        
        } else if (num_arr[a + 1] !== 0 && num_arr[a + 1] > num_arr[i - 1]) {

          sum = sum + num_arr[i - 1] * increment;
          a = num_arr.length;
        
        } else if (num_arr[a + 1] !== 0 && num_arr[a + 1] < num_arr[i - 1]) {

          sum = sum + num_arr[a + 1] * increment;
          a = num_arr.length;
        
        } else if (num_arr[a + 1] !== 0 && num_arr[a + 1] === num_arr[i - 1]) {
            
          sum = sum + num_arr[a + 1] * increment;
          a = num_arr.length;
        }
      }
      i = i + increment;
    }
  }

  let displayText = document.getElementById("display_unit");
  displayText.innerHTML = `${sum} Units`;
};
