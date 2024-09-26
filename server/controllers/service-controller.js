const Service =  require("../models/services_model");

const services = async (req,res) =>{
    try {
        const response = await Service.find();
        if(!response)
        {
            res.status(404).json({msg:"No Service found"});
            return ;
        }
        return res.status(200).json({msg:response});
    } catch (error) {
        console.log(`error from the service ${error}`);
    }
};

module.exports = services;