require("dotenv").config()
const config={
    app:{
        name:process.env.App_Name
    }
}
console.log(config.app)

module.exports=config