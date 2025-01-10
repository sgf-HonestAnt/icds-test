import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { IcButton } from "@ukic/react";
import { IcTopNavigation } from "@ukic/react";
import { SlottedSVG } from "@ukic/react";
import { mdiHome } from "@mdi/js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <IcTopNavigation appTitle='App title'>
        <SlottedSVG slot='app-icon' path={mdiHome} viewBox='0 0 24 24' />
      </IcTopNavigation>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <IcButton>Hello World</IcButton>{" "}
        <IcButton
          variant='destructive'
          onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </IcButton>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
