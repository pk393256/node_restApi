const {homeHandler,allBooks,singleBook}=require('./functions')

const express=require('express')
const app=express();


app.get('/',homeHandler);
app.get('/books',allBooks)
app.get('/books/:name',singleBook)

app.listen(3000);