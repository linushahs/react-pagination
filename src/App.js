import "./App.css";
import { useState, useEffect } from "react";
import UserData from "./components/UserData";

function App() {
  const [randomUser, setRandomUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("name");

  async function getRandomUser() {
    const res = await fetch(`https://randomuser.me/api/`);
    const data = await res.json();

    console.log(data.results);
    setRandomUser(data.results[0]);
    setTitle(`${data.results[0].name.first} ${data.results[0].name.last}`);
    setLoading(false);
    setBtnLoading(false);
  }

  useEffect(() => {
    getRandomUser();
  }, []);

  const showUserData = (key) => {
    setSubTitle(key);
    if (key === "name") {
      setTitle(`${randomUser.name.first} ${randomUser.name.last}`);
    } else if (key === "email") {
      setTitle(randomUser.email);
    } else if (key === "age") {
      setTitle(randomUser.dob.age);
    } else if (key === "country") {
      setTitle(randomUser.location.country);
    } else if (key === "phone") {
      setTitle(randomUser.phone);
    } else if (key === "password") {
      setTitle(randomUser.login.password);
    }
  };

  const newRandomUser = () => {
    setBtnLoading(true);
    getRandomUser();
  };

  if (loading) {
    return (
      <div className="loading-container">
        <h1>Loading....</h1>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="half-container"></div>
        <div className="user-container">
          <div className="container">
            <div className="header">
              <img src={randomUser.picture.large} alt="Random User" />
            </div>
            <UserData
              isLoading={btnLoading}
              showUserData={showUserData}
              title={title}
              subTitle={subTitle}
              newRandomUser={newRandomUser}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
