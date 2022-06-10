import styled from "styled-components";

export const SForm = styled.form`
  width: 500px;
  text-align: center;
  margin: auto;
  background: ${({ theme }) => theme.bgform};
  border-radius: ${({ theme }) => theme.borderRadiosform};
  padding: ${({ theme }) => theme.paddingform};
`;
export const SFromTitle=styled.span`
    font-size: 24px;
    font-weight: 600;
`
export const SFormControl = styled.div`
  :first-of-type {
    margin-top: ${({ theme }) => theme.mdspaing};
  }
  :not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.smspacing};
  }
`;
export const SLable = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-left: 4px;
  margin-bottom: calc(${({ theme }) => theme.smspacing/4});
`;
export const SInput = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.borderinput};
  width: 100%;
  padding: ${({ theme }) => theme.smspacing};
  font-size: 14px;
  border-radius: ${({ theme }) => theme.borderRadiosform};
`;
export const SButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.bgbutton};
  color: ${({ theme }) => theme.colorbtn};
  padding: ${({ theme }) => theme.smspacing};
  display: flex;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadiosform};
  margin-top: ${({ theme }) => theme.mdspaing};
  cursor: pointer;
`;



const Form = ({children, action,method,theme,...rest }) => {
    const handleSubmit=()=>{
        console.log('Submitted')
    }
  return (
    <SForm action={action.get} theme={theme && theme} onSubmit={handleSubmit && handleSubmit} {...rest}>
      
      {children && children}
      
    </SForm>
  );
};
 
export default Form;