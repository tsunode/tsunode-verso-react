import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthContext";
import { ProjectProvider } from "../../providers/ProjectContext";

export const ProtectedRoutes = () => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <div>Loading...</div>;
    }

    return user ? (
        <ProjectProvider>
            <Outlet />
        </ProjectProvider>
    ) : <Navigate to='/' state={{ from: location }} />
}