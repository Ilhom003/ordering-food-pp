import React, { useRef } from 'react'
import { Container, Wrapper, Main, MainWrapper, MainTitle, LoginForm, Row, FormWrapper, Form, FormInput, Input, Link } from './style'
import Footer from '../Footer';
import Button from '../Generics/Button';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const fullnameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  console.log(emailRef);
  const navigate = useNavigate()


  const Signup = () => {
      localStorage.setItem('regirter', JSON.stringify({fullname:fullnameRef.current.value, email: emailRef.current.value, password: passwordRef.current.value }))
      navigate('/login')
    }
  return (

    <Container>
      <Wrapper>
        <MainWrapper>
          <Main>
            <MainTitle>
              Sign up
            </MainTitle>
          </Main>
        </MainWrapper>
      </Wrapper>
      <LoginForm>
        <Row>
          <FormWrapper>
            <Form>
              <FormInput>
                <Input ref={fullnameRef} type='text' placeholder='Full name' required />
              </FormInput>
              <FormInput>
                <Input ref={emailRef} type='email' placeholder='Email' required />
              </FormInput>
              <FormInput>
                <Input ref={passwordRef} type='password' placeholder='Password' required />
              </FormInput>
              <Button onClick={Signup}>Register</Button>
            </Form>
            <Link onClick={()=>navigate('/login')}>Already have an account? Login</Link>
          </FormWrapper>
        </Row>
      </LoginForm>
      <Footer />
    </Container>
  )
}

export default Register