import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from "./index"
import { useDispatch } from "react-redux"
import authService from "../appwrite/auth"
import { useForm } from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { isSubmitting } } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin({ userData }))   // slice expects { userData }
                navigate("/")
            }
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className="flex items-center justify-center px-4 py-12 sm:py-20">
            <div className="w-full max-w-md bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/60">
                <div className="flex justify-center"><Logo /></div>
                <h2 className="mt-6 text-center font-serif text-3xl font-bold text-slate-900">Welcome back</h2>
                <p className="mt-2 text-center text-sm text-slate-500">
                    Don&apos;t have an account?{" "}
                    <Link to="/signup" className="font-semibold text-indigo-600 hover:underline">Sign up</Link>
                </p>

                {error && (
                    <p className="mt-6 rounded-lg bg-rose-50 border border-rose-200 px-4 py-3 text-sm text-rose-700">{error}</p>
                )}

                <form onSubmit={handleSubmit(login)} className="mt-8 space-y-5">
                    <Input
                        label="Email"
                        placeholder="you@example.com"
                        type="email"
                        {...register("email", { required: true })}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { required: true })}
                    />
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Signing in..." : "Sign in"}
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Login
