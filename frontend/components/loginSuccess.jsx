import React from "react";
import { Link } from "react-router";

const LoginSuccess = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          <svg
            className="h-10 w-10 text-emerald-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>

        <h1 className="mt-6 text-3xl font-bold text-slate-900">
          Login successful
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          You have successfully signed in to your account.
        </p>

        <div className="mt-8 space-y-3">
          <Link
            to="/dashboard"
            className="block w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            Continue to dashboard
          </Link>

          <Link
            to="/"
            className="block w-full rounded-lg border border-slate-300 px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Go to home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LoginSuccess;
