import http from "./httpService";

const apiEndpoint = "https://jsonplaceholder.typicode.com/users";

export function getUsers() {
  return http.get(apiEndpoint);
}

export function deleteUser(userId) {
  return http.delete(apiEndpoint + "/" + userId);
}

export function getUser(userId) {
  return http.get(apiEndpoint + "/" + userId);
}

export function saveUser(user) {
  if (user._id) {
    const body = { ...user };
    delete body._id;
    http.put(apiEndpoint + "/" + user._id, body);
  }
  return http.post(apiEndpoint, user);
}
