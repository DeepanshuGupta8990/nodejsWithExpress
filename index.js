const express = require("express");
const path = require("path");

const app = express();

app.use((req,res,next)=>{
    console.log('application middleware')
  next()
})

const auth = (req,res,next)=>{
   console.log('route middleware');
   if(req.query.name){
      console.log(req.query);
   }
   next();
}

app.get('/',auth,(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'/index.html'))
})

app.get('/download', (req, res) => {
    const filePath = 'demo.txt'; // Replace with your file path
  
    res.download(filePath, (err) => {
      if (err) {
        console.error('Error downloading file:', err);
        res.status(500).send('Error downloading the file');
      }
    });
  });
  

app.listen(3000,()=>{
    console.log('The server is running')
})
