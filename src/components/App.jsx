import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import One from './One';
import Two from './Two';
import Three from './Three';

export const App = () => {
  return (
    <div>

      <Routes>
            <Route path="/" element={ <MainPage />}>
              <Route path="One" element={<One />} />
              <Route path="Two" element={<Two />} /> 
              <Route path="Three" element={<Three />} />
            </Route>          
        </Routes>
    </div>
  );
};
