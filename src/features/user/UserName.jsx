import { useSelector } from 'react-redux';

function UserName() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <span className="hidden text-sm font-semibold md:block">{username}</span>
  );
}

export default UserName;
