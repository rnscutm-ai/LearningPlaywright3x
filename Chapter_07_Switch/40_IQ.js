let day = 2;
// 1- mon, 2- tue, 3- wed....

switch(day){
    case 0:
        console.log("Sunday - Rest Day");
        
    case 1:
        console.log("Monday - Sprint Planning");
        
    case 2:
        console.log("Tuesday - Development");
      
    case 3:
        console.log("Wednesday - Code Review");
        
    case 4:
        console.log("Thursday - Testing");
         
    case 5:
        console.log("Friday - Deployment & Retro");
        
    case 6:
        console.log("Saturday - Rest Day");
           
    default:
        console.log("Invalid Day Value");               
}

//ouput is because no break;
// Tuesday - Development
//Wednesday - Code Review
//Thursday - Testing
//Friday - Deployment & Retro
//Saturday - Rest Day
//Invalid Day Value
