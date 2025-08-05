import { Section1Style } from "./style";

const Section1 = () => {
  return (
    <Section1Style>
      <video
        className="item-image desktopVideo"
        autoPlay
        loop
        playsInline
        muted
      >
        <source
          src="https://cdn-stamplib.casetify.com/cms/video/24c8ba00645ceba9c73025880b54dc8d.mp4"
          type="video/mp4"
        />
      </video>
      <div className="bg"></div>
      <img src="/logo_w.png" alt="" />
    </Section1Style>
  );
};

export default Section1;
