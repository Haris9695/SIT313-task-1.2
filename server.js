const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))



app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.post('/' , (req,res)=>{
    const firstname = req.body.first_name
    const lastname = req.body.last_name
    const email = req.body.email
    const data = {
        members:[
            {
            email_address : email,
            status: "subscribed",
            merge_fields: {
                FNAME : firstname,
                lNAME : lastname
            }
        }
        ]

        }
    var jsonData = JSON.stringify(data)
    const url = "https://us21.api.mailchimp.com/3.0/list/325a237f35"
    const options= {
        method :"POST",
        auth:"jjjj:cf685b3af708f82d05426d98db7a8af0-us21"
    }

    const request = https.request(url,options,function(response)
    {
      response.on("data", function(data){
          console.log(JSON.parse(data))
      })
    })

    request.write(jsonData)
    request.end()
})
app.listen(3000, function(){
console.log("Server is running on port 3000")

})



