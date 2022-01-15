const GetGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=4&api_key=ai25NCTcwlrdMyBJOeMSlMnwGJpdonu6`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((value) => {
    return {
      id: value.id,
      title: value.title,
      url: value.images?.downsized_medium.url,
    };
  });
  return gifs;
};
export default GetGifs;
