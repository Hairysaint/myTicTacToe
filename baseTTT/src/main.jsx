import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import {Layout, Offline, Multiplayer, } from './component';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';

function router() {
    return createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<App />} />
                <Route path="/offline" element={<Offline />} />
                <Route path="/multiplayer" element={<Multiplayer />} />
            </Route>
        )
    )
}

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router()} />
)
