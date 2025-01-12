import { WobbleCardDemo } from "@/components/CardsImage";
import Contacticons from "@/components/Contacticons";
import LampDemo from "@/components/Display";
import { MainDisplay } from "@/components/MainDisplay";
import NavbarDemo from "@/components/Navbar";
import { OurTeamBest } from "@/components/OurTeamcreatebest";
import { ReviewsCards } from "@/components/Reviewscards";
import Whatwedo from "@/components/Whatwedo";
import Whychooseus from "@/components/Whychooseus";
import TextShow from "@/Pagecomponents/ShowColorhide";

export default function Home() {
  const text = "Hello, World!";
  return (
    <main>
      <NavbarDemo />
      {/* <BackgroundLinesDemo />*/}
      <MainDisplay />
      <LampDemo Text={text} />
      <WobbleCardDemo />
      <Whatwedo />
      <Whychooseus />
      <OurTeamBest />
      <ReviewsCards />
      <Contacticons />
      {/* <GlobeWorld /> */}
s
      <TextShow />
    </main>
  );
}
