import React from "react";

// Importing useNavigate from react-router-dom for navigation between pages.
import { useNavigate } from "react-router-dom";

// Importing custom components from the components folder.
import { Button, Img, Text } from "components";
import Footer from "components/Footer";

// AboutUsPage component to display information about the organization.
const AboutUsPage = () => {
  const navigate = useNavigate();

  return (
    <>
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
            className="md:ml-[0] ml-[100px] mt-[142px] md:text-5xl text-[100px] text-teal-900"
            size="txtMerriweatherBlack100"
          >
            This is us
          </Text>
          <div className="flex flex-col items-start justify-start mt-[101px] w-full">
            <div className="bg-gray-100 flex flex-col font-merriweathersans items-center justify-start md:px-10 sm:px-5 px-[100px] w-full">
              <Text
                className="leading-[45.00px] text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl w-full"
                size="txtMerriweatherSansRomanLight24"
              >
                SiTY was founded in the scope of the Innovation Lab project at
                the Friedrich-Alexander- University in Erlangen. As the lab for
                Machine Learning and Data Analytics saw a need to coordinate
                their agile seating arrangement more efficiently, we created a
                system, that is so easy to use, you don’t realize it is actually
                there.
              </Text>
            </div>
            <div className="flex flex-row font-merriweathersans sm:gap-10 items-center justify-between md:ml-[0] ml-[390px] mt-9 md:px-5 w-[47%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[31%]">
                <Img
                  className="h-[180px] md:h-auto object-cover w-[180px]"
                  src="images/img_annabel.png"
                  alt="annabel"
                />
                <Text
                  className="leading-[45.00px] text-2xl md:text-[22px] text-center text-teal-900 sm:text-xl"
                  size="txtMerriweatherSansRomanLight24"
                >
                  <span className="text-teal-900 font-merriweathersans font-extrabold">
                    <>
                      Annabel
                      <br />
                    </>
                  </span>
                  <span className="text-teal-900 font-merriweathersans font-light">
                    CEO
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[31%]">
                <Img
                  className="h-[180px] md:h-auto object-cover w-[180px]"
                  src="images/img_divakar.png"
                  alt="divakar"
                />
                <Text
                  className="leading-[45.00px] text-2xl md:text-[22px] text-center text-teal-900 sm:text-xl"
                  size="txtMerriweatherSansRomanLight24"
                >
                  <span className="text-teal-900 font-merriweathersans font-extrabold">
                    <>
                      Divakar
                      <br />
                    </>
                  </span>
                  <span className="text-teal-900 font-merriweathersans font-light">
                    CTO
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-merriweathersans md:gap-10 items-center justify-between max-w-[1083px] mt-[33px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[269px] md:w-full">
                <Img
                  className="h-[180px] md:h-auto object-cover w-[180px]"
                  src="images/img_faheem.png"
                  alt="faheem"
                />
                <Text
                  className="leading-[45.00px] text-2xl md:text-[22px] text-center text-teal-900 sm:text-xl"
                  size="txtMerriweatherSansRomanLight24"
                >
                  <span className="text-teal-900 font-merriweathersans font-extrabold">
                    <>
                      Faheem Shah
                      <br />
                    </>
                  </span>
                  <span className="text-teal-900 font-merriweathersans font-light">
                    Client Support Manager
                  </span>
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[18%] md:w-full">
                <Img
                  className="h-[180px] md:h-auto object-cover w-[180px]"
                  src="images/img_laura.png"
                  alt="laura"
                />
                <Text
                  className="leading-[45.00px] text-2xl md:text-[22px] text-center text-teal-900 sm:text-xl"
                  size="txtMerriweatherSansRomanLight24"
                >
                  <span className="text-teal-900 font-merriweathersans font-extrabold">
                    <>
                      Laura
                      <br />
                    </>
                  </span>
                  <span className="text-teal-900 font-merriweathersans font-light">
                    CMO & UI Design
                  </span>
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[17%] md:w-full">
                <Img
                  className="h-[180px] md:h-auto object-cover w-[180px]"
                  src="images/img_khalil.png"
                  alt="khalil"
                />
                <Text
                  className="leading-[45.00px] text-2xl md:text-[22px] text-center text-teal-900 sm:text-xl"
                  size="txtMerriweatherSansRomanLight24"
                >
                  <span className="text-teal-900 font-merriweathersans font-extrabold">
                    <>
                      Khalil Umer
                      <br />
                    </>
                  </span>
                  <span className="text-teal-900 font-merriweathersans font-light">
                    COO
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row font-merriweathersans sm:gap-10 items-center justify-between md:ml-[0] ml-[312px] mt-[55px] md:px-5 w-[53%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[51%] sm:w-full">
                <Img
                  className="h-[180px] md:h-auto object-cover w-[180px]"
                  src="images/img_bilal.png"
                  alt="bilal"
                />
                <Text
                  className="leading-[45.00px] text-2xl md:text-[22px] text-center text-teal-900 sm:text-xl"
                  size="txtMerriweatherSansRomanLight24"
                >
                  <span className="text-teal-900 font-merriweathersans font-extrabold">
                    <>
                      Bilal Asghar
                      <br />
                    </>
                  </span>
                  <span className="text-teal-900 font-merriweathersans font-light">
                    Head of Software Engineering
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[27%] sm:w-full">
                <Img
                  className="h-[180px] md:h-auto object-cover w-[180px]"
                  src="images/img_govardhan.png"
                  alt="govardhan"
                />
                <Text
                  className="leading-[45.00px] text-2xl md:text-[22px] text-center text-teal-900 sm:text-xl"
                  size="txtMerriweatherSansRomanLight24"
                >
                  <span className="text-teal-900 font-merriweathersans font-extrabold">
                    <>
                      Govardhan
                      <br />
                    </>
                  </span>
                  <span className="text-teal-900 font-merriweathersans font-light">
                    CFO
                  </span>
                </Text>
              </div>
            </div>
            <Footer className="bg-gray-100 flex font-merriweathersans items-center justify-center mt-[103px] md:px-5 w-full" />
            <Button
              className="common-pointer cursor-pointer font-light font-merriweather w-full md:min-w-full text-2xl md:text-[22px] text-center sm:text-xl"
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

export default AboutUsPage;
