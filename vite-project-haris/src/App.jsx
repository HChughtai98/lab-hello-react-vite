import ironHackLogo from "./assets/ironHackLogo.png";
import landingPageIcon1 from "./assets/landingPageIcon1.png";
import landingPageIcon2 from "./assets/landingPageIcon2.png";
import landingPageIcon3 from "./assets/landingPageIcon3.png";
import landingPageIcon4 from "./assets/landingPageIcon4.png";
/* import upperContainerBGImage from "./assets/upperContainerBGImage.png"; */
import menuLogo from "./assets/menuLogo.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="UpperContainer">
        <div className="Navbar">
          <img src={ironHackLogo} alt="IronHackLogo" />
          <img src={menuLogo} alt="menuLogo" />{" "}
        </div>
        <div className="mainText">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use</p>
          <p>the most popular frontend library,</p>
          <p> and become a super Ninja developer.</p>
          <button className="AwesomeBtn">Awesome!</button>
        </div>
      </div>
      <div className="images">
        <div className="image1">
          <img src={landingPageIcon1} alt="landingPageIcon1" />{" "}
          <h3>Declarative</h3>
          <p>React makes it</p>
          <p>painless to create</p>
          <p>interactive UIs.</p>
        </div>

        <div className="image2">
          <img src={landingPageIcon2} alt="landingPageIcon2" />{" "}
          <h3>Components</h3>
          <p>Build encapsulated</p>
          <p>components that</p>
          <p>manage their state.</p>
        </div>

        <div className="image3">
          <img src={landingPageIcon3} alt="landingPageIcon3" />{" "}
          <h3>Single-Way</h3>
          <p>A set of immutable</p>
          <p>values are passed to</p>
          <p>the component's.</p>
        </div>

        <div className="image4">
          <img src={landingPageIcon4} alt="landingPageIcon4" /> <h3>JSX</h3>
          <p>Statically-typed,</p>
          <p>designed to run on</p>
          <p>modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;

/* function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ironHackLogo} className="logo" alt="Ironhack logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App; */
