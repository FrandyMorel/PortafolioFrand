

import CoverParticles from "./Components/Cover-particles";
import Introduction from "./Components/Introduction";
import TransitionPage from "./Components/TransitionPage";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-screen h-full bg-no-repeat bg-gradient-cover">
      <CoverParticles/>
         <Introduction/>
      </div>
    </main>
  );
}
