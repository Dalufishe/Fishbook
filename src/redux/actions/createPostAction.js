export const createPostAction = (user, avatar, article, media) => {
    return {
        type: "createPost",
        user,
        avatar,
        article,
        media,
    }
}