import Hero from "../components/Hero";
import Features from "../components/Features";
import Headline from "../components/Headline";
import Headline2 from "../components/Headline2";
import Testimonials from "../components/Testimonials";
import Jumbotron from "../components/Jumbotron";
import Buildnow from "../components/Buildnow";
import Test from "../components/Tes";

export default function Home() {
  return (
    <div>
      <Hero />
      <Headline2 />
      <Headline />
      <Headline2 />
      <Headline />
      <Test />
      <Features />
      <Buildnow />
      <Testimonials />
      <Jumbotron />
    </div>
  );
}
