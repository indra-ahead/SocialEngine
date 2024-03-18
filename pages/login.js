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

      Login page
      <Link href="/signup">Signup {props.type}</Link>
      <footer></footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get("http://localhost:3000/api/login");

  
  return {
    props: { ...response.data },
  };
}