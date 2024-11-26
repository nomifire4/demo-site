import Image from "next/image";
import Link from 'next/link'
// import '../styles/globals.css';


import { mainModule } from "process";

export default function Home() {
  return (
    /* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */
    <main>
      <h1 style={{textAlign: "center"}}>Hello World!</h1>
      <Link href="/about">About Page Link</Link>
      <button style={{ display: "block", margin: "20px 0" }}>
         About Page Button
      </button>
      <button className="button">Click Me</button>
      <div className="image-grid">
        <Image src="/images/image.png" alt="Image" width={200} height={200} />
        <Image src="/images/image.png" alt="Image" width={200} height={200} />
        <Image src="/images/image.png" alt="Image" width={200} height={200} />
        <Image src="/images/image.png" alt="Image" width={200} height={200} />
        <Image src="/images/image.png" alt="Image" width={200} height={200} />
        <Image src="/images/image.png" alt="Image" width={200} height={200} />
      </div>
    </main>  
  );
}
