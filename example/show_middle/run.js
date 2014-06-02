/**
 * Created by will on 6/2/14.
 */
var App = require("./..").App,
    app = new App(),
    middle01 = require("./middle01"),
    middle02 = require("./middle02");

app.use(middle01);
app.use(middle02);

app.listen(process.env.port);  // 可自己设定端口号，比如3000。