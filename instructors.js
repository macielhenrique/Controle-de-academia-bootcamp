const fs = require('fs')
const data= require('./data.json')

//create
exports.post =function(req,res){
    
    const keys=Object.keys(req.body)

    for(key of keys){
        if (req.body[key]==""){
            return res.send("POR FAVOR PRENCHA TODOS OS CAMPOS")
        }
    }
    let{avatar_url,birth,name,services,gender} = req.body 

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length +1)


    data.instructors.push({
        id,
        name,
        avatar_url,
        birth,
        gender,
        services,
        created_at,
    })

    fs.writeFile("data.json",JSON.stringify(data,null,2),function(err){
        if (err) return res.send("error ao escrever o arquivo")

        return res.redirect("/instructors")
    })

    //return res.send(req.body)
}