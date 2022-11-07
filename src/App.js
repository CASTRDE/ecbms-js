import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SiteLayout from "./layout/SiteLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SiteLayout/>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
