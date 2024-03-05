import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const ImprintPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto p-4 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1091px] mb-[51px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-col flex-row font-merriweathersans sm:gap-10 items-center justify-between md:ml-[0] ml-[9px] w-[63%] md:w-full">
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
            className="mt-[154px] md:text-5xl text-[100px] text-teal-900"
            size="txtMerriweatherBlack100"
          >
            Imprint
          </Text>
          <Text
            className="leading-[45.00px] md:ml-[0] ml-[11px] mt-16 text-2xl md:text-[22px] text-black-900 text-justify sm:text-xl"
            size="txtMerriweatherSansRomanLight24Black900"
          >
            <span className="text-teal-900 font-merriweather font-black">
              <>
                SiTY <br />
              </>
            </span>
            <span className="text-teal-900 font-merriweathersans font-light">
              <>
                Carl-Thiersch-Straße 2b
                <br />
                91052 Erlangen
                <br />
                Germany
                <br />
                <br />
                Managing directors authorised to represent the company:
                <br />
                Annabel Ruf
                <br />
                Divakar Mankalele
                <br />
                Khalil Umer Acharath <br />
                <br />
                Contact:
                <br />
                E-mail: sitymadlab@gmail.com
                <br />
                <br />
                Disclaimer:
                <br />
                SiTY is an academic project by the
                Friedrich-Alexander-University Erlangen-Nürnberg,
                <br />
                and does not sell any services or products.
              </>
            </span>
          </Text>
        </div>
      </div>
    </>
  );
};

export default ImprintPage;
