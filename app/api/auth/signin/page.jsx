"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Form() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/about";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        redirect: false,
        username,
        password,
        callbackUrl,
      });
      console.log("Res", res);
      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {}
  };

  return (
    <div className="form-wrap">
      <form onSubmit={onSubmit} className="form">
        <div className="">
          <label htmlFor="email">Username</label>
          <input
            className="form__input"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="email"
            type="text"
          />
        </div>
        <div className="">
          <label htmlFor="password">Password</label>
          <input
            className="form__input"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
          />
        </div>
        {error && <div className="form__error">{error}</div>}
        <div className="buttons">
          <Link href="/" className="form__button form__button--red">
            Cancel
          </Link>
          <button className="form__button">Login</button>
        </div>
      </form>
    </div>
  );
}

