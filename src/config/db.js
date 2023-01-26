import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("test-db","user", "pass", {
    dialect: "sqlite",
    host: "./config/db.sqlite"
});

export const connectToDatabase = async () => {
    try{
        await sequelize.authenticate();
        console.log("Connected to db");
    }catch (e) {
        console.error(e);
        process.exit();
    }
}

// this like making a db own our own and name the table and then check if it is connected to database or not
