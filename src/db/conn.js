const dotenv = require("dotenv");
dotenv.config();

const mongoose = require('mongoose');

exports.connectMongoose = () => {
    mongoose.set("strictQuery", false);

    mongoose.connect("mongodb+srv://saimkaskar786:72LrqWfakRAnzY75@habittrackerdb.qlwcdne.mongodb.net/?retryWrites=true&w=majority&appName=HabitTrackerDB")
        .then(() => {
            console.log(`Successfully Connected to Mongodb`);
        }).catch((e) => {
            console.log("Unable to Connect to Mongodb ", e);
        })
}