import React from "react";

import { Button, Text } from "components"; // Importing Button and Text components from a 'components' module
import { handleEmail } from "utils"; // Importing handleEmail function from a 'utils' module

// Footer component definition
const Footer = (props) => {
  return (
    // Fragment to return multiple elements without adding extra nodes to the DOM
    <>
      <footer className={props.className}>
        {/* Container for footer content with responsive layout and spacing */}
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-[89px] mr-[100px] my-14 w-[86%]">
          {/* Text component displaying a message */}
          <Text
            className="leading-[35.00px] text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl"
            size="txtMerriweatherSansRomanRegular24"
          >
            {/* Bold text for the first part of the message */}
            <span className="text-teal-900 font-merriweather font-black">
              <>
                Interested?
                <br />
              </>
            </span>
            {/* Regular-weight text for the main message */}
            <span className="text-teal-900 font-merriweathersans font-light">
              Contact us now to order your free test kit and get more
              information about our products and pricing!{" "}
            </span>
          </Text>
          {/* Button component to initiate contact */}
          <Button
            className="cursor-pointer font-merriweathersans min-w-[300px] md:mt-0 my-[22px] text-2xl md:text-[22px] text-center sm:text-xl"
            shape="round"
            color="red_400_01"
            size="xs"
            variant="fill"
            onClick={handleEmail} // Event handler for click events
          >
            Get in touch
          </Button>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {}; // Default props for the Footer component

export default Footer; // Exporting the Footer component
