const PostsService = require("../services/posts.service");

class PostsController {
    postsService = new PostsService();

    createPost = async(req, res, next) => {
        // const {userId} = res.locals.user;
        const {title, content} = req.body;

        await this.postsService.createPost(title,content);

        res.status(201).json({success:true,message:"게시글이 생성되었습니다."})
    }

    getAllPosts = async(req,res,next) => {
        const allPostsData = await this.postsService.getAllPosts();

        res.status(200).json({success:true,data:allPostsData})
    }

    findOnePost = async(req,res,next) => {
        const {postId} = req.params

        const postData = await this.postsService.findOnePost({where:{postId}});

        res.status(200).json({success:true,data:postData});
    }

    editPost = async(req,res,next) => {
        // const {userId} = res.locals.user;
        const {postId} = req.params;
        const {title, content} = req.body;

        await this.postsService.editPost({where:{postId}},{title,content});

        res.status(200).json({success:true,massege : "게시글이 수정되었습니다."})
    }

    deletePost = async(req,res,next) => {
        const {postId} = req.params

        await this.postsService.deletePost({where:{postId}})

        res.status(200).json({success:true,massege : "게시글이 삭제되었습니다."})
    }

}

module.exports = PostsController;