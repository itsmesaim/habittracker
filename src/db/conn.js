const dotenv = require("dotenv");
dotenv.config();

const mongoose = require('mongoose');

exports.connectMongoose = () => {
    mongoose.set("strictQuery", false);

    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log(`Successfully Connected to Mongodb`);
        }).catch((e) => {
            console.log("Unable to Connect to Mongodb ", e);
        })
}