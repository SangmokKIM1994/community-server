"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.Users, {
        targetKey: "userId",
        foreignKey: "userId",
      });
      this.belongsTo(models.Posts, {
        targetKey: "postId",
        foreignKey: "postId",
      });
    }
  }
  Likes.init(
    {
      likeId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "userId",
        },
        onDelete: "CASCADE",
      },
      postId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "posts",
          key: "postId",
        },
        onDelete: "CASCADE",
      },
    },
    {
      timestamp: false,
      sequelize,
      modelName: "Likes",
    }
  );
  return Likes;
};
