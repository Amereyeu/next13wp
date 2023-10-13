import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notfound">
      <h2>There was a problem.</h2>
      <p>We could not find the blog post you were looking for.</p>
      <p>
        Go back to the
        <Link href="/blog" className="notfound__link">
          blog
        </Link>
        .
      </p>
    </main>
  );
}

