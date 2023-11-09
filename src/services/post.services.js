const { BlogPost, User, Category } = require('../models');
const statusCode = require('../utils/statusCode'); 

const allPostService = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { type: statusCode.OK, message: posts };
};

module.exports = {
  allPostService,
};
