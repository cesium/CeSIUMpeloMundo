import { Author } from './types';

export const AuthorIcon = ({ author }: Author) => {
  if (Array.isArray(author)) {
    return <i className="bi bi-people-fill"></i>;
  }
  return <i className="bi bi-person-fill"></i>;
};

export default AuthorIcon;
