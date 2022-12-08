import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { NewProject } from "../pages/NewProject";
import { NotFound } from "../pages/NotFound";
import { Register } from "../pages/Register";

export const RoutesMain = () => (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Register />} />

        <Route element={<ProtectedRoutes />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/new-project' element={<NewProject />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
    </Routes>
)