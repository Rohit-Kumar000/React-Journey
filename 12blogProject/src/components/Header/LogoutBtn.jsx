import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn({ className = "" }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const logoutHandler = async () => {
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      await authService.logout();
      dispatch(logout());
      navigate("/", { replace: true });
    } catch (err) {
      setError(err?.message || "Unable to sign out. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return <div>
    <button type="button" className={`px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-rose-50 hover:text-rose-600 transition cursor-pointer disabled:opacity-60 ${className}`} onClick={logoutHandler} disabled={busy}>
      {busy ? "Signing out…" : "Sign out"}
    </button>
    {error && <p role="alert" className="mt-1 max-w-xs text-xs text-rose-600">{error}</p>}
  </div>;
}

export default LogoutBtn;
