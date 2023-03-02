const PostsRepository = require("../repositories/posts.repository");
const { ForbiddenError, NotFoundError } = require("../exceptions/customError");

class PostsService {
  postsRepository = new PostsRepository();

  createPost = async (userId, title, content, ...file) => {
    const createPostData = await this.postsRepository.createPost(
      userId,
      title,
      content,
      ...file
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
    const findPost = await this.postsRepository.findHavePost(postId);
    if (!findPost) {
      throw new NotFoundError("수정할 게시물을 찾을수 없습니다.");
    }
    if (userId !== findPost.userId) {
      throw new ForbiddenError("수정 권한이 없습니다.");
    }
    const postData = await this.postsRepository.editPost(
      userId,
      postId,
      title,
      content,
      ...file
    );
    if (!postData) {
      throw new Error("게시글 수정에 실패하였습니다.");
    }
    return postData;
  };

  deletePost = async (userId, postId) => {
    const findPost = await this.postsRepository.findHavePost(postId);
    if (!findPost) {
      throw new NotFoundError("삭제할 게시물을 찾을수 없습니다.");
    }
    if (userId !== findPost.userId) {
      throw new ForbiddenError("삭제 권한이 없습니다.");
    }
    const postData = await this.postsRepository.deletePost(userId, postId);
    return postData;
  };
}

module.exports = PostsService;
