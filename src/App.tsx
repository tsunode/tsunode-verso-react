import GlobalStyle from "./styles/GlobalStyle"
import { RoutesMain as Routes } from "./routes";
import { ProjectProvider } from "./providers/ProjectContext";

export const App = () => {
  return (
    <>
      <GlobalStyle />

      <ProjectProvider>
        <Routes />
      </ProjectProvider>
    </>
  )
}
