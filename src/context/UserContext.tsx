import { createContext, useContext, useState, useEffect } from 'react';

type Role = 'admin' | 'staff' | 'user';

interface UserContextProps {
  role: Role;
  email: string;
  setRole: (role: Role) => void;
  setEmail: (email: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

// sets up a shared state container
const UserContext = createContext<UserContextProps | undefined>(undefined);

// holds and manages the state  (global state)
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [role, setRoleState] = useState<Role>('user');
  const [email, setEmailState] = useState<string>('user@brrmedia.co.uk');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // storing state in local
  const setRole = (newRole: Role) => {
    localStorage.setItem('userRole', newRole);
    setRoleState(newRole);
  };

  const setEmail = (newEmail: string) => {
    localStorage.setItem('userEmail', newEmail);
    setEmailState(newEmail);
  };

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole') as Role;
    const storedEmail = localStorage.getItem('userEmail');
    // check if they existed in local storage before trying to update state if not state = initial state (user)
    if (storedRole && storedEmail) {
      setRoleState(storedRole);
      setEmailState(storedEmail);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ role, email, setRole, setEmail, isLoading, setIsLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};
// custom Hook gives access to the state from anywhere within the UserProvider which the whole App.tsx is wrapped with
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within a UserProvider');
  return context;
};
