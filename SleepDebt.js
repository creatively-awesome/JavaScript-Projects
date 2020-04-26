function getSleepHours (day){
  day = day.toLowerCase();
  switch(day){
    case 'monday': 
      return 8;
      break;
    case 'tuesday': 
      return 7;
      break;
    case 'thrusday': 
      return 6;
      break;
    case 'friday': 
      return 9;
      break;
    case 'saturday': 
      return 9;
      break;
    case 'sunday': 
      return 8;
      break;
    case 'wednesday': 
      return 6;
      break;
    default:
      return 'Enter proper day'
      break
  }  
}
const getActualSleepHours = ()=> getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thrusday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = ()=> {
  const idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = ()=> {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours){
    console.log('Are you Mr. Perfect? Cause you slept perfectly!');
  }
  else if(actualSleepHours > idealSleepHours){
    const due = actualSleepHours - idealSleepHours;
    console.log('You Overslept by '+due+' hours!');
  }
  else{
    const duee = idealSleepHours - actualSleepHours;
    console.log('Get some more sleep of '+duee+' hours dear! Nighty Night!');
  }
}

calculateSleepDebt();
