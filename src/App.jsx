import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes/router';
function App() {
  return (
    <main className='.container'>
      <BrowserRouter>
        <Routes>
          {routes.map((item, index) => (
            <Route key={index} path={item.path} element={item.Component} />
          ))}
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
