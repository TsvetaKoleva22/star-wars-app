import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import CharactersPage from './pages/CharactersPage';
import StarshipsPage from './pages/StarshipsPage';
import VehiclesPage from './pages/VehiclesPage';
import NotFoundPage from './pages/NotFoundPage';
import { ContextWrapper } from './AppContext';

import './App.scss';

function App() {
    return (
        <ContextWrapper>
            <div className="wrapper" data-testid="App__Wrapper">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/characters' element={<CharactersPage />} />
                    <Route path='/starships' element={<StarshipsPage />} />
                    <Route path='/vehicles' element={<VehiclesPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </div>
        </ContextWrapper>
    );
}

export default App;
