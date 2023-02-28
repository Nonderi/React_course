//import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./components/MainHeader";
import "./components/Post";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isVisible={modalIsVisible} 
        onHideModal={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
