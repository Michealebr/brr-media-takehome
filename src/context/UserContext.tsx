import { createContext, useContext, useState } from 'react';

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
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<Role>('user');
  const [email, setEmail] = useState('user@bbrmedia.co.uk');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <UserContext.Provider value={{ role, email, setRole, setEmail, isLoading, setIsLoading }}>
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
