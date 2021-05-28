const Role = (props) => {
  if (!props.user) return null;

  const hasRole = props.user.userRoles.find((role) => role === props.role);

  if (hasRole) return props.children;
  else return null;
};

export default Role;
