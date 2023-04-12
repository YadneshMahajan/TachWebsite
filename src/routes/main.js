const express=require("express")

const Contact=require("../models/contact")
const routes=express.Router();

const Detail=require("../models/Detail");
const Slider = require("../models/Slider");
const Service = require("../models/Service");

routes.get("/",async (req,res)=>{

    
    const details= await Detail.findOne({"_id":"64329af9ed48df1d16eeb501"})
    const slides= await Slider.find()
    const services=await Service.find()
    // console.log(slides)
//    console.log(details)
   res.render("index",{
      details:details,
      slides:slides,
      services:services

   })
})
// routes.get("/services",(req,res)=>{
//    res.render("services")
// })

routes.get("/gallery",async (req,res)=>{
    const details= await Detail.findOne({"_id":"64329af9ed48df1d16eeb501"})
    res.render("gallery",{
        details:details
     })
})
// routes.get("/about",(req,res)=>{
//     res.render("about")
// })
// routes.get("/contactus",(req,res)=>{
//     res.render("contactUs")
// })



///Process contact form
routes.post("/process-contact-form",async(req,res)=>{
    console.log("form is submitted");
    console.log(req.body)


    //save th data to DB 
    
    try{
        const data=await Contact.create(req.body)
        // console.log(data)
       
        res.redirect("/")
        
    }catch(e)
    {
     console.log(e)   
     res.redirect("/") 
    }
})
module.exports=routes;