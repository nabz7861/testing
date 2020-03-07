const express = require("express");
const app = express();

app.set('port', process.env.PORT || 3000); // Port that the app will be accessed on

app.listen(3000, function() {
    console.log('Port 3000 is open.')
});