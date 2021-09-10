import "./App.css";
import "./Components/Header/Header";
import Header from "./Components/Header/Header";
import LandingPage from "./Screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import Todo from "./Screens/Todo/Todo";
const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path="/" component={LandingPage} exact />
      <Route path="/todo" component={Todo} />
    </main>
  </BrowserRouter>
);

export default App;
