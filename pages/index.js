import Head from "next/head";
import Link from "next/link"
import axios from "axios"

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>PlanetScale Next.js Quickstart</title>
        <meta name="description" content="PlanetScale Quickstart for Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      Signup page
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get("http://localhost:3000/api/signup");

  
  return {
    props: { ...response.data },
  };
}