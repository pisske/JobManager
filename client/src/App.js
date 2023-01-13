import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Dashboard, Landing, Register, Error } from "./pages/Index.js";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
