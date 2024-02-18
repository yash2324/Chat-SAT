import MainComponent from "@/components/main";
import Left from "../components/left";
import HamburgerMenu from "@/components/Hamburger";
export default function Home() {
  return (
    <main className=" ">
      <div>
        <div className="relative h-screen w-screen  bg-[#2a2b2b]">
          <div className="sticky inset-0 bg-gradient-to-br from-[#354641] to-35%">
            <div className="sticky flex min-h-screen inset-0 bg-gradient-to-tl from-[#354641] to-20%">
              <HamburgerMenu />
              <Left />
              <MainComponent />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
