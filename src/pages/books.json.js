const books = [
  {
    name: 'abook',
    owner: 'Ben',
    slug: '/abook',
    cover: 'http.cat/100',
    description: "It's a book. A nice book. Very gud book!",
  },
];

export async function get({ params, request }) {
  return new Response(JSON.stringify(books), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
