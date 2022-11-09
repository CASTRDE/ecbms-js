import SideBar from "./components/SideBar"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SearchEntry from "./pages/SearchEntry";
import SiteLayout from "./layout/SiteLayout";
import DisplayDocumentPage from "./pages/DisplayDocumentPage";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<SiteLayout />}>
            <Route path="/" element={<SideBar />} >
                <Route path="/newlodgement" element={<div>New Lodgement</div>} />
                <Route path="/searchentry" element={<SearchEntry />} />
                <Route path="/documents" element={<DisplayDocumentPage />} />
                <Route path="/commondatasettings" element={<div>Common Data Settings</div>} />
            </Route>
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
