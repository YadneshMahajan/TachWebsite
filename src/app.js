const express=require("express");
const hbs=require("hbs");
const mongoose=require("mongoose");
const app=express();
const bodyParser=require("body-parser");
const Slider=require("./models/Slider")
const Service=require("./models/Service");

app.use(bodyParser.urlencoded({
    extended:true
}))

const Detail=require("./models/Detail")

const routes=require('./routes/main');
// app.get("/",(request,response)=>{
//     response.send("WOWO this is data from server ")
// })

//(template engine)
app.use('/static',express.static("public"));
app.use('',routes)



app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

///DB connection
mongoose.connect('mongodb://localhost/website',{useNewUrlParser: true,useUnifiedTopology: true});

var db=mongoose.connection;
 db.on('error',console.error.bind(console,'connecton error'));
 db.once('open',function(){
     console.log("we are connected .....")


 });
//  const detail = new mongoose.model("detail",Detail);
 const creatDocument=async()=>{
    try{
        // const NDetail=new Detail({
        //     brandName:"YadduTechSolns",
        //     brandIconUrl:"https://cdn.pixabay.com/photo/2016/06/15/17/01/pear-1459382__480.png",   
        //     links:[
        //         {
        //             label:"Home",
        //             url:"/"
        //         },
        //        {
        //         label:"Services",
        //         url:"/services"
        //        },
        //        {
        //         label:"About",
        //         url:"/about"
        //        } ,
        //        {
        //         label:"Gallery",
        //         url:"/gallery"     
        //        },
        //        {
        //         label:"Contact Us",
        //         url:"contactUs"
        //        }

        //     ],
           
            
        //  })

        // const NSlider= new Slider(
        //     {
        //       title:'Learn Java in very easy model',
        //       subTitle:"Java is one of the most popular programinf langauge",
        //       imageUrl:"/static/images/code3.jpg"
        //     })
           
        //    const NSlider1=new Slider( {
        //       title:'What is Django in python ?',
        //       subTitle:"Django is most famous web framework of python programing",
        //       imageUrl:"/static/images/code2.jpg"
        //     })

        //      const NSlider2=new Slider({
        //       title:'What about node JS ? ',
        //       subTitle:"Java is one of the most popular programinf langauge",
        //       imageUrl:"/static/images/code1.jpg"
        //     })
        
        
        //   const result = await Slider.insertMany([NSlider,NSlider1,NSlider2])
   
//    console.log(result)

           const NService= new Service( {
                icon:"fa-brands fa-accusoft",
                title:"Provide Best Courses",
                description:"We provide best courses that helps us students in placement and learning coding ",
                linkText:"Check",
                link:"services" 

            }
           )
           const NService1= new Service( {
                icon:"fa-brands fa-adversal",
                title:"Provide Best Courses",
                description:"We provide best courses that helps us students in placement and learning coding ",
                linkText:"Check",
                link:"services" 

            }
           )
           const NService2= new Service({
                icon:"fa-solid fa-circle-question",
                title:"Provide Best Courses",
                description:"We provide best courses that helps us students in placement and learning coding ",
                linkText:"Check",
                link:"services" 

            }
           )
           const NService3= new Service({
                icon:"fa-solid fa-circle-half-stroke",
                title:"Provide Best Courses",
                description:"We provide best courses that helps us students in placement and learning coding ",
                linkText:"Check",
                link:"services" 

            })
           const NService4= new Service({
                icon:"fa-solid fa-truck-medical ",
                title:"Provide Best Courses",
                description:"We provide best courses that helps us students in placement and learning coding ",
                linkText:"Check",
                link:"services" 

            }
           )
           const NService5= new Service( {
                icon:"fa-solid fa-house-user",
                title:"Provide Best Courses",
                description:"We provide best courses that helps us students in placement and learning coding ",
                linkText:"Check",
                link:"services" 

            }
           )

        //    const result = await Service.insertMany([NService,NService1,NService2])
   
            //   console.log(result)


   
    }catch(err){
        console.log(err);
    }
 }
 
//  creatDocument()

app.listen(process.env.PORT | 5556,()=>{

    console.log("server started");
})


