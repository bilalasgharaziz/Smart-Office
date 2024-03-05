import React from "react";

// Importing useNavigate from react-router-dom for navigation between pages.
import { useNavigate } from "react-router-dom";

// Importing custom components for use in the page.
import { Button, Img, List, Text } from "components";

// AccountforPitchPage component to display account information and pitch-related content.
const AccountforPitchPage = () => {
  const navigate = useNavigate(); // Hook for navigation.

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-merriweathersans items-center justify-end mx-auto pt-4 w-full">
        <div className="flex flex-col justify-start w-full">
          {/* Header section with LOG OUT text and company logo */}
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[109px] md:px-5 w-[54%] md:w-full">
             {/* LOG OUT text that navigates to the home page */}
            <Text
              className="common-pointer text-4xl sm:text-[32px] md:text-[34px] text-teal-900"
              size="txtMerriweatherSansRomanLight36"
              onClick={() => navigate("/")}
            >
              LOG OUT
            </Text>
            {/* Company logo that also navigates to the home page */}
            <Img
              className="common-pointer h-[152px] md:h-auto object-cover"
              src="images/img_sitylogonobackground.png"
              alt="sitylogonobackg"
              onClick={() => navigate("/")}
              //  Main content section 
            />
          </div>
          <div className="flex flex-col font-merriweather items-start justify-start w-full">
            <div className="h-[1126px] md:px-5 relative w-full">
              <Img
                className="h-[758px] mb-[-0.57px] mx-auto object-cover w-[85%] z-[1]"
                src="images/img_pitchfloorplan.png"
                alt="pitchfloorplan"
                // Description section for desk statuses 
              />
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[368px] items-center justify-start mt-auto mx-auto p-[30px] sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group9.svg')" }}
              >
                 {/* Text explaining the desk status indications  */}
                <div className="flex flex-col items-center justify-start mb-[18px] w-[89%] md:w-full">
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <Text
                      className="leading-[45.00px] text-5xl sm:text-[38px] md:text-[44px] text-justify text-teal-900"
                      size="txtMerriweatherBlack48"
                    >
                       {/* ... Text content ... */}
                      <span className="text-teal-900 font-merriweather font-light">
                        <>
                          What’s what
                          <br />
                        </>
                      </span>
                      <span className="md:text-[22px] sm:text-xl text-teal-900 font-merriweathersans text-2xl font-light">
                        This is how you know, which desk is free for you to take
                        a seat at:
                      </span>
                    </Text>
                    
                    <List
                      className="flex flex-col gap-[22px] items-center w-[97%]"
                      orientation="vertical"

                        // List items representing different desk statuses
                    >
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <div className="bg-blue_gray-700 h-[71px] shadow-bs w-[17%]"></div>
                        <Text
                          className="sm:ml-[0] ml-[33px] sm:mt-0 mt-[17px] text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl"
                          size="txtMerriweatherBlack24"
                        >
                          AVAILABLE
                        </Text>
                        <div className="bg-red-400 h-[71px] sm:ml-[0] ml-[366px] shadow-bs w-[17%]"></div>
                        <Text
                          className="sm:ml-[0] ml-[34px] sm:mt-0 mt-[19px] text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl"
                          size="txtMerriweatherBlack24"
                        >
                          OCCUPIED
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                        <div className="bg-deep_orange-300 h-[71px] shadow-bs w-[17%]"></div>
                        <Text
                          className="md:ml-[0] ml-[35px] md:mt-0 mt-[19px] text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl"
                          size="txtMerriweatherBlack24"
                        >
                          RECENTLY VACATED
                        </Text>
                        <div className="bg-blue_gray-100_01 h-[71px] md:ml-[0] ml-[250px] shadow-bs w-[17%]"></div>
                        <Text
                          className="md:ml-[0] ml-[35px] md:mt-0 mt-[17px] text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl"
                          size="txtMerriweatherBlack24"
                        >
                          OFFLINE
                        </Text>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[100px] mt-[105px] text-5xl sm:text-[38px] md:text-[44px] text-justify text-teal-900"
              size="txtMerriweatherLight48"
            >
              This week in your office
            </Text>
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between max-w-[1133px] mt-[43px] mx-auto md:px-5 w-full">
              <Text
                className="leading-[35.00px] sm:mt-0 mt-[153px] text-2xl md:text-[22px] text-black-900 text-justify sm:text-xl"
                size="txtMerriweatherBlack24Black900"
              >
                <span className="text-teal-900 font-merriweathersans font-light">
                  <>
                    Thursday, 18th January 2024
                    <br />
                  </>
                </span>
                <span className="text-teal-900 font-merriweather font-black">
                  Occupancy rate:{" "}
                </span>
                <span className="text-teal-900 font-merriweathersans font-light">
                  <>
                    67%
                    <br />
                  </>
                </span>
                <span className="text-teal-900 font-merriweather font-black">
                  Average desk switches:{" "}
                </span>
                <span className="text-teal-900 font-merriweathersans font-light">
                  <>
                    46
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-merriweathersans font-light">
                  <>
                    <br />
                    <br />
                  </>
                </span>
                <span className="text-teal-900 font-merriweathersans font-light">
                  <>
                    Weekly Average
                    <br />
                  </>
                </span>
                <span className="text-teal-900 font-merriweather font-black">
                  Occupancy rate:{" "}
                </span>
                <span className="text-teal-900 font-merriweathersans font-light">
                  <>
                    85%
                    <br />
                  </>
                </span>
                <span className="text-teal-900 font-merriweather font-black">
                  Average desk switches:{" "}
                </span>
                <span className="text-teal-900 font-merriweathersans font-light">
                  89
                </span>
              </Text>
              <Img
                className="h-[667px] md:h-auto object-cover"
                src="images/img_data2.png"
                alt="dataTwo"
              />
            </div>
            <Button
              className="common-pointer cursor-pointer font-light min-w-[1280px] md:min-w-full mt-[46px] text-2xl md:text-[22px] text-center sm:text-xl"
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

export default AccountforPitchPage;
