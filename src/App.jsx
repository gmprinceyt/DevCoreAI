import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Chats from "./Pages/Chats";
import { Suspense } from "react";
import "./App.css";
import Loading from "./components/Loading";

const App = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </Suspense>
  );
};

export default App;
