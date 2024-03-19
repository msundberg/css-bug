import Link from "next/link";
import "./page.css";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <main className="main">
      <p>Main</p>
      <Link href="/sub">Sub</Link>
    </main>
  );
}
