import { Routes, Route } from "react-router-dom";
import Menu from "./Menu/menu";
// import One from './One';
// import Two from './Two';
// import Three from '/Three';

export const App = () => {
  return (
    <div>

      <Routes>
            <Route path="/goit-react-hw-05-movies" element={ <Menu />} />
            {/* <Route path="One" element={<One />} />
            <Route path="Two" element={<Two />} /> 
            <Route path="Three" element={<Three />} /> */}
        </Routes>
      <hr/>
    </div>
  );
};
