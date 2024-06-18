const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

const routerUser = require('./routes/routerUser');

app.use(express.json());
app.use('/user', routerUser); // http://localhost:3000/user/check-data
app.use(cors());

app.listen(PORT, () => console.log(`Server init in port: ${PORT}`));