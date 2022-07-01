async function getAllSongs() {
  try {
    const res = await fetch(`${process.env.REACT_APP_BASEURL}/songs`);

    if (!res.ok) throw new Error('Sorry, something is wrong');
    const songs = await res.json();
    return songs;
  } catch (error) {
    console.log(error);
  }
}

export default getAllSongs;
