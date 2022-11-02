   
   var fs = require('fs');
   
   
   
   fs.writeFile("./welcome.txt","Hello Node",(error)=>{
    if(error){
             console.log(`Error message: ${error.message}`);
             }
     fs.readFile("./welcome.txt","UTF-8",(error,data)=>{
     if(error){
             console.log(`Error message: ${error.message}`);
             }
     console.log(data);
 });
 })