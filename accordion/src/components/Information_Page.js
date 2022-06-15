import styled from "styled-components";
 export const StyledLI=styled.li`
    text-align: left;
    margin-left: 50px;

    &:nth-child(8),:nth-child(11){
        margin-top: 70px;
    }
    

 `

export const StyledUl=styled.ul`
    margin: 50px auto;
`









const Information_Page = ({ApsMember}) => {
    return (
      <StyledUl>
        <StyledLI>
          <p>Full Name : {ApsMember.Fullname}</p>
        </StyledLI>
        <StyledLI>
          <p>Email : {ApsMember.Email}</p>
        </StyledLI>
        <StyledLI>
          <p>Mobile Number : {ApsMember.Mobile}</p>
        </StyledLI>
        <StyledLI>
          <p>Telegram ID : {ApsMember.Telegram_Id}</p>
        </StyledLI>
        <StyledLI>
          <p>Birth Date : {ApsMember.BirthDate}</p>
        </StyledLI>
        <StyledLI>
          <p>Skills / Talents : {ApsMember.Skills}</p>
        </StyledLI>
        <StyledLI>
          <p>Description : {ApsMember.Description}</p>
        </StyledLI>
        <StyledLI>
          <p>Language score : {ApsMember.Language_score}</p>
        </StyledLI>
        <StyledLI>
          <p>Teamwork score : {ApsMember.Teamwork_score}</p>
        </StyledLI>
        <StyledLI>
          <p>Overal score : {ApsMember.Overal_score}</p>
        </StyledLI>
        <StyledLI>
          <p>Interviewer Name : {ApsMember.Interviewer}</p>
        </StyledLI>
        <StyledLI>
          <p>Date of Interview : {ApsMember.InterviewDate}</p>
        </StyledLI>
      </StyledUl>
    );
}
 
export default Information_Page;