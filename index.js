require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');
const usersRoutes = require('./src/routes/users');
const middlewarelogRequest =require('./src/middleware/log');
const upload = require('./src/middleware/multer');
const app = express();
//middleware
app.use(middlewarelogRequest);
//middleware untuk mengijinkan body json 
app.use(express.json());
app.use('/assets', express.static('public/images'))
//terhubung ke usersRoute
app.use('/users', usersRoutes);
app.post('/upload', upload.single('photo'),(req, res) => {
    res.json({
        message: 'Upload berhasil',
    })
})

app.listen(PORT , () =>{
    console.log(`Server berhasil di running di port ${PORT}`);
})