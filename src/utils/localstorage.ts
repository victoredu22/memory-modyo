export const createUser = (name: string) => {
  localStorage.setItem("usuario", name);
};

export const getUser = () => {
  return localStorage.getItem("usuario");
};
