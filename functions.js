const homeHandler=(req,res)=>{
    console.log('helloooo')
    return res.send('welcome to books library')
}
const allBooks=(req,res,next)=>{
    console.log('Fetching all books')
    return res.send('Fetching all books')
    next()
}
const singleBook=(req,res)=>{
    let name=req.params.name;
    return res.send({bookName:name})
}
module.exports={
    homeHandler,
    allBooks,
    singleBook,
    
}