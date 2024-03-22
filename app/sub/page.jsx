import Link from "next/link";
import "../page";

export default function Page() {
  return (
    <div className="sub">
      <p>Sub</p>
      <Link href="/">Home</Link>
    </div>
  );
}