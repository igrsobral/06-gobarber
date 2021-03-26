import React, { ButtonHTMLAttributes } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? <CircularProgress /> : children}
  </Container>
);

export default Button;
