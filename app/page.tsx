import Header from "@/components/header";
import google from "@/assets/google.png";
import Image from "next/image";
import SearchBar from "@/components/search-bar";
import Footer from "@/components/footer";
import LanguageSelector from "@/components/language-selector";

export default function Home() {
  return (
    <div className="h-screen w-full bg-bgGray flex flex-col justify-between">
      <Header />

      <div className="flex flex-col items-center justify-center">
        <Image className="mb-10" src={google} width={272} height={92} alt="Google" />

        <SearchBar />

        <LanguageSelector />
      </div>

      <Footer />
    </div>
  );
}
