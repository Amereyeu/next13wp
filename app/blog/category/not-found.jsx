import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There was a problem.</h2>
      <p>We could not find the category you were looking for.</p>
      <p>
        Go back to the <Link href="/blog/category">categories</Link>.
      </p>
    </main>
  );
}

