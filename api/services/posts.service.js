const PostsRepository = require("../repositories/posts.repository");

class PostsService {
  postsRepository = new PostsRepository();

  createPost = async (userId, title, content, image) => {
    const createPostData = await this.postsRepository.createPost(
      userId,
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

    if (!allPostsData) {
      throw new Error("게시글 조회에 실패하였습니다.");
    }
    for (let i = 0; i < allPostsData.length; i++) {
      allPostsData[i].likesCount = await this.postsRepository.findOneLikeCount(
        allPostsData[i].postId
      );
    }
    return allPostsData;
  };

  findOnePost = async (userId, postId) => {
    const postData = await this.postsRepository.findOnePost(postId);
    postData.likesCount = await this.postsRepository.findOneLikeCount(postId);
    postData.likeState = await this.postsRepository.findLikeState(
      userId,
      postId
    );

    if (!postData.postId) {
      throw new Error("게시글 조회에 실패하였습니다.");
    }
    return postData;
  };

  editPost = async (userId, postId, title, content) => {
    const findPost = await this.postsRepository.findHavePost(userId, postId);
    const postData = await this.postsRepository.editPost(
      userId,
      postId,
      title,
      content
    );

    if (!findPost || !postData) {
      throw new Error("게시글 수정에 실패하였습니다.");
    }
    return postData;
  };

  deletePost = async (userId, postId) => {
    const findPost = await this.postsRepository.findHavePost(userId, postId);

    if (!findPost) {
      throw new Error("게시글 삭제에 실패하였습니다.");
    }
    const postData = await this.postsRepository.deletePost(userId, postId);
    return postData;
  };
}

module.exports = PostsService;
