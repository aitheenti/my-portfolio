import { Route, Router, Routes } from 'react-router-dom';
import { Welcome } from '@my-portfolio/ui-components';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';

export function App() {
  return (
    <div className="w-full flex flex-col h-full flex-wrap items-center justify-center lg:justify-between p-5">
      <section className="p-5">
        <Welcome title="MonoRepo" />
      </section>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
