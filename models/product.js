'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    product.init(
        {
            productName: DataTypes.STRING,
            price: DataTypes.INTEGER,
            color: DataTypes.STRING,
            image: DataTypes.JSON,
            majorCategory: DataTypes.ENUM('ClOTHES', 'SHOES', 'ACC'),
            middleCategory: DataTypes.ENUM('TOP', 'BOTTOM'),
            smallCategory: DataTypes.ENUM(
                'T_SHIRT',
                'TRACK_TOP',
                'SWEATSHIRT',
                'HOODIE',
                'SWEATER_CARDIGAN',
                'TRACK_PANTS',
                'WOVEN_PANTS',
                'SWEAT_PANTS',
                'SHORTS_SKIRTS',
                'BAG',
                'HAT'
            ),
            discount: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'product',
            underscored: true,
        }
    );

    return product;
};
