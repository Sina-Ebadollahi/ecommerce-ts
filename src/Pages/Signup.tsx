import { useSelector } from "react-redux";
import styled from "styled-components";


const SignupSection = styled.section`
min-height: 80vh;
min-width: 100vw;
    background-color: #f0ebeb;
    display: flex;
    align-items: center;
    justify-content: center;
`
const SignupContainer = styled.div`
overflow: hidden;
margin: auto;
    min-height: 50vh;
    min-width: 60vw;
    border-radius: 1rem;
    box-shadow: 0px 1px 3px black;
    /* display: flex; */

`
const FormWrapper = styled.div`
    width: 100%;
    height: 80%;
`
const Form = styled.form`
margin: auto;
  width: 80%;
  height: 80%;

`
const PublicLabel = styled.label`

`
const PublicSpanForLabel = styled.span`
  
`
const PublicInputForm = styled.input`

`
const SubmitButton = styled.button`
    all: none;
    width: 100%;
    border: none;

`
function checkLang(currentLang: string | undefined, engText: string, faText: string): string | undefined{
    switch(currentLang){
      case 'english':
        return engText;
      case 'persian':
        return faText;
        default:
          return undefined;
    }
  }
  interface reducers{
    themeReducer: any,
    authenticationReducer: any,
    cartReducer: any,
    languageReducer: any,
  }
export default function Signup() {
    const currentLang: string = useSelector((states: reducers) => states.languageReducer);
  return (
  <SignupSection>
      <SignupContainer>
        <FormWrapper>
          <Form>
            <PublicLabel>
              <PublicSpanForLabel>{checkLang(currentLang, 'Email: ', 'ایمیل : ')}</PublicSpanForLabel>
              <PublicInputForm type='email' />
            </PublicLabel>
            <PublicLabel>
            <PublicSpanForLabel>{checkLang(currentLang, 'UserName : ', 'نام کاربری : ')}</PublicSpanForLabel>
              <PublicInputForm type='text' />
            </PublicLabel>
            <PublicLabel>
            <PublicSpanForLabel>{checkLang(currentLang, 'Password : ', 'رمزعبور : ')}</PublicSpanForLabel>
              <PublicInputForm type='password' />
            </PublicLabel>
          </Form>
        </FormWrapper>
        <SubmitButton>{checkLang(currentLang, 'Submit', 'تایید')}</SubmitButton>
      </SignupContainer>
  </SignupSection>
  );
}
