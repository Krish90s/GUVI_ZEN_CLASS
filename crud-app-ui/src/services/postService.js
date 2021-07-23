import http from "./httpService";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

export function getPosts() {
  return http.get(apiEndpoint);
}

export function deletePost(postId) {
  return http.delete(apiEndpoint + "/" + postId);
}

export function getPost(postId) {
  return http.get(apiEndpoint + "/" + postId);
}

export function savePost(post) {
  if (post._id) {
    const body = { ...post };
    delete body._id;
    http.put(apiEndpoint + "/" + post._id, body);
  }
  return http.post(apiEndpoint, post);
}
