import "./App.css";

import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  function sendingData(event) {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData((data) => [...data, json]);
      });
  }

  return (
    <div className="App">
      <div className="Instructions">
        <div className="block">
          <h1>POST request</h1>
          <details>
            <summary>
              <strong>Goals</strong>
            </summary>
            <p>
              So you are now and expert handling fetch requests (GET) to get
              data? What if you want to send data over to create a resource?
            </p>

            <p>
              We'll be using JSON Placeholder, in this exercise. Your task?
              Create a form to fill in the necessary data to create a new
              <strong>post</strong> entry. Once you get a successful response,
              display a list with all the posts you create.
            </p>
          </details>
          <details>
            <summary>
              <strong>Instructions</strong>
            </summary>
            <h3>Level 1:</h3>
            <ul>
              <li>Create a new post</li>
              <li>Display a list of posts</li>
            </ul>
            <h3>Level 2:</h3>
            <ul>
              <li>Handle potential errors from the API</li>
              <li>Use a different HTTP client, maybe axios</li>
            </ul>
            <h3>Level 3:</h3>
            <ul>
              <li>Refactor to async/await</li>
            </ul>
          </details>

          <br />
          <a className="link" href="https://jsonplaceholder.typicode.com/">
            JSON Placeholder
          </a>
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data"
          >
            Using Fetch API
          </a>
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://axios-http.com/"
          >
            Axios
          </a>
        </div>

        <div className="block">
          <form method="post">
            <ul>
              <li>
                <label for="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </li>
              <li>
                <label for="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </li>
              <li>
                <label for="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </li>
            </ul>
            <li className="button">
              <button type="submit" value="submit" onClick={sendingData}>
                Send your message
              </button>
            </li>
          </form>
          <div>
            <h1>Users</h1>
            {data.length ? (
              data.map((data) => (
                <div>
                  <p>Name: {data.name}</p>
                  <p>Email: {data.email}</p>
                  <p>Message: {data.message}</p>
                  <br></br>
                </div>
              ))
            ) : (
              <div>
                <h1>No Users</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
