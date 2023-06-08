import Image from "next/image";
import "./globals.css";
import Nav from "@/components/nav.component";
import Footer from "@/components/footer.component";
import Tab from "@/components/tab.component";
import Pagination from "@/components/pagination.component";
import Card from "@/components/card.component";
import Content from "@/components/content.component";
import ButtonTop from "@/components/button_top.component";

export default function Home() {
  return (
    <div>
      <Nav />
      <Tab />
      <div className="flex w-full">
        <div className="flex-auto max-w-4xl min-w-0 py-4 lg:px-8 lg:pt-8 pb:12 xl:pb-24 lg:pb-16 bg-base-100 px-4">
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
