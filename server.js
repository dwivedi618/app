const express = require('express'),
    path = request('path');
const app = express();
app.use(express.static('./dist/trex'));

app.get('/*', (req,res) =>{
    res.sendFile(path.join(__dirname,'/dist/trex/index.html'));

});
app.listen(process.env.PORT || 4200,()=>{
    console.log('server started');
})