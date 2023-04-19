// ~/types/index.ts

export {};

declare global {
  interface Post {
    userId: String;
    id: Number;
    title: String;
    body: String;
  }

  interface PostCardAction {
    label: String;
    path: String;
  }

  interface User {
    id: Number;
    name: String;
    username: String;
    phone: String;
    website: String;
    email: String;
  }
}
