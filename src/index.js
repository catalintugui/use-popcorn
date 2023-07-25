import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Rating from "./Rating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <Rating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>this movie is rated {movieRating}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
