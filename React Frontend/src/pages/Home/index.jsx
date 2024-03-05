import React from "react";

// Importing useNavigate for navigation and handleEmail for email handling.
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";
import { handleEmail } from "utils";

// HomePage component, which is the main landing page of the application.
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
     {/* Main container for the HomePage */}
      <div className="bg-white-A700 flex flex-col font-merriweathersans items-center justify-end mx-auto pt-4 w-full">
        <div className="flex flex-col justify-start w-full">
          {/* Header section with LOG IN text and company logo */}
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[109px] md:px-5 w-[54%] md:w-full">
            <Text
              className="common-pointer text-4xl sm:text-[32px] md:text-[34px] text-teal-900"
              size="txtMerriweatherSansRomanLight36"
              onClick={() => navigate("/floorplan")}
            >
              LOG IN
            </Text>
             {/* Company logo */}
            <Img
              className="h-[152px] md:h-auto object-cover"
              src="images/img_sitylogonobackground.png"
              alt="sitylogonobackg"
            />
          </div>
           {/* Main banner area with background image, text, and button */}
          <div className="md:h-[527px] h-[611px] sm:h-[613px] max-w-[1204px] mt-[3px] mx-auto md:px-5 relative w-full">
             {/* Background and text content */}
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-5 w-[99%]"
              style={{ backgroundImage: "url('images/img_group5.svg')" }}
            >
              {/* Text and button inside the banner */}
              <div className="flex flex-col md:gap-10 gap-[75px] justify-start mb-3 mt-[162px] w-[64%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[91px] items-start justify-start md:ml-[0] ml-[306px]">
                  <Text
                    className="md:text-5xl text-[100px] text-teal-900"
                    size="txtMerriweatherBlack100"
                  >
                    Take a seat
                  </Text>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-teal-900"
                    size="txtMerriweatherSansRomanLight32"
                  >
                    Agile workspaces made easy
                  </Text>
                </div>
                 {/* Button to navigate to the floorplan page */}
                <Button
                  className="common-pointer cursor-pointer min-w-[313px] mr-[417px] text-4xl sm:text-[32px] md:text-[34px] text-center"
                  onClick={() => navigate("/floorplan")}
                  shape="round"
                  color="teal_900"
                  size="sm"
                  variant="fill"
                >
                  My floorplan
                </Button>
              </div>
            </div>
            <Img
              className="absolute h-[349px] inset-y-[0] left-[0] my-auto object-cover w-[64%]"
              src="images/img_1080pfullhd.png"
              alt="1080pfullhd"
            />
          </div>
           {/* Section describing the DOTS system */}
          <div className="flex flex-col items-center justify-start max-w-[1080px] mt-[162px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-[55px] items-start justify-between w-full">
              <div className="flex flex-col items-start justify-start">
                 {/* Text explaining the DOTS system */}
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-teal-900"
                  size="txtMerriweatherLight48"
                >
                  How DOTS works
                </Text>
                <Text
                  className="leading-[45.00px] mt-[42px] text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl w-full"
                  size="txtMerriweatherSansRomanLight24"
                >
                  We use radar sensors and an intuitive display to let you know,
                  which tables in your office are free for you to work at. Now
                  you can spend your work day, doing the things that matter -
                  not hunting for a workspace.
                </Text>
                <Button
                  className="common-pointer cursor-pointer font-merriweathersans min-w-[300px] mt-[54px] text-2xl md:text-[22px] text-center sm:text-xl"
                  onClick={() => navigate("/workflow")}
                  shape="round"
                  color="teal_900"
                  size="xs"
                  variant="fill"
                >
                  Find out more
                </Button>
              </div>
              <Img
                className="h-[335px] md:mt-0 mt-[17px] w-[335px]"
                src="images/img_iconregel1.svg"
                alt="iconregelOne"
              />
            </div>
          </div>
          <div className="flex flex-col font-merriweather items-center justify-start mt-[65px] w-full">
            <div className="bg-gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-start p-7 sm:px-5 w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-teal-900"
                size="txtMerriweatherLight48"
              >
                Our products
              </Text>
              <Text
                className="sm:flex-1 leading-[45.00px] md:ml-[0] ml-[55px] md:mt-0 my-[47px] text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl w-[30%] sm:w-full"
                size="txtMerriweatherSansRomanLight24"
              >
                Whether you are just switching to an agile workspace concept or
                have had an open seating concept for years, we have a solution
                that suits your company’s needs.
              </Text>
              <div className="flex md:flex-1 flex-col font-merriweathersans gap-[55px] items-center justify-start ml-32 md:ml-[0] md:px-5 w-[26%] md:w-full">
                <Button
                  className="common-pointer cursor-pointer min-w-[300px] text-2xl md:text-[22px] text-center sm:text-xl"
                  onClick={() => navigate("/product")}
                  shape="round"
                  color="teal_900"
                  size="xs"
                  variant="fill"
                >
                  Discover DOTS
                </Button>
                <Button
                  className="cursor-pointer min-w-[300px] text-2xl md:text-[22px] text-center sm:text-xl"
                  shape="round"
                  color="red_400"
                  size="xs"
                  variant="fill"
                >
                  Get your test kit
                </Button>
              </div>
            </div>
            <div className="h-[352px] sm:h-[427px] md:h-[802px] max-w-[1080px] mt-[92px] mx-auto md:px-5 relative w-full">
              <Text
                className="absolute right-[16%] text-5xl sm:text-[38px] md:text-[44px] text-teal-900 top-[0]"
                size="txtMerriweatherLight48"
              >
                The team behind SiTY
              </Text>
              <div className="absolute bottom-[0] flex flex-col font-merriweathersans inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-[55px] items-start justify-between w-full">
                  <Img
                    className="h-[335px] w-[335px]"
                    src="images/img_iconteam1.svg"
                    alt="iconteamOne"
                  />
                  <div className="flex flex-col gap-[55px] items-start justify-start md:mt-0 mt-[85px]">
                    <Text
                      className="leading-[45.00px] text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl w-full"
                      size="txtMerriweatherSansRomanLight24"
                    >
                      We are a young, Erlangen based start-up, dedicated to
                      making your work day more productive and stress free.
                    </Text>
                    <div className="flex md:flex-col flex-row gap-[55px] items-center justify-start w-[95%] md:w-full">
                      <Button
                        className="common-pointer cursor-pointer min-w-[300px] text-2xl md:text-[22px] text-center sm:text-xl"
                        onClick={() => navigate("/aboutus")}
                        shape="round"
                        color="teal_900"
                        size="xs"
                        variant="fill"
                      >
                        About us
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[300px] text-2xl md:text-[22px] text-center sm:text-xl"
                        shape="round"
                        color="red_400_01"
                        size="xs"
                        variant="fill"
                        onClick={handleEmail}
                      >
                        Get in touch
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="common-pointer cursor-pointer font-light w-[100%] md:min-w-full mt-[110px] text-2xl md:text-[22px] text-center sm:text-xl"
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

export default HomePage;
