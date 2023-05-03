import React, { useRef } from 'react'
import { Container, Wrapper, Main, MainWrapper, MainTitle, LoginForm, Row, FormWrapper, Form, FormInput, Input, Link } from './style'
import Footer from '../Footer';
import Button from '../Generics/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()


  const SignIn = () => {
    // if (emailRef.current.value === JSON.parse(localStorage.getItem('register')).email, passwordRef.current.value === JSON.parse(localStorage.getItem('register')).password) {
      localStorage.setItem('login', JSON.stringify({ email: emailRef.current.value, password: passwordRef.current.value }))
      navigate('/')
    // }
  }
  return (

    <Container>
      <Wrapper>
        <MainWrapper>
          <Main>
            <MainTitle>
              Login
            </MainTitle>
          </Main>
        </MainWrapper>
      </Wrapper>
      <LoginForm>
        <Row>
          <FormWrapper>
            <Form>
              <FormInput>
                <Input ref={emailRef} type='email' placeholder='Email' required />
              </FormInput>
              <FormInput>
                <Input ref={passwordRef} type='password' placeholder='Password' required />
              </FormInput>
              <Button onClick={SignIn}>Login</Button>
            </Form>
            <Link onClick={() => navigate('/register')}>Don't have an account? Create an account</Link>
          </FormWrapper>
        </Row>
      </LoginForm>
      <Footer />
    </Container>
  )
}

export default Login
