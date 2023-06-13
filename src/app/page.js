import Image from "next/image";
import "./globals.css";
import Nav from "@/components/nav.component";
import Footer from "@/components/footer.component";
import Tab from "@/components/tab.component";
import Pagination from "@/components/pagination.component";
import Card from "@/components/card.component";
import Content from "@/components/content.component";
import ButtonTop from "@/components/button_top.component";
import Layout from "@/components/layout.component";

export default function Home() {
  return (
    <div>
      <Nav />
      <Tab />
      {/* <Layout /> */}
      <div className="flex w-full">
        <div className="flex-auto min-w-0 py-4 lg:px-12 lg:pt-12 pb:12 xl:pb-24 lg:pb-16 bg-[#f6f6f6] px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Content />
          </div>
        </div>
      </div>
      {/* <Pagination /> */}
      {/* <Card /> */}
      {/* <Content /> */}
      <ButtonTop />
      <Footer />
    </div>
  );
}
