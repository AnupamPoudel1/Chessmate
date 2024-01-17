import React from "react";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import Board from "./components/Chessboard";

function App() {
  return (
    <div className="flex justify-center items-center h-screen w-full overflow-auto">
      <Board />
    </div>
  );
}

export default App;
