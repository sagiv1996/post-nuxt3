// ~/types/index.ts

export {};

declare global {
  interface Post {
    userId: String;
    id: Number;
    title: String;
    body: String;
  }
}
