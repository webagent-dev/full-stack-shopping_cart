
const getAllProduct = async (req, res) => {
    try{
        res.status(200).json({msg: 'we are getting out all data'})
    }catch(err){
        console.log(err)
    }
}



module.exports = {
    getAllProduct
}