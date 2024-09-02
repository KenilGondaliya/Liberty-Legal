import React from "react";
import Heading from "./UI/Heading";
import lawyer from "../assets/lawyer.jpg"
import smit from "../assets/smit.png";
import { MdOutlineHorizontalRule } from "react-icons/md";
import Principle from "./UI/Principle";
import emma from "../assets/Emma.jpg";
import jodan from "../assets/jodan.jpg";
import joel from "../assets/joel.jpg";
import melanie from "../assets/Melanie.jpg";
import nathnaiel from "../assets/Nathaniel.jpg";
import james from "../assets/james.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PatnerCard from "./UI/PatnerCard";
import { FaArrowRight } from "react-icons/fa6";
function About() {
  const items = [
    { image: james, name: "JAMES MILNER" },
    { image: emma, name: "EMMA BUNTON" },
    { image: melanie, name: "MELANIE BROWN" },
    { image: nathnaiel, name: "NATHANIEL PHILIPS" },
    { image: jodan, name: "JODAN HENDERSON" },
    { image: joel, name: "JOEL MATIP" },
  ];

  var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 500,
    pauseOnHover: false,
  };
  var setting = {
    dots: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 500,
    pauseOnHover: false,
  };
  var mobile = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 500,
    pauseOnHover: false,
  };
  return (
    <>
      <div>
        <Heading title="About Us" text="STORY ABOUT OUR FIRM" />
      </div>
      <section>
        <div className="flex flex-col lg:flex-row gap-14 items-center justify-center py-20">
          <div>
            <img src={lawyer} alt="" />
          </div>
          <div className="flex flex-col gap-6  items-start">
            <div className="w-fit">
            <MdOutlineHorizontalRule size={50} color="#b6a188" />
            </div>
            <div>
              <p className="text-sm font-bold text-stone-400 tracking-widest">ABOUT LIBERTY </p>
              <p className="text-3xl font-extrabold">Our Gorgeous History</p>
            </div>
            <div className="text-stone-600 ">
              <p>Far far away, behind the word mountains, far from the</p>
              <p>countries Vokalia and Consonantia, there live the blind</p>
              <p>texts. Separated they live in Bookmarksgrove right at the</p>
              <p>coast of the Semantics, a large language ocean. A small</p>
              <p>river named Duden flows.</p>
            </div>
            <div className="text-stone-600 ">
              <p>One morning, when Gregor Samsa woke from troubled</p>
              <p>dreams, he found himself transformed in his bed into a</p>
              <p>horrible vermin. He lay on his armour-like back, and if he</p>
              <p>lifted his head a little he could see his brown belly, slightly</p>
              <p>domed and divided by arches into stiff sections. The</p>
              <p>bedding was hardly able to cover it.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <img src={smit} alt="ceo sing" className="w-52" />
              <p className="font-bold text-xs tracking-widest theme">
                CEO, LIBERTY LAW FIRM
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Principle/>
      </section>
      <section>
      <div className="flex flex-col items-center gap-1">
            <div className="mt-20 text-center">
              <p className="lg:text-3xl font-bold">Partners at Liberty</p>
            </div>
            <div className="flex items-center gap-2 text-xs theme font-bold pt-2">
              <button type="submit">VIEW ALL PEOPLE</button>
              <FaArrowRight />
            </div>
          </div>
      <div className="w-full h-full overflow-hidden flex items-center justify-center pt-20 md:gap-4">
            <div
              className="hidden lg:block"
              style={{ width: "80vw", height: "100vh" }}
            >
              <Slider {...settings}>
                {items.map((item, index) => (
                  <PatnerCard image={item.image} name={item.name} />
                ))}
              </Slider>
            </div>
            <div
              className="hidden md:block lg:hidden "
              style={{ width: "90vw", height: "100vh" }}
            >
              <Slider {...setting}>
                {items.map((item, index) => (
                  <PatnerCard image={item.image} name={item.name} />
                ))}
              </Slider>
            </div>
            <div
              className="block md:hidden "
              style={{ width: "90vw", height: "100vh" }}
            >
              <Slider {...mobile}>
                {items.map((item, index) => (
                  <PatnerCard image={item.image} name={item.name} />
                ))}
              </Slider>
            </div>
          </div>
      </section>
    </>
  );
}

export default About;
