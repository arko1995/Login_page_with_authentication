import React from "react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-4">
      <section className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-lg sm:p-12">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500 text-2xl font-bold text-white shadow-lg shadow-indigo-500/30">
          A
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Welcome
        </h1>

        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-300">
          Create a new account or log in to continue.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/signup"
            className="rounded-xl bg-indigo-500 px-8 py-3 font-semibold text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 active:scale-[0.98]"
          >
            Sign Up
          </Link>

          <Link
            to="/login"
            className="rounded-xl border border-white/20 bg-white/10 px-8 py-3 font-semibold text-white transition hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/10 active:scale-[0.98]"
          >
            Login
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
