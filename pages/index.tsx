import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Credits from "@/components/Credits/Credits";
import AboutUs from "@/components/AboutUs/AboutUs";
import Team from "@/components/Team/Team";
export default function Home() {
  return (
    <>
      <Head>
        <title>Kozaktex</title>
        <meta name="description" content="kozaktex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container__main">
        <Header />
        <Hero />
        <Credits />
        <AboutUs />
        <Team />
        <Footer />
      </main>
    </>
  );
}
