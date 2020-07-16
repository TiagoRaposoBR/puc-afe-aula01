const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + `/dist/puc-afe-aula01`));

app.get(`/*`, function (req, res) {
    res.sendFile(`index.html`, { root: 'dist/puc-afe-aula01/' }
    );
});

app.listen(process.env.PORT || 8080);