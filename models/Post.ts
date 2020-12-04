export interface PostComment {

}

export interface Post {
  userImage: string,
  username: string,
  isFollowing: boolean,

  postImage: string,
  postDescription: string,
  postLikes: [string],
  postComments: [PostComment]
}
