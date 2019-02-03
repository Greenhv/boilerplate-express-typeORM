# Simple Babel ES6/7 boilerplate to create an Express server with TypeORM

### Description

If you're looking to test a replacement of sequelize and are a little lazy to create a whole server on your own, you can use this one repository to test it out or to use it in any app you want. It includes a couple of test entities and some code so you can query and create tables, also it includes a docker configuration for the database (by default is PG, but you can change it to whatever you want, check the official guide [here](https://github.com/typeorm/typeorm#installation) to know what extra libraries you need to install to get that working)

On the other hand I add other libraries to help with the development like

- [Nodemon](https://github.com/remy/nodemon)
- [Express CORS](https://github.com/expressjs/cors)
- [dotenv](https://github.com/motdotla/dotenv)

If you want to know more about [TypeORM](https://github.com/typeorm/typeorm) or [Express](http://expressjs.com/en/4x/api.html) please follow their respective documentation.

### Precaution about lazy option in the models (entities)

As I was testing the code in the repository I came across an interesting behavious, when you saved a relation of many-to-many that have the option `lazy` set to true, then the relations won't save. According to [the github issue](https://github.com/typeorm/typeorm/issues/3004) this only happens on PG databases and a workaround to this could be first save the entities and the add the many-to-many relations.

```js
const category = await connection.manager.findOne(Category, 1);
const post = Object.assign(
  new Post(),
  {
    title: "my post"
  },
  {
    categories: Promise.resolve([category])
  }
);
await connection.manager.save(post);
```
