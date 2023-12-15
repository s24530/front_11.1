import React, { useState, useEffect } from "react";

function App() {
  const [userData, setUserData] = useState(null);

  const fetchRandomUser = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();

      setUserData(data.results[0]);
    } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
    }
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <div className="app">
      <h1>Losowe Dane Użytkownika</h1>

      <button onClick={fetchRandomUser}>Losuj kolejne dane</button>

      {userData && (
        <div className="user-data">
          <img src={userData.picture.large} alt="User" />
          <p>
            <strong>Imię:</strong> {userData.name.first}
          </p>
          <p>
            <strong>Nazwisko:</strong> {userData.name.last}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Miasto:</strong> {userData.location.city}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
