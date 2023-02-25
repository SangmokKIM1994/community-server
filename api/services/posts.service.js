const PostsRepository = require("../repositories/posts.repository");

class PostsService {
    postsRepository = new PostsRepository();

    createPost = async(title, content) => {
        const createPostData = await this.postsRepository.createPost(title,content);

        return createPostData
    }

    getAllPosts = async() => {
        const allPostsData = await this.postsRepository.getAllPosts();

        return allPostsData
    }

    findOnePost = async(postId) => {
        return await this.postsRepository.findOnePost(postId);
    }

    editPost = async(postId,title,content) => {
        return await this.postsRepository.editPost(postId,title,content);
    }

    deletePost = async(postId) => {
        return await this.postsRepository.deletePost(postId);
    }
    

}

module.exports = PostsService;