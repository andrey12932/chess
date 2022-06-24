import React, { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from '../pages/Auth';
import Chess from '../pages/Chess';

export const userContext = createContext(null);

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/game" element={<Chess />} />
            <Route path='*' element={<Auth />} />
        </Routes>
    );
}

export default AppRouter;