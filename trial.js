//Codesandbox link: 
// https://codesandbox.io/s/mini-3april-ulqhts?file=/src/App.js

import "./styles.css";

const notes = {
  title: "First Note",
  content: "dummy content",
  backgroundColor: "pink",
  createdTime: new Date(),
  isPinned: false
};

export default function App() {
  const { title, content, backgroundColor, createdTime, isPinned } = notes;

  return (
    <div className="App">
      <h1> Mini App </h1>
      <h2>Start editing to see some magic happen!</h2>

      <section class="cards text-only card-shadow">
        <div class="card-top">
          {/* <img class="img-hero no-img" src="" alt="gold rings"> */}
          <span class="icon-on-image">
            {" "}
            <i class="fa fa-heart "> </i>{" "}
          </span>
          <span class="dismiss-on-card">
            {" "}
            <i class="fa fa-window-close"></i>{" "}
          </span>
        </div>
        <h2 class="heading-text-only"> {title} </h2>
        <p class="card-text">{content} </p>
        <p class="card-text"> {`${createdTime.toLocaleString()}`} </p>

        <button class="btn btn-accent-outlined"> Add Task </button>
      </section>
    </div>
  );
}


