import { Header,Footer, MainSection } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden ">
      <div className="mx-10 xl:mx-64 lg:mx-36">
      <Header/>
      <MainSection/>
      </div>
      <Footer/>
      </main>
  );
}
