import HomePage from "../src/components/HomePage/HomePage.tsx";
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout/Layout.tsx";
import {RepoDetails} from "./components/RepoDetails/RepoDetails.tsx";

function App() {
    return (
        <div className="root-container">
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/:id' element={<RepoDetails/>}/>
                </Route>

            </Routes>

        </div>
    );
}

export default App;
