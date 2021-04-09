import React from 'react';
import { FiPower } from 'react-icons/fi';
import { Container, Header, HeaderContent, Profile } from './styles';

import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="logo" />

          <Profile>
            <img src={user.avatar_url} alt="profile" />

            <div>
              <span>Bem vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button">
            <FiPower onClick={signOut} />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
