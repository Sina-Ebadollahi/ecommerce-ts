import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

// icons
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";
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
    min-width: 40vw;
    border-radius: 1rem;
    box-shadow: 0px 1px 3px black;
    /* display: flex; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const FormWrapper = styled.div`
margin: auto;
    min-width: 50vw;
    min-height: 40vh;
    `
const Form = styled.form`
margin: auto;
width: 100%;
height: 100%;
max-height: 50vh;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
`
const SubmitButton = styled.button`
    all: none;
    width: 60%;
    /* margin-bottom: 2rem; */
    justify-self: center;
    border-radius: 20rem;
    border: none;
    min-height: 10vh;
    background-color: #9de264;
    font-size: 3rem;
    color: black;
    font-weight: 800;
  @media only screen and (max-width: 792px) {
  /* padding: 2rem; */
  font-weight: 600;
  font-size: 1.5rem; 
  }
`
// Signup Inputs components
type baseColor = {
  baseColor: string
}
const BaseContainer = styled.div`
  flex: 1 1 20rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 30%;
  border-bottom: 2px solid black;
  &:hover{
    border-bottom: 2px solid ${(prop: baseColor) => prop.baseColor};
  }
`
const BaseInput = styled.input`
  all: unset;
  text-align: center;
  font-size: 1.7rem;
  font-weight: 700;
`
type Signupinp = {
  Icon: any,
  text: string,
  color: string,
  type: string,
  passwordProp: {
    isPasswordInput: boolean,
    IsVisibleIcon: any,
    IsNotVisibleIcon: any,
  }
}
const SignUpInputs = ({ Icon, text, color, type, passwordProp }:Signupinp):JSX.Element => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  if(passwordProp.isPasswordInput){
    let { IsNotVisibleIcon, IsVisibleIcon } = passwordProp;
    return(
    <BaseContainer baseColor={color}>
      <BaseInput required maxLength={16} type={isPasswordVisible === true ? 'text' : 'password'} placeholder={text} />
      {!isPasswordVisible && <IsNotVisibleIcon onClick={() => setIsPasswordVisible(true)} style={{width: '2rem', height: '2rem'}} />}
      {isPasswordVisible && <IsVisibleIcon onClick={() => setIsPasswordVisible(false)} style={{width: '2rem', height: '2rem'}} />}
    </BaseContainer>
    )
  }else{
    return(
      <BaseContainer baseColor={color}>
        <BaseInput required maxLength={20} type={type} placeholder={text} />
        <Icon style={{width: '2rem', height: '2rem'}} />
      </BaseContainer>
    )
  }
}
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
    const [signupData, setSignupData] = useState<{email: string, password: string, userName: string}>();
    const formRef = useRef<HTMLFormElement | null>(null)
    const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // signup action
      
    }
    const hanldeSubmitClick = () => {
      formRef.current.submit()
    }
  return (
  <SignupSection>
      <SignupContainer>
        <FormWrapper>
          <Form onSubmit={(e) => handleSignupSubmit(e)} ref={formRef}>
            {/* <PublicLabel>
              <PublicSpanForLabel>{checkLang(currentLang, 'Email: ', 'ایمیل : ')}</PublicSpanForLabel>
              <PublicInputForm type='email' onChange={(e) => setSignupData({...signupData, email: e.target.value})} />
            </PublicLabel>
            <PublicLabel>
            <PublicSpanForLabel>{checkLang(currentLang, 'UserName : ', 'نام کاربری : ')}</PublicSpanForLabel>
              <PublicInputForm type='text' onChange={(e) => setSignupData({...signupData, userName: e.target.value})} />
            </PublicLabel>
            <PublicLabel>
            <PublicSpanForLabel>{checkLang(currentLang, 'Password : ', 'رمزعبور : ')}</PublicSpanForLabel>
              <PublicInputForm type='password' onChange={(e) => setSignupData({...signupData, password: e.target.value})} />
            </PublicLabel> */}
            <SignUpInputs passwordProp={{isPasswordInput: false, IsNotVisibleIcon: null, IsVisibleIcon: null}} type='email' Icon={EmailIcon} color={'red'} text="Email" key='1' />
            <SignUpInputs passwordProp={{isPasswordInput: false, IsNotVisibleIcon: null, IsVisibleIcon: null}} type='text' Icon={PersonIcon} color={'red'} text="Username" key='2' />
            <SignUpInputs passwordProp={{isPasswordInput: true, IsNotVisibleIcon: VisibilityIcon, IsVisibleIcon: VisibilityOffIcon}} type='password' Icon={VisibilityIcon} color={'red'} text="Password" key='3' />
            <SignUpInputs passwordProp={{isPasswordInput: true, IsNotVisibleIcon: VisibilityIcon, IsVisibleIcon: VisibilityOffIcon}} type='password' Icon={VisibilityOffIcon} color={'red'} text="Confirm Password" key='4' />
          </Form>
        </FormWrapper>
        <SubmitButton  onClick={(e) => hanldeSubmitClick()}>{checkLang(currentLang, 'Submit', 'تایید')}</SubmitButton>
      </SignupContainer>
  </SignupSection>
  );
}
