import {NavBar} from "./component/NavBar"
import {Banner} from "./component/Banner"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from "./component/skills";
import {Projects} from "./component/Project";
import { Contact } from "./component/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
