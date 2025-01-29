import Typewriter from "typewriter-effect";
import "../pages/style.css";


function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Testing React for",
          "Whatsapp Analyzer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  )
}

export default Text