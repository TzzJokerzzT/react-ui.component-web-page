import { LibraryRouterProvider } from "./components/Router";
import { SidebarProvider } from "./components/Sidebar";
import { ToastProvider, ToastViewport } from "./components/Toast";
import { allRoutes } from "./config/routes";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./layout/Layout";
import AppRoutes from "./routes/router";

function App() {
  return (
    <ThemeProvider>
      <LibraryRouterProvider initialRoutes={allRoutes}>
        <SidebarProvider>
          <ToastProvider>
            <Layout>
              <AppRoutes />
            </Layout>
            <ToastViewport />
          </ToastProvider>
        </SidebarProvider>
      </LibraryRouterProvider>
    </ThemeProvider>
  );
}

export default App;
