let express = require("express");
let bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.json());
app.use(express.static('public'))


let users = require("./state").users;

// app.use(function(request,response,next){
//    return response.send(users);
// });
app.get("/users",function(request,response,next){
  response.send(users);
 });

 app.get("/users/:userId",function (request,response,next){
  response.json(users[request.params.userId]);
 });
 
 


//  app.post("/users",function(request,response,next){
//   let newUser = {
//     "_id": 1,
//     "name": "New Person",
//     "occupation": "FBI Agent",
//     "avatar": "https://upload.wikimedia.org/wikipedia/en/5/50/Agentdalecooper.jpg"
//   };
//   users.push(newUser);
//   response.json(newUser);
//   });

app.post("/users",function(req,res){
  req.body.id='1'
  users.push(req.body);
//  console.log(req);
 res.send("created")
})


  app.put("/users/:userId",function(request,response,next){
    response.send(users[request.params.userId].name= "Christelle");
   });

   app.delete("/users/:userId",function(request,response,next){
     users[request.params.userId-1].isactive=false;
    response.send("Deleted");
   });
   

app.listen(3002, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3002");
});


