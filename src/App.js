import logo from './logo.svg';
import './App.css';
import { SkeBasis } from '@skatteetaten/frontend-components/SkeBasis';
import { Button } from '@skatteetaten/frontend-components/Button';
import {Quiz} from './Quiz';
function App() {
  return (
    <SkeBasis>
      <Quiz></Quiz>
      {/* <div className="App-header">
        Hei
        <Button buttonStyle="primary" mobileFullWidth>
          Send inn skjema
        </Button>
      </div> */}

    </SkeBasis>
  );
}

export default App;
