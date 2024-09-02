import React, { useRef, useState, useEffect } from "react";
import home from "../assets/home.jpg";
import man from "../assets/man.jpg";
import smit from "../assets/smit.png";
import { MdOutlineHorizontalRule } from "react-icons/md";
import Button from "./UI/Button";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Card from "./UI/Card";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon44.png";
import icon5 from "../assets/icon-5.png";
import icon6 from "../assets/icon6.png";
import libery from "../assets/libery.jpg";
import PatnerCard from "./UI/PatnerCard";
import emma from "../assets/Emma.jpg";
import jodan from "../assets/jodan.jpg";
import joel from "../assets/joel.jpg";
import melanie from "../assets/Melanie.jpg";
import nathnaiel from "../assets/Nathaniel.jpg";
import james from "../assets/james.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg2 from "../assets/bg2.png";
import band1 from "../assets/band1.png";
import band2 from "../assets/band2.png";
import band3 from "../assets/band3.png";
import band4 from "../assets/band4.png";
import band5 from "../assets/band5.png";
import Loader from "./UI/Loader";
import { useForm } from "react-hook-form";


function Home() {
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(4);
    console.log(data);
  };
  return (
    <>
      <div className="h-full" style={{ height: "160vh" }}>
        <section className="flex flex-col items-center relative">
          <div
            className="w-full h-screen "
            style={{ backgroundImage: `url(${home})` }}
          >
            <div className="flex flex-col items-start lg:items-start pt-32 pl-6  gap-5 lg:pl-28 lg:pt-28 ">
              <MdOutlineHorizontalRule size={50} />

              <h1
                className="lg:text-5xl text-2xl"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Liberty Legal Law Firm
              </h1>
              <div>
                <p className="lg:text-base text-sm  text-zinc-500">
                  We are a leading law firm in financial & business industry.
                  With
                </p>
                <p className="lg:text-base text-sm  text-zinc-500">
                  {" "}
                  more than 20 years of experience
                </p>
              </div>
              <Link to="/contact">
                <Button
                  text="Contact"
                  width="150px"
                  fontSize="20px"
                  arrow={FaArrowRight}
                />
              </Link>
            </div>
          </div>
          <div
            className="w-4/5 h-3/4 lg:w-5/6 bg-cover lg:h-5/6 absolute top-3/4 flex flex-col items-start md:pt-8 md:pl-8 md:w-3/5 lg:items-start pl-3 pt-4 lg:pl-24 lg:pt-24 gap-8 "
            style={{ backgroundImage: `url(${man})` }}
          >
            <h1 className="text-stone-700 text-2xl lg:text-3xl font-bold">
              Story About Liberty{" "}
            </h1>
            <p className="text-zinc-400 text-sm  lg:text-base">
              We can provide corporate governance, helping clients manage the{" "}
              <br /> responsibilities of running a corporation in financial
              field.
            </p>

            <p className="text-zinc-400 text-sm lg:text-base">
              Far far away, behind the word mountains, far from the countries
              Vokalia <br /> and Consonantia, there live the blind texts.
              Separated they live in <br /> Bookmarksgrove right at the coast of
              the Semantics, a large language <br /> ocean. A small river named
              Duden flows.
            </p>

            <div className="flex flex-col items-center gap-4">
              <img src={smit} alt="ceo sing" className="w-44" />
              <p className="font-bold text-xs tracking-widest theme">
                CEO, LIBERTY LAW FIRM
              </p>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="w-full h-full bg-white flex flex-col items-center">
          <div className="mt-20 text-center">
            <p className="lg:text-2sm tracking-widest font-bold text-stone-400 pb-4	">
              WHAT WE ARE EXPERT AT
            </p>
            <p className="lg:text-4xl font-bold">Legal Practices Area</p>
          </div>
          <MdOutlineHorizontalRule size={50} color="#b6a188" />
          <div className="w-fit grid lg:grid-cols-3 lg:row-span-3 lg:col-span-2 gap-8 pt-10">
            <Card image={icon1} heading="Coporate & Securities" to="/coporate" />
            <Card image={icon2} heading="Real Estate Law" to="/realEstate"/>
            <Card image={icon3} heading="Health Care Law" to="/health"/>
            <Card image={icon4} heading="Insurance Law" to="/insurance"/>
            <Card image={icon5} heading="Construction & Engineering" to="/construction"/>
            <Card image={icon6} heading="Ecommerce Law" to="/ecommerce"/>
          </div>
        </section>

        <section className=" w-full h-full pt-20">
          <div
            className="w-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${libery})`, height: "120vh" }}
          >
            <div className="lg:border lg:border-stone-400  lg:h-5/6 lg:w-11/12 flex flex-col items-center justify-center  ">
              <div className="flex flex-col items-center  gap-9">
                <h1 className="text-white lg:text-4xl text-3xl font-bold">
                  Free Consultation
                </h1>
                <div className="flex flex-col items-center text-stone-400 font-medium text-sm lg:text-base">
                  <p>
                    Law is complicate matter. It can cause you a big problem
                  </p>
                  <p>if you ignore it. Let us help you!</p>
                </div>
                {isSubmitting && (
                  <div>
                    <Loader width="100px" height="100px" />
                  </div>
                )}
                <form
                  action="#"
                  method="POST"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="grid lg:grid-cols-2 lg:gap-4 gap-8  ">
                    <div>
                      <input
                        {...register("FullName", {
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                          minLength: {
                            value: 3,
                            message: "Enter atleast minimum 3 character ",
                          },
                        })}
                        className="lg:w-96 w-80 p-3 text-white h-14 focus:outline-none"
                        style={{ backgroundColor: "#373737" }}
                        placeholder="Name*"
                        spellCheck="false"
                        type="text"
                      />
                      {errors.FullName && (
                        <div className="text-white">
                          {errors.FullName.message}
                        </div>
                      )}
                    </div>
                    <div>
                      <input
                        {...register("phone", {
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                          minLength: {
                            value: 3,
                            message: "Enter atleast minimum 3 character ",
                          },
                        })}
                        className="lg:w-96 w-80 p-3 text-white  h-14 focus:outline-none"
                        style={{ backgroundColor: "#373737" }}
                        placeholder="Phone*"
                        spellCheck="false"
                        type="tel"
                      />
                      {errors.phone && (
                        <div className="text-white">{errors.phone.message}</div>
                      )}
                    </div>

                    <div className="pt-5">
                      <select
                        {...register("select", {
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                        })}
                        className="lg:w-96 w-80 p-3 text-white  h-14"
                        style={{ backgroundColor: "#373737" }}
                      >
                        <option value="Corporate Law">Corporate Law</option>
                        <option value="Criminal Law">Criminal Law</option>
                        <option value="Personal Injury Law">
                          Personal Law
                        </option>
                        <option value="Real-State Law">Real Estate Law</option>
                        <option value="Health Care Law">Health Care Law</option>
                        <option value="Ecommerce Law">Insurance Law</option>
                        <option value="Insurance Law">
                          Construction & Engineering
                        </option>
                        <option value="Construction">Ecommerce Law</option>
                      </select>
                      {errors.select && (
                        <div className="text-white">
                          {errors.select.message}
                        </div>
                      )}
                    </div>

                    <div className="pt-5">
                      <input
                        className="lg:w-96 w-80 p-3 text-white  h-14 focus:outline-none"
                        {...register("email", {
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                          minLength: {
                            value: 3,
                            message: "Enter atleast minimum 3 character ",
                          },
                        })}
                        style={{ backgroundColor: "#373737" }}
                        placeholder="Email*"
                        spellCheck="false"
                        type="email"
                      />
                      {errors.email && (
                        <div className="text-white">{errors.email.message}</div>
                      )}
                    </div>

                    <div className="hidden lg:block lg:col-span-2  ">
                      <textarea
                        {...register("msg", {
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                          minLength: {
                            value: 3,
                            message: "Enter atleast minimum 3 character ",
                          },
                        })}
                        cols="100"
                        rows="5"
                        style={{ backgroundColor: "#373737" }}
                        placeholder="Message*"
                        spellCheck="false"
                        className="p-4 text-white  focus:outline-none"
                      ></textarea>
                      {errors.msg && (
                        <div className="text-white">{errors.msg.message}</div>
                      )}
                    </div>
                    <div className="hidden lg:block lg:col-span-2 pb-20">
                      <Button
                        disabled={isSubmitting}
                        width="56vw"
                        text="SUBMIT NOW"
                      />
                    </div>
                    <div className="block lg:hidden lg:col-span-2">
                      <input
                        style={{ backgroundColor: "#373737" }}
                        placeholder="Message*"
                      />
                    </div>
                    <div className="block lg:hidden lg:col-span-2">
                      <Button
                        disabled={isSubmitting}
                        width="322px"
                        text="SUBMIT NOW"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="h-full ">
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

        <section className="h-full ">
          <div className="flex flex-col items-center justify-center lg:flex-row gap-20">
            <div className="w-5/6 lg:w-2/6 ">
              <img src={bg2} alt="image" />
            </div>
            <div className="flex flex-col gap-7 items-start pl-6 ">
              <div className="flex flex-col gap-2">
                <p className="text-stone-400 font-bold text-sm tracking-wider	">
                  WHAT WE ARE EXPERT AT
                </p>
                <p className="text-stone-700 font-bold text-2xl">
                  Why Clients Choose Us
                </p>
              </div>

              <div className="text-lg theme font-medium tracking-wide ">
                <p>We can provide corporate governance, helping clients</p>
                <p>manage the responsibilities of running a corporation in</p>
                <p>financial field.</p>
              </div>

              <div className="text-stone-500 tracking-wide">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries
                </p>
                <p>
                  Vokalia and Consonantia, there live the blind texts. Separated
                  they liv
                </p>
                <p>
                  in Bookmarksgrove right at the coast of the Semantics, a large
                </p>
                <p>language ocean. A small river named Duden flows.</p>
              </div>
              <div className="flex items-center gap-2 text-xs theme font-bold pt-2 tracking-widest">
                <button>LEARN MORE</button>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="h-full w-full pt-24">
        <div className="lg:h-56 h-full w-full bg-stone-200 flex flex-col lg:flex-row items-center justify-center gap-20 py-10">
          <img src={band1} alt="band1" />
          <img src={band2} alt="band2" />
          <img src={band3} alt="band3" />
          <img src={band4} alt="band4" />
          <img src={band5} alt="band5" />
        </div>
        <div></div>
      </section>
    </>
  );
}

export default Home;
