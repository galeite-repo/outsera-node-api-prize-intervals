import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";


export const Movie = sequelize.define("movie", {

    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    studios: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    producers: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    winner: {
        type: DataTypes.STRING,
        allowNull: true,
    },

});