import { Alert } from "./alert"

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Alert type='information' heading='Success!!' >
        Everithing is realy good!!!
      </Alert>
    </div>
  );
}
