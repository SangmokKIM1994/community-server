const LikesRepository = require("../repositories/likes.repository");

class LikesService {
  likesRepository = new LikesRepository();

  like = async (userId, postId) => {
    const findPost = await this.likesRepository.findPost(postId);

    if (!findPost) {
      throw new Error("게시글 조회를 실패했습니다.");
    } 

    const findLike = await this.likesRepository.findLike(userId, postId);
    if (!findLike){
      await this.likesRepository.createLike(userId,postId)
      return "좋아요가 등록되었습니다."
    } else {
      await this.likesRepository.deleteLike(userId,postId)
      return "좋아요가 해제되었습니다."
    }


  };
}

module.exports = LikesService;
