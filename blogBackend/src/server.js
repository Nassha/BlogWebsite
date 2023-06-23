import express, { application } from "express";

const app =express();

app.use(express.json())//for middleware to access req.body in post request; parses the received body and makes it availbale to req.body

{/*app.post("/hello",(req,res)=>{
    console.log(req.body);
    res.send(`hello! ${req.body.name}`);
})

app.get("/hello/:name", (req,res)=>{
    const {name}= req.params; // destructured
    res.send(`Hello ${name}`); // ; important
})
*/}

let articlesInfo=[{ //temporary in-memroy database
    name:"learn-react",
    upvote:0,
    comment:[],
},{
    name:"learn-node",
    upvote:0,
    comment:[],
},{
    name:"mongodb",
    upvote:0,
    comment:[],
}]; 

app.put("/api/articles/:name/upvote",(req,res)=>{
    const {name} =req.params;
    const article =articlesInfo.find(a => a.name === name);
    if(article){
        article.upvote+=1;
        res.send(`Hey! The ${name} article now has ${article.upvote} upvote`);
    }else{
        res.send('That article doesn\'t exist');
    }
   
});

app.post("/api/articles/:name/comments",(req,res)=>{
    const{name} =req.params;
    const {postedBy,text} = req.body;
    const article =articlesInfo.find(a => a.name === name);
    if(article){
        article.comment.push({postedBy,text});
        res.send(article.comment);
    }else{
        res.send('That article doesn\'t exist');
    }
    

})

app.listen(8000, ()=>{
    console.log('Server is listening');
})