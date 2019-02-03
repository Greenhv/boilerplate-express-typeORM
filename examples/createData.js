import { Category } from "../src/entity/Category";
import { Post } from "../src/entity/Post";

export default async connection => {
  const category1 = new Category();
  category1.name = "TypeScript";

  const category2 = new Category();
  category2.name = "Programming";

  const post = new Post();
  post.title = "Control flow based type analysis";
  post.text =
    "TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.";
  post.categories = [category1, category2];

  return connection
    .getRepository(Post)
    .save(post)
    .then(post => {
      console.log("Post has been saved: ", post);
    });
};
