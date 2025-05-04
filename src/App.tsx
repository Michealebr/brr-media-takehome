import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar-components/Navbar';
import './App.css';
import Staff from './pages/Staff';
import CreateTicket from './pages/CreateTicket';
import TicketsPage from './pages/TicketsPage';
import ToDoList from './pages/ToDoList';
import { Toaster } from 'react-hot-toast';
import { useUser } from './context/UserContext';
import Loading from './components/Loading';

function App() {
  const { isLoading } = useUser();
  return (
    <>
      {/* load spinner when switching roles */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
          <Loading />
        </div>
      )}

      <div className="flex h-screen">
        <Navbar />
        <main className=" lg:ml-80 mt-5 lg:mt-0 flex-1 p-[30px] lg:p-10 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/staff" element={<Staff />}></Route>
            <Route path="/create-ticket" element={<CreateTicket />}></Route>
            <Route path="/ticket-page" element={<TicketsPage />}></Route>
            <Route path="/to-do-list" element={<ToDoList />}></Route>
          </Routes>
        </main>
      </div>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
