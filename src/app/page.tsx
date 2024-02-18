import MainComponent from "@/components/main";
import Left from "../components/left";
export default function Home() {
  return (
    <main className=" min-h-screen">
      <div>
        <div className="relative h-screen w-screen  bg-[#2a2b2b]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#354641] to-35%">
            <div className="absolute flex inset-0 bg-gradient-to-tl from-[#354641] to-20%">
              <Left />
              <MainComponent />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
