import redCircle from "./circle01.png";
import greenCircle from "./circle02.png";
import yellowRectangle from "./rectangle01.png";
import blueRectangle from "./rectangle02.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Landing() {
  return (
    <div className="parallax">
      <Parallax pages={3}>
        <ParallaxLayer
          factor={0.5}
          offset={-0.3}
          style={{
            backgroundImage: `url(${redCircle})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={0.1}
          style={{
            backgroundImage: `url(${yellowRectangle})`,
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={1}
          style={{
            backgroundImage: `url(${greenCircle})`,
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          style={{
            backgroundImage: `url(${blueRectangle})`,
          }}
        ></ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Landing;
