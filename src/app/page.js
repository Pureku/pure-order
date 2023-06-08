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
      {/* <Pagination /> */}
      {/* <Card /> */}
      {/* <Content /> */}
      <ButtonTop />
      <Footer />
    </div>
  );
}
