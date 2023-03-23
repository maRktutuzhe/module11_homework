export function getPercents(percent, number){  
  let result = "";
  if(!isNaN(parseFloat(percent)) && isFinite(percent)) {
    if(!isNaN(parseFloat(number)) && isFinite(number)){
      result = number * percent / 100;
    }
    else{
      result = "number error";
    }
    }
    else{
      result = "percent error";
    }
  return result;   
}
  
 