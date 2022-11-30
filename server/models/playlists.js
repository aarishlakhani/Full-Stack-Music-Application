module.exports = (sequelize, DataTypes) =>{

    const playlist = sequelize.define("playlists",{
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        song: {
            type: DataTypes.STRING,
            allowNull: false
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },



    } );

    return playlist;

}