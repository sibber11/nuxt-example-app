export default defineEventHandler(async (event) => {
  return postsArray;
})

export const postsArray = [
  {
    id: 1,
    name: "Post 1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Doe",
    postedAt: "2024-02-26T12:00:00Z"
  },
  {
    id: 2,
    name: "Post 2",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Jane Smith",
    postedAt: "2024-02-25T08:30:00Z"
  },
  {
    id: 3,
    name: "Post 3",
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Alex Johnson",
    postedAt: "2024-02-24T15:45:00Z"
  }
]