import styled from 'styled-components';
import React from 'react';
import { faqs } from "../data";
import AccordionItem from "./AccordionItem";
import { useState } from "react";

export const Ulstyle = styled.ul`
  list-style: none;
  width: 600px;
  background-color: #9747ff;
  color: #fff;
  text-align: center;
  padding: 10px 20px;
  margin: auto;
`;

const Accordion = () => {
     const [clicked, setClicked] = useState('0');
     const handleToggle = (index) => {
       if (clicked === index) {
         return setClicked("0");
       }
       setClicked(index);
     };

  return (
    <Ulstyle>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          faq={faq}
          onToggle={() => handleToggle(index)}
          active={clicked === index}
        ></AccordionItem>
      ))}
    </Ulstyle>
  );
};



































// const accordionStyle=style.Accordion`
//  background:'#000';
//  color:'#fff';
//  width:300px;
// `


// const Accordion = (
//     {children,defaultExpanded,disabled,expanded,handleChange,}) => {
//     return (
//       <accordionStyle
//         defaultExpanded={defaultExpanded}
//         disabled={disabled}
//         expanded={expanded}
//         onChange={(expanded) => handleChange}
//       >
//         {children}
//       </accordionStyle>
//     );
// }
 
export default Accordion;