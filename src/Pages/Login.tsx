// hooks
import { useState } from "react";
// styled components
import styled from "styled-components";
// Icons
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const LoginSection = styled.section`
    min-height: 70vh;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
const LoginContainer = styled.div`
  min-width: 60vh;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  box-shadow: 0px 2px 3px rgba(0,0,0,0.6);
  background-color: #f1eaea;
`
const LoginForm = styled.form`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SubmitButton = styled.button`
  flex: 1;
  width: 60%;
  height: 50%;
  border-radius: 13px;
  background-color: #55e479;
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 1rem;
  cursor: pointer;
`
const ForgetContainer = styled.div`
width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`
type lang = {
  cl: string;
}
const ForgetHeader = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: blue;
  text-align: ${(prop: lang) => prop.cl === 'persian' && 'right'};
`
// Input container
const InputWrapper = styled.div`
  flex: 1;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Input = styled.input`
  all: unset;
  width: 100%;
`
type InputContainerTypes = {
  Icon?: any;
  text: string;
  passwordProp?: {
    VisibleIcon: any;
    NotVisibleIcon: any;
  };
  setInputData: React.Dispatch<React.SetStateAction<{
    pass: string;
    userNameOrEmail: string;
  }>>
  inputData: {
    pass: string;
    userNameOrEmail: string;
  }
}
const InputContainer = ({Icon, text, passwordProp, setInputData, inputData }: InputContainerTypes):JSX.Element =>{
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  if(text === 'Password'){
    let { NotVisibleIcon, VisibleIcon } = passwordProp;
    return(
      <InputWrapper>
        <Input type={isVisiblePass ? 'text' : 'password'} onChange={(e) => setInputData({pass: e.target.value, userNameOrEmail: inputData.userNameOrEmail})} placeholder={text} />
        {/* <Icon style={{width: '2rem', height: '2rem'}} /> */}
        {!isVisiblePass && <VisibleIcon style={{width: '2rem', height: '2rem', cursor: 'pointer'}} onClick={() => setIsVisiblePass(true)} />}
        {isVisiblePass && <NotVisibleIcon style={{width: '2rem', height: '2rem', cursor: 'pointer'}} onClick={() => setIsVisiblePass(false)} />}
      </InputWrapper>
    )
  }else if(text === 'Username or Email'){
    return(
      <InputWrapper>
        <Input onChange={(e) => setInputData({userNameOrEmail: e.target.value, pass: inputData.pass})} placeholder={text} />
        <Icon style={{width: '2rem', height: '2rem'}} />
      </InputWrapper>
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
export default function Login() {
  const [inputData, setInputData] = useState<{pass: string, userNameOrEmail: string}>({pass: null, userNameOrEmail: null});
  const currentLang = useSelector((state: reducers) => state.languageReducer);
  return (
    <LoginSection>
        <LoginContainer>
          <LoginForm>
            <InputContainer inputData={inputData}  setInputData={setInputData} text='Username or Email' Icon={PersonIcon} />
            <InputContainer inputData={inputData} passwordProp={{NotVisibleIcon: VisibilityOffIcon, VisibleIcon: VisibilityIcon}} setInputData={setInputData} text='Password' />
          </LoginForm>
          <SubmitButton>{checkLang(currentLang, 'Submit', 'تایید')}</SubmitButton>
          <ForgetContainer>
            <ForgetHeader cl={currentLang}><Link to='/'>{checkLang(currentLang, 'Forgot Password?', 'فراموشی رمز عبور؟')}</Link></ForgetHeader>
            <ForgetHeader cl={currentLang}><Link to='/'>{checkLang(currentLang, 'Create account', 'ایجاد حساب')}</Link></ForgetHeader>
          </ForgetContainer>
        </LoginContainer>
    </LoginSection>
  )
}
