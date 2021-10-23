export const getInitials = (str?: string)=> {
  if (!str) return;
  
  const name = str.split(' ');
  if (name && name[0] && name[1]) return name[0].charAt(0) + '' + name[1].charAt(0)
  return name[0].charAt(0)
}