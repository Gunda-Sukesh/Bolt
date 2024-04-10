import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>hello world</h1>
      <Link href="./search">search</Link>
      <br></br>
      <Link href="./find_route">route</Link>
    </main>
  );
}
