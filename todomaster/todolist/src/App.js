import "./App.css";
import { RouterProvider } from "react-router-dom";
import aa from "./libs/routes/router";

function App() {
  return (
    <RouterProvider router={aa} />
    // 컴포넌트
  );
}

export default App;
