const {Comments, Users,Posts,sequelize} = require("../../db/models");
// const {Users} = require("../../db/models")

class PostsRepository{
    createPost = async(title,content) => {

        // const userInfo = await users.findOne({where:{userId}})
        const createPostData = await Posts.create({ title,
                                                    content,
                                                    })
        
        return createPostData
    }

    getAllPosts = async() => {
        const allPostsData = await Posts.findAll({  
            attributes: [   
                "postId",
                "title",
                "UserId",
                "createdAt",
                "updatedAt",]
            // [sequelize.fn("COUNT", sequelize.col("comments.postId")),"commentsCount"]],
            // include: [  { model:users,attributes: ["nickname"]},
            // { model:comments,attributes: []}],
            // group: ["posts.postId"],
            // order:[["createdAt","DESC"]],
        })

        return allPostsData
    }
    
    findOnePost = async(postId) => {
        const postData = await Posts.findOne({where:{postId},
            attributes: [
                "postId",
                "title",
                "UserId",
                "createdAt",
                "updatedAt",]
                // [sequelize.fn("COUNT", sequelize.col("comments.postId")),"commentsCount"]],
                // include: [  { model:users,attributes: ["nickname"]},
                //             { model:comments,attributes: []}],
                // group: ["posts.postId"],
})
        return postData
    }

    editPost = async(postId,title,content) => {
        const update = await Posts.update({title, content},{where : {postId}})

        return update
    }

    deletePost = async(postId) => {
        return await Posts.destroy({where : {postId}})
    }

}

module.exports = PostsRepository;