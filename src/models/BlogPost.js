module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: DataTypes.INTEGER,
      title: DataTypes.STRING(255),
      content: DataTypes.STRING(255),
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      tableName: 'blog_posts',
      timestamps: false,
      underscored: true,
    }
  );
  
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
  };
  return BlogPost;
};
