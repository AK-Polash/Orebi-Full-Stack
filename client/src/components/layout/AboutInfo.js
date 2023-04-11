import React, { useState } from "react";

const AboutInfo = ({ className, title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 140;
  const truncatedText = content.slice(0, maxLength);

  return (
    <div className={className}>
      <h5 className="pb-2 font-dm text-2xl font-bold text-primary">{title}</h5>

      {isExpanded ? (
        <p className="font-dm text-base font-normal text-secondary">
          {content}
        </p>
      ) : (
        <p className="font-dm text-base font-normal text-secondary">
          {truncatedText + " "}
          {content.length > maxLength && (
            <button
              className="text-blue-400 duration-100 hover:text-blue-500"
              onClick={() => setIsExpanded(true)}
            >
              show more...
            </button>
          )}
        </p>
      )}
    </div>
  );
};

export default AboutInfo;
