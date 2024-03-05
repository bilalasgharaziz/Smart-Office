import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, List, Text } from "components"; // Importing custom components
import axios from "axios";

// Static data representing desks with their positions and statuses
// Each desk has an id, status, and CSS top/left properties
const desks = [
  {
    id: 1,
    status: 0,
    top: "19.5%",
    left: "22.25%",
  },
  {
    id: 2,
    status: 1,
    top: "19.5%",
    left: "23.95%",
  },
  {
    id: 3,
    status: 0,
    top: "26.96%",
    left: "23.09%",
  },

  {
    id: 4,
    status: 1,
    top: "19.5%",
    left: "34.80%",
  },
  {
    id: 5,
    status: 0,
    top: "19.5%",
    left: "36.5%",
  },
  {
    id: 6,
    status: 1,
    top: "26.96%",
    left: "35.65%",
  },

  {
    id: 7,
    status: 1,
    top: "19.5%",
    left: "47.5%",
  },
  {
    id: 8,
    status: 0,
    top: "19.5%",
    left: "49.2%",
  },
  {
    id: 9,
    status: 1,
    top: "26.96%",
    left: "48.4%",
  },
  {
    id: 10,
    status: 1,
    top: "20.5%",
    left: "61.9%",
  },
  {
    id: 11,
    status: 0,
    top: "20.5%",
    left: "63.6%",
  },
  {
    id: 12,
    status: 1,
    top: "27.7%",
    left: "62.8%",
  },
  {
    id: 13,
    status: 1,
    top: "18.5%",
    left: "89.2%",
  },
  {
    id: 14,
    status: 0,
    top: "18.5%",
    left: "90.9%",
  },
  {
    id: 15,
    status: 1,
    top: "30.5%",
    left: "89.2%",
  },
  {
    id: 16,
    status: 1,
    top: "30.5%",
    left: "90.9%",
  },
  {
    id: 17,
    status: 1,
    top: "46.8%",
    left: "92.5%",
  },
  {
    id: 18,
    status: 0,
    top: "49.8%",
    left: "92.5%",
  },
  {
    id: 19,
    status: 1,
    top: "65.5%",
    left: "91.6%",
  },
  {
    id: 20,
    status: 1,
    top: "69.7%",
    left: "76.35%",
  },
  {
    id: 21,
    status: 0,
    top: "77.5%",
    left: "75.53%",
  },
  {
    id: 22,
    status: 1,
    top: "77.5%",
    left: "77.24%",
  },
  {
    id: 23,
    status: 1,
    top: "61.9%",
    left: "60.5%",
  },
  {
    id: 24,
    status: 1,
    top: "64.92%",
    left: "60.5%",
  },
  {
    id: 25,
    status: 0,
    top: "77.5%",
    left: "63.64%",
  },
  {
    id: 26,
    status: 1,
    top: "77.5%",
    left: "65.35%",
  },
  {
    id: 27,
    status: 1,
    top: "69.75%",
    left: "35.65%",
  },
  {
    id: 28,
    status: 0,
    top: "77.5%",
    left: "34.75%",
  },
  {
    id: 29,
    status: 1,
    top: "77.5%",
    left: "36.5%",
  },
  {
    id: 30,
    status: 1,
    top: "67.75%",
    left: "21.07%",
  },
  {
    id: 31,
    status: 0,
    top: "67.75%",
    left: "22.75%",
  },
  {
    id: 32,
    status: 1,
    top: "75.2%",
    left: "21.95%",
  },
  {
    id: 33,
    status: 1,
    top: "55.9%",
    left: "6.0%",
  },
  {
    id: 34,
    status: 1,
    top: "58.85%",
    left: "6.0%",
  },
  {
    id: 35,
    status: 0,
    top: "77.5%",
    left: "7.75%",
  },
  {
    id: 36,
    status: 1,
    top: "77.5%",
    left: "9.40%",
  },
  // ... other desks with their respective styles
];

const FloorPlanPage = () => {
  const [sensorsData, setSensorsData] = useState({}); // State to store sensor data
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Function to fetch sensor data
    const getData = async () => {
      const response = await axios.get("http://131.188.45.27/Sensors");
      if (response.data) {
        setSensorsData(response.data); // Update sensor data in state
      }
    };

    getData(); // Initial data fetch
    const intervalId = setInterval(getData, 5000); // Set interval for continuous data fetching

    // Cleanup function to clear interval
    return () => clearInterval(intervalId);
  }, []);

  // Function to determine the CSS class for a desk based on its sensor data
  const getDeskClass = (sensorInfo) => {
    if (sensorInfo) {
      if (sensorInfo.available === 1) {
        return "available";
      } else if (sensorInfo.recently_vacated === 1) {
        return "recently-vacated";
      } else if (sensorInfo.unavailable === 1) {
        return "unavailable";
      } else {
        return "empty";
      }
    }
    return "empty";
  };
  
  return (
    <>
    {/* Main container for the page */}
      <div className="bg-white-A700 flex flex-col items-center justify-end mx-auto pt-4 w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="font-merriweathersans h-[1279px] sm:h-[1556px] md:h-[831px] md:px-5 relative w-[100%] md:w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-[100%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[52rem] justify-start w-[100%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[109px] w-[54%] md:w-full">
                  <Text
                    className="common-pointer text-4xl sm:text-[32px] md:text-[34px] text-teal-900"
                    size="txtMerriweatherSansRomanLight36"
                    onClick={() => navigate("/")}
                  >
                    LOG OUT
                  </Text>
                  <Img
                    className="common-pointer h-[152px] md:h-auto object-cover"
                    src="images/img_sitylogonobackground.png"
                    alt="sitylogonobackg"
                    onClick={() => navigate("/")}
                  />
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col font-merriweather h-[368px] items-center justify-start p-[30px] sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group9.svg')" }}
                >
                  <div className="flex flex-col items-center justify-start mb-[18px] w-[89%] md:w-full">
                    <div className="flex flex-col gap-6 items-center justify-start w-full">
                      <Text
                        className="leading-[45.00px] text-5xl sm:text-[38px] md:text-[44px] text-justify text-teal-900"
                        size="txtMerriweatherBlack48"
                      >
                        <span className="text-teal-900 font-merriweather font-light">
                          <>
                            What’s what
                            <br />
                          </>
                        </span>
                        <span className="md:text-[22px] sm:text-xl text-teal-900 font-merriweathersans text-2xl font-light">
                          This is how you know, which desk is free for you to
                          take a seat at:
                        </span>
                      </Text>
                      <List
                        className="flex flex-col gap-[22px] items-center w-[97%]"
                        orientation="vertical"
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
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[100%] md:w-full">
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
            </div>

            <div className="absolute h-[831px] inset-x-[0] mx-auto top-[7%] w-[93%] md:w-full">
              {/* Main content area */}
              <div className="floorplan-container">
                {desks.map((desk) => {
                  const sensorKey = `ESP${desk.id}`;
                  const sensorInfo = sensorsData[sensorKey]; // [status, time]

                  return (
                    <div
                      key={desk.id}
                      className="desk-container"
                      style={{
                        position: "absolute",
                        top: desk.top,
                        left: desk.left,
                      }}
                    >
                      <div
                        id={`desk-${desk.id}`}
                        className={`desk-icon ${getDeskClass(sensorInfo)}`}
                      >
                        {/* Desk Icon Content Here */}
                      </div>
                    </div>
                  );
                })}
              </div>
             
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[100px] mt-[105px] text-5xl sm:text-[38px] md:text-[44px] text-justify text-teal-900"
            size="txtMerriweatherLight48"
          >
            This week in your office
          </Text>
          <div className="flex sm:flex-col flex-row font-merriweather md:gap-10 items-start justify-between max-w-[88%] mt-[43px] mx-auto md:px-5 w-full">
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
            className="common-pointer cursor-pointer font-light font-merriweather w-[100%] md:min-w-full mt-[46px] text-2xl md:text-[22px] text-center sm:text-xl"
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

export default FloorPlanPage;
