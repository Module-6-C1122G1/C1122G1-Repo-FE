import { Route, Routes } from 'react-router-dom';
import { ListTicket } from './components/ticket/ListTicket';

function App() {
    return (
        <Routes>
            <Route path='' element={<ListTicket/>}>
               
            </Route>
        </Routes>
    )
};

export default App;
