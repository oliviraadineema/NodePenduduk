
`use strict`

//inisialisasi
const express = require("express")

//implementasi
const app = express()
app.use(express.json())

//menghubungkan ke databse
const db = require(`./db`)
db.connect(error =>{
    if(error)throw error
    console.log("Mysql Connnected")
})

//endpoint
app.get("/",(req, res)=>{
    res.send({
        message: "Berhasil menjalankan GET",
        data: {
            description :
            "Endpoint ini menampilkan data"
        }
    })
})

app.use("/penduduk", require(`./routes/pendudukroutes`))
// app.put("/penduduk", require(`./routes/pendudukroutes`))
// app.get("/penduduk", require(`./routes/pendudukroutes`))

const port = 8000;
app.listen(port, ()=> console.log(`App sudah berjalan ${port}`))