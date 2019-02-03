import { Post } from "../src/entity/Post";

export default async () => {
  const post = await Post.findOne(10);
  const categories = await post.categories;
	console.log(Object.getOwnPropertyDescriptor(post, "categories"));
  console.log(post);
  console.log(categories);
};
