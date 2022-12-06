import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { NewProject } from "../pages/NewProject";
import { NotFound } from "../pages/NotFound";
import { Register } from "../pages/Register";

export const RoutesMain = () => (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/new-project' element={<NewProject />} />
        
        <Route path="*" element={<NotFound />} />
    </Routes>
)