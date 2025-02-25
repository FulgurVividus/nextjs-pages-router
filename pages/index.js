import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Hello Pages Router</h1>

      <div>
        <Link href="/cabins">Cabins</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}

export default Home;
