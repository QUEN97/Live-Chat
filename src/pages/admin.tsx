import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";

//  import { trpc } from "../utils/trpc";
// import { HelpWidget } from "../components/HelpWidget";

const AdminPage: NextPage = () => {
  

  return (
    <>
      <Head>
        <title>Live Chat Admin</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Live <span className="text-[hsl(280,100%,70%)]">Chat</span> App
          </h1>
          <small className="text-white">
            Developed with Love by QUEN97
          </small>
      </main>
    </>
  );
};

export default AdminPage;
