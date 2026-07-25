let testScore = 85;
switch(true){
       case(testScore >= 95):
    console.log("Outstanding - Top Performer");  
       break;
       case(testScore >= 85):
    console.log("Excellent - Above Expectations");  
       break;
       case(testScore >= 70):
    console.log("Good - Meets Expectation");  
       break; 
       case(testScore >= 50):
    console.log("Needs Improvement");  
       break;  
    default:
        console.log("Unsatisfactory - requires training");

}
//output is Excellent - Above Expectations even if all other condition also satisfying but because break statement it will once condition satisfied it will move out.
 