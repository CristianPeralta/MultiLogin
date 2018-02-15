class Router {
  constructor() {
    this.gets = {};
    this.posts = {};
    this.puts = {};
    this.deletes = {};
    this.route = {
        'GET':this.gets,
        'POST':this.posts,
        'PUT':this.puts,
        'DELETE':this.deletes
    }
    return this;
  }
  get (path,cb) {
    this.gets[path] = cb;
  }
  post (path,cb) {
    this.posts[path] = cb;
  }
  put (path,cb) {
    this.puts[path] = cb;
  }
  delete (path,cb) {
    this.deletes[path] = cb;
  }
}

export default Router;
