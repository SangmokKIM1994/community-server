const LikesService = require("../services/likes.service");

class LikesController {
  likesService = new LikesService();

  like = async (req, res, next) => {
    const userId = 1;
    const { postId } = req.params;
    try {
      const data = await this.likesService.like(userId, postId);

      res.status(200).json({ message: data });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = LikesController;
