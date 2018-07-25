import sequelize, { DataTypes } from 'sequelize'

export default () => {
    return sequelize.define('2016Presidential', {
        state: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'STATE'
        },
        totalVotes: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'TOTAL_VOTES'
        },
        hillaryVotes: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'Hillary_Votes'
        },
        hillary: {
            type: DataTypes.DOUBLE,
            allowNull: true,
            field: 'Hillary'
        },
        hillaryEv: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'Hillary_EV'
        },
        hillaryHypEv: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'Hillary_HypEV'
        },
        trumpVotes: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'Trump_Votes'
        },
        trump: {
            type: DataTypes.DOUBLE,
            allowNull: true,
            field: 'Trump'
        },
        trumpHypeEv: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'Trump_HypeEV'
        },
        trumpEv: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'Trump_EV'
        },
        johnsonVotes: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'Johnson_Votes'
        },
        johnson: {
            type: DataTypes.DOUBLE,
            allowNull: true,
            field: 'Johnson'
        },
        johnsonEv: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'Johnson_EV'
        },
        johnsonHypEv: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'Johnson_HypEv'
        },
        totalEv: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'Total_EV'
        }
    }, {
        tableName: '2016Presidential'
    });
};