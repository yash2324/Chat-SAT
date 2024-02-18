import Left from "../components/left";
export default function Home() {
  return (
    <main className=" min-h-screen">
      <div>
        <div className="relative h-screen w-screen overflow-hidden bg-[#2d2d2d]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#374842] to-30%">
            <div className="absolute inset-0 bg-gradient-to-tl from-[#374842] to-30%">
              <Left />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
