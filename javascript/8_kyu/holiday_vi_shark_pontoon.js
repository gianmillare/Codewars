// Holiday VI - Shark Pontoon
// https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/javascript

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    // time = distance / rate
      var to_live = 0;
      var give_up = 0;
      
      if (dolphin) {
        give_up += sharkDistance / (sharkSpeed / 2);
      } else {
        give_up += sharkDistance / sharkSpeed;
      }
      
      to_live += pontoonDistance / youSpeed;
      
      if (to_live < give_up) {
        return "Alive!";
      } else {
        return "Shark Bait!";
      }
    }