/**
 * Shows its contents if the user is a member of the specified role.
 * @param {*} props
 */
const Role = (props) => {
  // if the user object is null, they are not logged in at all
  if (!props.user) return null;

  const hasRole = props.user.userRoles.find((role) => role === props.role);

  if (hasRole) return props.children;
  else return null;
};

export default Role;
