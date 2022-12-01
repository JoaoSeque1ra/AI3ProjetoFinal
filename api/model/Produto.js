const sequelize = require("../config/database");
const { DataTypes } = require('sequelize') 

const Produto = sequelize.define("produto", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preco_unitario: {
        type: DataTypes.DECIMAL(8,2),
        allowNull: false
    },
    preco_promocional: {
        type: DataTypes.DECIMAL(8,2),
        allowNull: false
    },
    preco_Kilo: {
        type: DataTypes.DECIMAL(8,2),
        allowNull: false
    },
    percentagem_desconto: {
        type: DataTypes.DECIMAL(3,2),
        allowNull: false
    },
    origem: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nutricao_pontuacao: {
        type: DataTypes.STRING(2),
        allowNull: false,
    },
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},
{
    timestamps: false,
    tableName: "produto"
});

module.exports = Produto