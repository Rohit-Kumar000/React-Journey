import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header, Container } from "./components";
import { Outlet } from "react-router-dom";
import { missingAppwriteConfig } from "./config/config";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    let cancelled = false;
    authService.getCurrentUser()
      .then((userData) => {
        if (cancelled) return;
        if (userData) dispatch(login({ userData }));
        else dispatch(logout());
      })
      .catch((error) => {
        console.error("Appwrite session initialization failed:", error);
        if (!cancelled) dispatch(logout());
      })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [dispatch]);

  if (loading) return <div className="grid min-h-screen place-items-center" role="status" aria-label="Loading application">
    <div className="size-9 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
  </div>;

  return <div className="flex min-h-screen flex-col">
    <Header />
    {missingAppwriteConfig.length > 0 && <Container className="pt-4">
      <div role="alert" className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <p className="font-semibold">Appwrite setup is incomplete.</p>
        <p className="mt-1">Add the missing variables to your local <code>.env</code> file: {missingAppwriteConfig.join(", ")}.</p>
        <p className="mt-1">Restart the development server after changing environment variables.</p>
      </div>
    </Container>}
    <main className="flex-1"><Outlet /></main>
    <Footer />
  </div>;
}

export default App;
