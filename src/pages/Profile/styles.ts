import styled from 'styled-components';
import { shade } from 'polished';

import SignInBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  > header {
    height: 144px;
    position: relative;
    background: #28262e;

    display: flex;
    align-content: center;

    div {
      width: 100%;
      margin: 0 auto;
      padding: 0 2rem;
      max-width: 1120px;

      svg {
        position: absolute;
        top: 50px;
        color: #999591;
        width: 24px;
        height: 24px;
      }
    }
  }

  /* display: flex;
  align-items: stretch; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -176px auto 0;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }

    input[name='old_password'] {
      margin-top: 24px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignInBackgroundImg}) no-repeat center;
  background-size: cover;
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  width: 186px;

  align-self: center;

  img {
    max-width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    background: #ff9000;
    height: 48px;
    width: 48px;
    cursor: pointer;

    border: 0;
    transition: background-color 0.2s;

    display: grid;
    place-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
