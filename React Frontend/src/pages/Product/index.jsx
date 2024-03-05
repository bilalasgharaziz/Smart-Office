import React from "react";

// Importing useNavigate for navigation between pages.
import { useNavigate } from "react-router-dom";

// Importing custom components for displaying text and images.
import { Button, Img, Text } from "components";
import Footer from "components/Footer";

const ProductPage = () => {
  const navigate = useNavigate();

  return (
    <>
    {/* Main container for the ImprintPage */}
      <div className="bg-white-A700 flex flex-col items-center justify-end mx-auto pt-4 w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="flex sm:flex-col flex-row font-merriweathersans sm:gap-10 items-center justify-between md:ml-[0] ml-[109px] md:px-5 w-[54%] md:w-full">
            <Text
              className="common-pointer text-4xl sm:text-[32px] md:text-[34px] text-teal-900"
              size="txtMerriweatherSansRomanLight36"
              onClick={() => navigate("/floorplan")}
            >
              LOG IN
            </Text>
            <Img
              className="common-pointer h-[152px] md:h-auto object-cover"
              src="images/img_sitylogonobackground.png"
              alt="sitylogonobackg"
              onClick={() => navigate("/")}
            />
          </div>
          <Text
            className="leading-[100.00px] md:ml-[0] ml-[100px] mt-40 md:text-5xl text-[100px] text-teal-900 w-[76%] sm:w-full"
            size="txtMerriweatherBlack100"
          >
            The set-up for agile work spaces
          </Text>
          <div className="flex flex-col items-center justify-start mt-[110px] w-full">
            <div className="bg-gray-100 flex flex-col font-merriweathersans items-center justify-end p-7 sm:px-5 w-full">
               {/* Imprint information text */}
              <Text
                className="leading-[45.00px] text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl w-[89%] sm:w-full"
                size="txtMerriweatherSansRomanLight24"
              >
                SiTY’s Desk Occupation Tracking System (DOTS) is comprised out
                of only 2 components: our sensors that keep track of every table
                in your office and a digital floor plan, letting you know which
                desk is waiting for you to work at.{" "}
              </Text>
            </div>
            <div className="font-merriweather h-[504px] md:h-[614px] sm:h-[859px] max-w-[1080px] mt-[110px] mx-auto md:px-5 relative w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex sm:flex-col flex-row md:gap-[45px] items-start justify-between w-full">
                  <Text
                    className="leading-[45.00px] text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl"
                    size="txtMerriweatherBlack24"
                  >
                    <span className="md:text-[44px] sm:text-[38px] text-teal-900 font-merriweather text-5xl font-light">
                      <>
                        Sensor
                        <br />
                      </>
                    </span>
                    <span className="text-teal-900 font-merriweathersans font-light">
                      DOTS uses state of the art sensor technology, to ensure
                      accurate detection of human presence. One sensor is
                      mounted under each table at your office to keep track of
                      that work station. Thanks to its size and placement, you
                      won’t notice it is there at all! The senors continuously
                      send information about the occupancy status to our
                      servers, which enables us to display the occupancy of your
                      office in real time. And most importantly: all data is
                      gathered{" "}
                    </span>
                    <span className="text-teal-900 font-merriweathersans font-bold">
                      anonymously
                    </span>
                    <span className="text-teal-900 font-merriweathersans font-light">
                      , as our sensors exclusively pick up on micro-motion, that
                      can not be backtracked to an individual user.{" "}
                    </span>
                  </Text>
                  <Img
                    className="h-[245px] md:h-auto sm:mt-0 mt-[245px] object-cover ml-[2rem]"
                    src="images/img_screenshothousingnobg.png"
                    alt="screenshothousi"
                  />
                </div>
              </div>
              <Img
                className="absolute h-[385px] object-cover right-[1%] top-[0] w-[37%]"
                src="images/img_wifi1.png"
                alt="wifiOne"
              />
            </div>
            <div className="flex md:flex-col flex-row font-merriweather md:gap-10 gap-[4rem] items-start justify-center  mt-[110px] mx-auto md:px-5 max-w-[1192px]">
              <div className="md:h-[290px] h-[353px] relative w-[100%] md:w-full">
                <div className="absolute md:h-[290px] h-[335px] inset-x-[0] ml-auto top-[0]  sm:w-full">
                  <Img
                    className="absolute h-[290px] inset-x-[0] ml-auto object-cover top-[0] "
                    src="images/discover_screens.png"
                    alt="screenshottvTwo"
                  />
                </div>
              </div>
              <Text
                className="leading-[45.00px]  text-5xl sm:text-[38px] md:text-[44px] text-justify text-teal-900"
                size="txtMerriweatherLight48"
              >
                <span className="text-teal-900 font-merriweather font-light">
                  <>
                    Digital floor plan
                    <br />
                  </>
                </span>
                <span className="md:text-[22px] sm:text-xl text-teal-900 font-merriweathersans text-2xl font-light">
                  You can access your personalized floor plan with just a few
                  clicks via our website. Simply log in and check for the green
                  desk closest to you - or farthest away from that one annoying
                  air conditioning unit!{" "}
                </span>
              </Text>
            </div>
            <Text
              className="leading-[45.00px] max-w-[1192px] mt-[110px] text-5xl md:text-[44px] text-justify text-teal-900 sm:text"
              size="txtMerriweatherSansRomanLight24"
            >
             
                <span className="text-teal-900 font-merriweather font-light">
                  <>
                    Wooden floor plan
                    <br />
                  </>
                </span>
                <span className="md:text-[22px] sm:text-xl text-teal-900 font-merriweathersans text-2xl font-light">
                Are digital displays not you thing? We get that. That is why we
                offer a second display option: Get a customized pinewood board,
                in which your office’s layout is engraved. Just like its digital
                counter part, all tables light up according to their occupancy
                status. Place your wooden floor plan at your office’s entrance
                and enjoy the fusion of sustainable aesthetics and smart
                functionality!
              </span>
            </Text>
            <div className="flex md:flex-col flex-row font-merriweather md:gap-10 gap-[4rem] items-start justify-center  mt-[110px] mx-auto md:px-5 max-w-[1192px]">
              <div className="md:h-[290px] h-[353px] relative w-[100%] md:w-full">
                <div className="absolute md:h-[290px] h-[335px] inset-x-[0] ml-auto top-[0]  sm:w-full">
                  <Img
                    className="absolute h-[290px] inset-x-[0] ml-auto object-cover top-[0] "
                    src="images/img_data2.png"
                    alt="dataOne"
                  />
                </div>
              </div>
              <Text
                className="leading-[45.00px]  text-5xl sm:text-[38px] md:text-[44px] text-justify text-teal-900"
                size="txtMerriweatherLight48"
              >
                <span className="text-teal-900 font-merriweather font-light">
                  <>
                  Data analytics
                    <br />
                  </>
                </span>
                <span className="md:text-[22px] sm:text-xl text-teal-900 font-merriweathersans text-2xl font-light">
                We want to help you, to use your space more efficiently!
                  Thanks to our sensors’ occupancy data, we can offer valuable
                  data insights: How high is the occupancy rate of your office?
                  Are tables switched frequently? Which areas of your office
                  experience a higher load? Knowing the facts will enable you to
                  create a more employee-friendly work space and make ecological
                  and economical choices.{" "}
                </span>
              </Text>
            </div>
           
            <Footer className="bg-gray-100 flex font-merriweathersans items-center justify-center mt-[86px] md:px-5 w-full" />
            <Button
              className="common-pointer cursor-pointer font-light font-merriweather w-full md:min-w-full mt-[7px] text-2xl md:text-[22px] text-center sm:text-xl"
              onClick={() => navigate("/imprint")}
              shape="square"
              color="teal_900"
              size="md"
              variant="fill"
            >
              Imprint
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
