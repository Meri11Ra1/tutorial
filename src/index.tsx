import React from "react";
import ReactDOM from "react-dom/client";
import Game from './screen/App';

export default function Main() {
  return (
    <div className="index">
      <Game />
    </div>
  )
}

  // ========================================

  const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
  root.render(<Main />);



  
  