import { Navigate } from 'react-router-dom';
import { getCookie } from '../../utils/utils';
import { FC, ReactNode } from 'react';

export const ProtectedRoute: FC<{exact?: boolean, children: ReactNode}> = ({ children, ...rest }) => {
  const token = getCookie('token');

  if (!token) {
    return (
      <Navigate to={{ pathname: '/signin'}} />
    )
  }

  return children;
}
