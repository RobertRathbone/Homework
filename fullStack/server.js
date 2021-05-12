const express = require('express');
const cors = require('cors')
const app = express();

require('./server/config/mongoose.config.js');


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
require('./server/routes/product.routes')(app);
const port = 8000;

const AllMyProductRoutes = require("./server/routes/product.routes");
AllMyProductRoutes(app);

app.listen(port, () => console.log("Yo: ${port}"));