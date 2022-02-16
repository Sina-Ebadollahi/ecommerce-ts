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
    cursor: pointer;
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
  },
  updateState: {
    setSignupData: React.Dispatch<React.SetStateAction<{
      email: string;
      password: string;
      userName: string;
      passwordConfirm: string;
      }>>,
      signupData: {
        email: string;
        password: string;
        userName: string;
        passwordConfirm: string;
    }
  },
  id: string;
}
const SignUpInputs = ({ Icon, text, color, type, passwordProp, updateState, id }:Signupinp):JSX.Element => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
    switch(id){
      case 'password':
        updateState.setSignupData({...updateState.signupData, password: e.target.value});
        return;
      case 'passwordConfirm':
        updateState.setSignupData({...updateState.signupData, passwordConfirm: e.target.value});
        return;
      case 'username':
        updateState.setSignupData({...updateState.signupData, userName: e.target.value});    
        return;
      case 'email':
        updateState.setSignupData({...updateState.signupData, email: e.target.value});              
        return;
      default: 
        return;  
      


    }
  }
  if(passwordProp.isPasswordInput){
    let { IsNotVisibleIcon, IsVisibleIcon } = passwordProp;
    return(
    <BaseContainer baseColor={color}>
      <BaseInput key={id} onChange={(e) => handleInputChange(e)} required maxLength={16} type={isPasswordVisible === true ? 'text' : 'password'} placeholder={text} />
      {!isPasswordVisible && <IsNotVisibleIcon onClick={() => setIsPasswordVisible(true)} style={{width: '2rem', height: '2rem',cursor: 'pointer'}} />}
      {isPasswordVisible && <IsVisibleIcon onClick={() => setIsPasswordVisible(false)} style={{width: '2rem', height: '2rem', cursor: 'pointer'}} />}
    </BaseContainer>
    )
  }else{
    return(
      <BaseContainer baseColor={color}>
        <BaseInput onChange={(e) => handleInputChange(e)} key={id} required maxLength={20} type={type} placeholder={text} />
        <Icon style={{width: '2rem', height: '2rem'}} />
      </BaseContainer>
    )
  }
}
const ErrorCase = styled.h1`
  color: red;
  font-size: 3rem;
  font-weight: 800;
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
    const [signupData, setSignupData] = useState<{email: string, password: string, userName: string, passwordConfirm: string}>({email: null, password: null, userName: null, passwordConfirm: null});
    const [errorInCase, setErrorInCase] = useState<string>();
    const formRef = useRef<HTMLFormElement | null>(null)
    console.log(signupData);
    
    const handleSignupSubmit = () => {
      
      // signup action
      if(signupData.password !== signupData.passwordConfirm){
        setErrorInCase('password are not equal');
        setSignupData({...signupData, passwordConfirm: null});
        setTimeout(() => {
          setErrorInCase(null)
        }, 4000);
        return;
      }else if(signupData.password === signupData.passwordConfirm && !signupData.password.includes('@' || '#' || '$' ||'0' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9')){
        setErrorInCase("password must contain numbers and '$' '#' '@' characteres");
        setTimeout(() => {
          setErrorInCase(null);
        }, 4000);
        return;
      }
      
      
      formRef.current.submit()
    }
    // const hanldeSubmitClick = () => {
    // }
  return (
  <SignupSection>
      <SignupContainer>
        <FormWrapper>
          <Form ref={formRef}>
            <SignUpInputs updateState={{setSignupData: setSignupData, signupData: signupData}} id='email'  passwordProp={{isPasswordInput: false, IsNotVisibleIcon: null, IsVisibleIcon: null}} type='email' Icon={EmailIcon} color={'red'} text="Email" key='1' />
            <SignUpInputs updateState={{setSignupData: setSignupData, signupData: signupData}} id='username' passwordProp={{isPasswordInput: false, IsNotVisibleIcon: null, IsVisibleIcon: null}} type='text' Icon={PersonIcon} color={'red'} text="Username" key='2' />
            <SignUpInputs updateState={{setSignupData: setSignupData, signupData: signupData}} id='password' passwordProp={{isPasswordInput: true, IsNotVisibleIcon: VisibilityIcon, IsVisibleIcon: VisibilityOffIcon}} type='password' Icon={VisibilityIcon} color={'red'} text="Password" key='3' />
            <SignUpInputs updateState={{setSignupData: setSignupData, signupData: signupData}} id='passwordConfirm' passwordProp={{isPasswordInput: true, IsNotVisibleIcon: VisibilityIcon, IsVisibleIcon: VisibilityOffIcon}} type='password' Icon={VisibilityOffIcon} color={'red'} text="Confirm Password" key='4' />
          </Form>
        </FormWrapper>
        {errorInCase && <ErrorCase>{errorInCase}</ErrorCase>}
        <SubmitButton  onClick={(e) => handleSignupSubmit()}>{checkLang(currentLang, 'Submit', 'تایید')}</SubmitButton>
      </SignupContainer>
  </SignupSection>
  );
}
