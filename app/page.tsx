import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello Word!</h1>
      <Link href="/users">Users</Link>
      <div>
        <button className="btn btn-primary">My Button</button>
      </div>
    </main>
  );
}
