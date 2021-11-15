

function processingRequests(servers, requests) {
    
    //making the servers process capacity
    let serversProcessCapacity=[];
    let theMaxAServerCanProccesInRequestsAndNotBeenProccesed=[];
    let maxNumberOfRequestsThatCanBeProcessed=0;
    
    for (let i = 0; i <=servers; i++) {
        serversProcessCapacity[i-1]=i*2
      }
     // end making tteh servers process capacity


     for (let i = serversProcessCapacity.length; i > 0; i--) {
   

        for (let b = serversProcessCapacity[i-1]; b > 0; b--) {

  
       
            for(c=0; c<requests.length; c++){
            found=true;
           if( requests[c]==b){
           found=true;
           break;
           
           }else{found=false};
            }
    


        if(found===true){

            let foundIt=false;
            for(c=0; c<theMaxAServerCanProccesInRequestsAndNotBeenProccesed.length; c++){
                
               if( theMaxAServerCanProccesInRequestsAndNotBeenProccesed[c]===b){
                foundIt=true;
               break;
               
               }
                }
                

            if(foundIt===false){
            
                maxNumberOfRequestsThatCanBeProcessed+=1;
            theMaxAServerCanProccesInRequestsAndNotBeenProccesed.push(b);
            break;
            }
       }
          }

      }
    console.log("The answer is: ",maxNumberOfRequestsThatCanBeProcessed);
    return maxNumberOfRequestsThatCanBeProcessed;
   
}


    
    // it works like this:
    processingRequests(2,[1, 5, 6]);// expected result: 1
    //processingRequests(3,[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);// expected result: 3
    //processingRequests(10,[1, 2, 3, 5, 7, 11, 13, 15, 19, 22, 27, 30, 2000]);//9
    //processingRequests(5,[1, 2, 3]);//3
    // processingRequests(0,[1, 2, 3]);//0
    // processingRequests(3,[10, 5, 6]);//1