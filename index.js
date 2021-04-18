const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require('body-parser');
const route = require("./route");
const cors =require("cors");

//connect to mongodb
mongoose.connect("mongodb://hiteshjogiya:V820n12.@cluster0-shard-00-00.ssrhf.mongodb.net:27017,cluster0-shard-00-01.ssrhf.mongodb.net:27017,cluster0-shard-00-02.ssrhf.mongodb.net:27017/Student?ssl=true&replicaSet=atlas-2fr67c-shard-0&authSource=admin&retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology: true}).then(
    ()=>{
        const app = express();
        app.use(cors());
        app.use(bodyparser.urlencoded({extended:true}));
        app.use(express.json());
        app.use("/api",route);
        app.listen(process.env.PORT || 3000,()=>{ 
            console.log('server is started');
        });
    }
)
.catch((err)=>{
    console.log(err);
});

