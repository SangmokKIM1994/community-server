const LikesRepository = require("../repositories/likes.repository");

class LikesService {
    likesRepository = new LikesRepository();

    like = async(userId,postId) =>{
        const findPost = await this.likesRepository.findPost(postId)

        if(!findPost){
            throw new Error("게시글 조회를 실패했습니다.")
        }else if(findPost){
            return await this.likesRepository.like(userId,postId)
        }
        
    }
}

module.exports = LikesService