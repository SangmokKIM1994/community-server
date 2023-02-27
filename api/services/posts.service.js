const PostsRepository = require("../repositories/posts.repository");

class PostsService {
    postsRepository = new PostsRepository();

    createPost = async(title, content) => {
        const createPostData = await this.postsRepository.createPost(title,content);

        if(!createPostData){
            throw new Error("게시글 작성에 실패하였습니다.");
        }
        return createPostData
    }

    getAllPosts = async() => {
        const allPostsData = await this.postsRepository.getAllPosts();

        if(allPostsData.length === 0){
            throw new Error("게시글 조회에 실패하였습니다.");
        }

        return allPostsData
    }

    findOnePost = async(postId) => {
        const postData = await this.postsRepository.findOnePost(postId);
        
        if(!PostData.postId){
            throw new Error("게시글 조회에 실패하였습니다.");
        }
        return postData
    }

    editPost = async(postId,title,content) => {
        const postData = await this.postsRepository.editPost(postId,title,content);

        if(!PostData.postId){
            throw new Error("댓글 수정에 실패하였습니다.");
        }
        return postData
    }

    deletePost = async(postId) => {
        const postData = await this.postsRepository.deletePost(postId);

        if(!PostData.postId){
            throw new Error("댓글 삭제에 실패하였습니다.");
        }
        return postData
    }
    

}

module.exports = PostsService;