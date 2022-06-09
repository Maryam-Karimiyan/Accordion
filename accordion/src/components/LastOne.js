import styled from "styled-components";
import { faqs } from "../data";
import { useState } from "react";
export const StyledDetails = styled.details`
  background-color: ${({ detailbg }) => detailbg};
  padding: 20px;
  transition: all ease 2s;
`;
export const StyledP = styled.p`
  text-align: ${({ palign }) => palign};
  padding: 5px 30px;
  transition: all ease 2s;
`;
export const StyledSummary = styled.summary`
  background-color: ${({ summarybg }) => summarybg};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all ease 2s;
`;
export const StyledDiv = styled.div`
  width: 650px;
  text-align: center;
  margin: 20px auto;
  transition: all ease 2s;
`;

const LastOne = ({ detailbg, summarybg, palign }) => {
 const [clicked, setClicked] = useState("0");
 const handleToggle = (index) => {
   if (clicked === index) {
     return setClicked("0");
   }
   setClicked(index);
 };

  return (
    <StyledDiv>
      {faqs.map((item, index) => (
        <StyledDetails
      //   onToggle={(e)=>handleToggle(e)}
          detailbg={detailbg}
          key={index}
        >
          <StyledSummary onClick={()=>handleToggle(index)} summarybg={summarybg}>
            {item.question}
            {clicked===index ? (
              <i className="fa-solid fa-sort-up"></i>
            ) : (
              <i className="fa-solid fa-sort-down"></i>
            )}
          </StyledSummary>
          <StyledP palign={palign}>{item.answer}</StyledP>
        </StyledDetails>
      ))}
    </StyledDiv>
  );
};

export default LastOne;
