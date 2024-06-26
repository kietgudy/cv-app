import { TypeAnimation } from "react-type-animation";
const HomeCV = () => {
  return (
    <>
      <div className="arlo_tm_section" id="home">
        <div className="arlo_tm_hero_header_wrap">
          <div className="arlo_tm_universal_box_wrap">
            <div className="bg_wrap">
              <div
                className="overlay_image hero jarallax"
                data-speed="0.1"
              ></div>
              <div className="overlay_color hero"></div>
            </div>
            <div className="content hero">
              <div className="inner_content">
                <div className="image_wrap">
                  <img src="img/hero/img.jpg" alt="hero" />
                </div>
                <div className="name_holder">
                  <h3>
                    NGUYEN VU <span>TAN KIET</span>
                  </h3>
                </div>
                <div className="text_typing">
                  <p>
                    I'm a <span className="arlo_tm_animation_text_word"></span>
                    <TypeAnimation
                      sequence={[
                        "UI/UX Designer",
                        2000,
                        "Web Developer",
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      // style={{ fontSize: "2em", display: "inline-block" }}
                      repeat={Infinity}
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                      placeholder=""
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="arlo_tm_arrow_wrap bounce anchor">
              <a href="#about">
                <i className="xcon-angle-double-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCV;
