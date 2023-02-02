
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const API = "https://jsonplaceholder.typicode.com";

  const styleObj = {
    color: "#4a54f1",
    textAlign: "center",
    fontSize: "30px",
  }
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState('');
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setMyData(res.data))
  //     .catch((error) => setIsError(error.message))
  // }, [])


  // api calling using async, and axios
  const getApiData = async (url) => {
    try {
      const res = await axios.get(url);
      setMyData(res.data)
    } catch (error) {
      setIsError(error.message)
    }


  }
  useEffect(() => {
    getApiData(`${API}/posts`);
  }, [])
  return (
    <>
      <h1 style={styleObj}>Axios Tutorial</h1>
      {isError !== "" && <h2>{isError}</h2>}
      <div className="grid">
        {myData.map((post) => {
          const { id, title, body } = post
          return (
            <div className="card" key={id}>
              <h2>{title.slice(0, 9).toUpperCase()}</h2>
              <p>{body}</p>
            </div>
          )
        })}
      </div>
      <div>{myData.id}</div>
    </>
  );
}

export default App;
