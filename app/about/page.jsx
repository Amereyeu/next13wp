"use client";

import { useSession } from "next-auth/react";
import Single from "../components/Single";

// export const metadata = {
//   title: "Next13 demo - about page",
// };

export default function About() {
  const { data: session, status } = useSession({
    required: true,
  });

  if (status === "loading") {
    return <></>;
  }

  return (
    <main>
      <Single />
    </main>
  );
}

