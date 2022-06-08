import { useRef } from "react";
import styled from "styled-components";

export const Buttonstyle = styled.button`
  background-color: #ffcd29;
  width: 100%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Listyle=styled.li`
text-align: left;
padding: 5px;
`
export const Answerwrapper = styled.div`
  height: 0;
  overflow: hidden;
  transition: height ease 0.2s;
`;
export const Answer=styled.p`
padding:0px 10px;
`

const AccordionItem = ({ faq, onToggle, active }) => {
  const { question, answer } = faq;
  const contentEl = useRef();
  

  return (
    <Listyle className={`${active ? "active" : ""}`}>
      <Buttonstyle onClick={onToggle}>
        {question}
        <span>
          {active ? (
           
              <i className="fa-solid fa-sort-up"></i>
            
          ) : (
           
              <i className="fa-solid fa-sort-down"></i>
        
          )}
        </span>
      </Buttonstyle>
      <Answerwrapper
        ref={contentEl}
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <Answer>{answer}</Answer>
      </Answerwrapper>
    </Listyle>
  );
};

export default AccordionItem;
