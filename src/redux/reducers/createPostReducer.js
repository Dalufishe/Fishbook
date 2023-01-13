export const createPostReducer = (prevState = {
    posts: [],
    count: 0,
}, action) => {
    const newState = { ...prevState };
    switch (action.type) {

        case "createPost":
            let user = action.user;
            let avatar = action.avatar;
            let article = action.article;
            let media = action.media;
            newState.posts.unshift({
                user, avatar, article, media
            })
            newState.count += 1;
            return newState;
        default:
            return prevState;
    }
}  