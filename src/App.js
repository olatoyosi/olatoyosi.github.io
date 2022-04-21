import {BrowserRouter as Router} from "react-router-dom";
import Nav from "./components/layouts/Nav";
import Header from "./components/layouts/Header";
import Main from "./Pages/Main";

function App() {
  return (
    <Router>
      <div className="scroll-smooth w-full min-h-screen bg-gray-100 overflow-x-hidden">
          <Nav ></Nav>
          <Main></Main>
      </div>
    </Router>
  );
}

export default App;
