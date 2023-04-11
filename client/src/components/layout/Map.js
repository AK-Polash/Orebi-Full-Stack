import React from "react";
import Accordion from "./Accordion";

const Map = () => {
  const accordionValues = [
    {
      heading: "Germany Office",
      content: {
        address: "575 Crescent Ave. Quakertown, PA 18951",
        phone: "+432 533 12 523",
        email: "info@domain.com",
        time: "Mon - Fri: 9am - 6pm",
      },
    },
    {
      heading: "Slovakia Office",
      content: {
        address: "575 Crescent Ave. Quakertown, PA 18951",
        phone: "+432 533 12 523",
        email: "info@domain.com",
        time: "Mon - Fri: 9am - 6pm",
      },
    },
    {
      heading: "Lithuania Office",
      content: {
        address: "575 Crescent Ave. Quakertown, PA 18951",
        phone: "+432 533 12 523",
        email: "info@domain.com",
        time: "Mon - Fri: 9am - 6pm",
      },
    },
  ];

  return (
    <div className="relative my-36 h-[570px] w-full">
      <iframe
        className="h-3/5 w-full md:h-full"
        title="contact page"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d124526.90246340263!2d90.2326478132373!3d24.004029210494615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1680830404757!5m2!1sen!2sbd"
        loading="lazy"
      />

      <Accordion
        className="static left-3 top-2/4 w-full md:absolute md:w-2/5 md:-translate-y-2/4 lg:w-[450px]"
        accordionValues={accordionValues}
      />
    </div>
  );
};

export default Map;
