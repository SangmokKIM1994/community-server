const PostsRepository = require("../repositories/posts.repository");

class PostsService {
  postsRepository = new PostsRepository();

  createPost = async (title, content, image) => {
    const createPostData = await this.postsRepository.createPost(
      title,
      content,
      image
    );

    if (!createPostData) {
      throw new Error("게시글 작성에 실패하였습니다.");
    }
    return createPostData;
  };

  getAllPosts = async () => {
    const allPostsData = await this.postsRepository.getAllPosts();
    const findLikeCount = await this.postsRepository.findLikes();
    if (!allPostsData) {
      throw new Error("게시글 조회에 실패하였습니다.");
    }
    for (let i = 0; i < allPostsData.length; i++) {
      allPostsData[i].likesCount = findLikeCount[i].likesCount;
    }
    return allPostsData;
  };

  findOnePost = async (postId) => {
    const postData = await this.postsRepository.findOnePost(postId);

    if (!postData.postId) {
      throw new Error("게시글 조회에 실패하였습니다.");
    }
    return postData;
  };

  editPost = async (postId, title, content) => {
    const postData = await this.postsRepository.editPost(
      postId,
      title,
      content
    );

    if (!postData.postId) {
      throw new Error("댓글 수정에 실패하였습니다.");
    }
    return postData;
  };

  deletePost = async (postId) => {
    const postData = await this.postsRepository.deletePost(postId);

    if (!postData.postId) {
      throw new Error("댓글 삭제에 실패하였습니다.");
    }
    return postData;
  };
}

module.exports = PostsService;
