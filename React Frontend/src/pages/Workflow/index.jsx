import React from "react";

// Importing useNavigate for navigation between pages.
import { useNavigate } from "react-router-dom";

// Importing custom components for displaying buttons, images, lists, and text.
import { Button, Img, List, Text } from "components";

// WorkflowPage component for displaying information about the workplace workflow.
const WorkflowPage = () => {
  const navigate = useNavigate(); // Hook to enable navigation to different routes.

  return (
    <>
    {/* Main container for the WorkflowPage */}
      <div className="bg-white-A700 flex flex-col font-merriweathersans gap-[38px] items-center justify-end mx-auto pt-4 w-full">
        <div className="flex flex-col md:px-5 relative w-full gap-[5rem]">
          <div className="flex flex-col items-center justify-start mx-auto w-full">
            <div className="flex flex-col justify-start w-full">
              <div className="flex sm:flex-col flex-row font-merriweathersans sm:gap-10 items-center justify-between md:ml-[0] ml-[109px] w-[54%] md:w-full">
                {/* LOG IN text that navigates to the floorplan page */}
                <Text
                  className="common-pointer text-4xl sm:text-[32px] md:text-[34px] text-teal-900"
                  size="txtMerriweatherSansRomanLight36"
                  onClick={() => navigate("/floorplan")}
                >
                  LOG IN
                </Text>
                {/* Company logo that navigates to the home page */}
                <Img
                  className="common-pointer h-[152px] md:h-auto object-cover"
                  src="images/img_sitylogonobackground.png"
                  alt="sitylogonobackg"
                  onClick={() => navigate("/")}
                />
              </div>
               {/* Title text for the page */}
              <Text
                className="leading-[100.00px] md:ml-[0] ml-[100px] mt-40 md:text-5xl text-[100px] text-teal-900 w-[76%] sm:w-full"
                size="txtMerriweatherBlack100"
              >
                Find your workspace quicker
              </Text>
              {/* Description of the DOTS system */}
              <div className="bg-gray-100 flex flex-col font-merriweathersans items-center justify-end mt-[110px] p-7 sm:px-5 w-full">
                <div className="h-[135px] relative w-[89%] md:w-full">
                  <Text
                    className="leading-[45.00px] m-auto text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl w-full"
                    size="txtMerriweatherSansRomanLight24"
                  >
                    SiTY’s Desk Occupation Tracking System (DOTS) is keeping
                    track of all available workstations in your office
                    autonomously. A millimeter wave radar sensor, under each
                    table picks up on human presence, similar to a movement
                    triggered light switch - just much more precise!{" "}
                  </Text>
                  <Text
                    className="absolute h-full inset-[0] justify-center leading-[45.00px] m-auto text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl w-full"
                    size="txtMerriweatherSansRomanLight24"
                  >
                    SiTY’s Desk Occupation Tracking System (DOTS) is keeping
                    track of all available workstations in your office
                    autonomously. A millimeter wave radar sensor, under each
                    table picks up on human presence, similar to a movement
                    triggered light switch - just much more precise!
                  </Text>
                </div>
              </div>
            </div>
          </div>

           {/* Section describing the workflow steps */}
          <div className="flex md:flex-col flex-row gap-[1px] items-start justify-start   mx-auto w-[82%] z-[1]">
            <div className="flex flex-col items-center justify-start mb-[71px] w-[83%] md:w-full">
              <div className="flex flex-col gap-[45px] items-center justify-start w-full">
                <Text
                  className="leading-[45.00px] text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl"
                  size="txtMerriweatherSansRomanLight24"
                >
                  <span className="md:text-[44px] sm:text-[38px] text-teal-900 font-merriweather text-5xl font-black">
                    1{" "}
                  </span>
                  <span className="md:text-[44px] sm:text-[38px] text-teal-900 font-merriweather text-5xl font-light">
                    <>
                      Check out the floor plan!
                      <br />
                    </>
                  </span>
                  <span className="text-teal-900 font-merriweathersans font-light">
                    Whenever you need a workspace, have a look at the floor plan
                    to see which desks are currently available. The desks are
                    color coded for easy readability:
                  </span>
                </Text>
                <List
                  className="flex flex-col font-merriweather gap-[22px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <div className="bg-blue_gray-700 h-[71px] shadow-bs w-[16%]"></div>
                    <Text
                      className="sm:ml-[0] ml-[26px] sm:mt-0 mt-[17px] text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl"
                      size="txtMerriweatherBlack24"
                    >
                      AVAILABLE
                    </Text>
                    <div className="bg-red-400 h-[71px] sm:ml-[0] ml-[260px] shadow-bs w-[16%]"></div>
                    <Text
                      className="sm:ml-[0] ml-[26px] sm:mt-0 mt-[19px] text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl"
                      size="txtMerriweatherBlack24"
                    >
                      OCCUPIED
                    </Text>
                  </div>
                  <div className="flex md:flex-1 md:flex-col sm:flex-col flex-row md:gap-5 items-start justify-start w-full md:w-full">
                    <div className="bg-deep_orange-300 h-[71px] shadow-bs w-[16%]"></div>
                    <Text
                      className="md:ml-[0] ml-[27px] md:mt-0 mt-[19px] text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl"
                      size="txtMerriweatherBlack24"
                    >
                      RECENTLY VACATED
                    </Text>
                    <div className="bg-blue_gray-100_01 h-[71px] ml-36 md:ml-[0] shadow-bs w-[16%]"></div>
                    <Text
                      className="md:ml-[0] ml-[27px] md:mt-0 mt-[17px] text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl"
                      size="txtMerriweatherBlack24"
                    >
                      OFFLINE
                    </Text>
                  </div>
                </List>
              </div>
            </div>
            <Img
              className="h-[278px] md:mt-0 mt-[148px]"
              src="images/img_vector3.svg"
              alt="vectorThree"
            />
          </div>
        </div>
        <div className="flex md:flex-col flex-row font-merriweathersans gap-[2rem] items-start justify-center md:ml-[0]  md:px-5 w-[77%] md:w-full">
            <Img
              className="h-[226px] mb-[35px]"
              src="images/img_vector4.svg"
            alt="vectorFour"
            />
        <Text
          className="leading-[45.00px] md:ml-[0]  text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl "
          size="txtMerriweatherSansRomanLight24"
        >
          <span className="md:text-[44px] sm:text-[38px] text-teal-900 font-merriweather text-5xl font-black">
            2
          </span>
          <span className="md:text-[44px] sm:text-[38px] text-teal-900 font-merriweather text-5xl font-light">
            {" "}
            Take a seat!
          </span>
          <span className="text-teal-900 font-merriweathersans font-light ">
            <>
              {" "}
              <br />
              Sensor will register you as the occupant of its table, if you’re
              in <br /> its sensing area continuously for 2 minutes.
            </>
          </span>
        </Text>
        </div>
        <div className=" w-[72%] md:w-full z-[1]">
        
          <Text
            className="leading-[45.00px] mt-auto mx-auto text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl"
            size="txtMerriweatherSansRomanLight24"
          >
            <span className="md:text-[44px] sm:text-[38px] text-teal-900 font-merriweather text-5xl font-black">
              3{" "}
            </span>
            <span className="md:text-[44px] sm:text-[38px] text-teal-900 font-merriweather text-5xl font-light">
              Take a break!
            </span>
            <span className="text-teal-900 font-merriweather font-black">
              <>
                {" "}
                <br />
              </>
            </span>
            <span className="text-teal-900 font-merriweathersans font-light">
              <>
                Everyone needs a break sometimes.
                <br />
                As long as you return to your desk within 20 minutes, the table
                will remain<br/>
                reserved for you and is displayed as occupied on the
                floor plan.{" "}
              </>
            </span>
          </Text>
        </div>
        <div className="flex flex-col md:gap-10 gap-[110px] justify-center w-full">
          <div className="flex md:flex-col flex-row font-merriweathersans gap-[2rem] ml-auto items-start justify-center md:ml-[0]  md:px-5 w-[77%] md:w-full">
            <Img
              className="h-[226px] mb-[35px]"
              src="images/img_vector5.svg"
              alt="vectorFive"
            />
            <Text
              className="leading-[45.00px] md:mt-0 mt-[72px] text-2xl md:text-[22px] text-left text-teal-900 sm:text-xl"
              size="txtMerriweatherSansRomanLight24"
            >
              <span className="md:text-[44px] sm:text-[38px] text-teal-900 font-merriweather text-5xl font-black">
                4
              </span>
              <span className="md:text-[44px] sm:text-[38px] text-teal-900 font-merriweather text-5xl font-light">
                {" "}
                Have you left?
              </span>
              <span className="text-teal-900 font-merriweathersans font-light">
                <>
                  {" "}
                  <br />
                  After the 20 minute reservation period, the table will be
                  shown as ‘recently vacated’ for another 20 minutes, to reflect
                  which areas of the office are particularly busy today.
                </>
              </span>
            </Text>
          </div>
          <Button
            className="common-pointer cursor-pointer font-light font-merriweather min-w-[1280px] md:min-w-full text-2xl md:text-[22px] text-center sm:text-xl"
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
    </>
  );
};

export default WorkflowPage;
