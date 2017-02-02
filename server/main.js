/**
 * Created by maximiliano.dimito on 2/2/2017.
 */
let mongoose = require("mongoose");
const usuario = process.env.dbUser;
const pass = process.env.dbPass;
mongoose.connect(`mongodb://${usuario}:${pass}@ds017636.mlab.com:17636/asistancechecker`).then(() => {
    require("./server");
}).catch(() => {
    console.log("NO CONECTO");
});