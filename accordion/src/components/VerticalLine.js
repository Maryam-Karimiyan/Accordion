import styled from "styled-components";

export const StyleSection = styled.section`
  height: 500px;
  width: 8px;
  /* background: linear-gradient(to top, #fff 2%, #ff502f 50%, #fff 95%); */

  background: linear-gradient(
    180deg,
    rgba(36, 19, 0, 0.9223039557619923) 0%,
    rgba(230, 87, 11, 1) 50%,
    rgba(36, 19, 0, 0.9082983535210959) 100%
  );
  border-radius: 40%;
  /* padding: 0px; */
  text-align: right;
  margin: 20px auto;
`;

const VerticalLine = () => {
    return ( 
        <StyleSection>

        </StyleSection>

     );
}
 
export default VerticalLine;