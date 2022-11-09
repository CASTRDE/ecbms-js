import SideBar from "./components/SideBar"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SearchEntry from "./pages/SearchEntry";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element = {<SideBar />} >
                <Route path="/NewLodgement" element={<div>New Lodgement</div>} />
                <Route path="/SearchEntry" element={<SearchEntry />} />
                <Route path="/Documents" element={<div>Documents</div>} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
