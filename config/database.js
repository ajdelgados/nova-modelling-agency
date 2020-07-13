const mongoose  = require("mongoose");

module.exports.connect = ()=>{
    mongoose.connect(
        process.env.MONGOLAB_URI,
        {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},
        (error) => {
            if (error) {
                console.log("Database connection failed! Now exiting ...");
                process.exit(1);
            } else {
                console.log("Datebase connection successful...");
            }
        }
    );
}