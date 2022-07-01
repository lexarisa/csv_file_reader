import './App.css';
import getSongs from './api/getSongs';
import { useState, useEffect } from 'react';
import Spinner from './components/Spinner';

function App() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getSongs().then((data) => {
      setSongs(data);
    });
    setLoading(false);
  }, [loading]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="App">
      <h1>Thing or Two Test</h1>
      <table role="table">
        <thead>
          <tr>
            <th>Song Name</th>
            <th>Band</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {songs.length > 0 &&
            songs.map((song) => {
              return (
                <tr key={song.id}>
                  <td>{song.name}</td>
                  <td>{song.band}</td>
                  <td>{song.year}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
