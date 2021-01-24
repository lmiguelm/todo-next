import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

interface AuthContextData {
  signed: boolean;
  login(email: string, password: string): void;
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

  const [signed, setSigned] = useState(false);
  const [user, setUser] = useState({});


  useEffect(() => {
    async function loadData() {
      const token = localStorage.getItem('@todo:token');
      const user = localStorage.getItem('@todo:user');
      
      if(token && user) {
        axios.defaults.headers.Authorization = token;
        setUser(user);
        setSigned(true);
      } else {
        setSigned(false);
      }
    }
    loadData();
  });


  async function login(email: string, password: string): Promise<string> {

    console.log(email)

    return new Promise( async (resolve, reject) => {
      try {
        const res = await axios.post('/api/users/login', { email, password });
        const token = res.headers.authotization;
        const user = res.data;
  
        localStorage.setItem('@todo:user', user);
        localStorage.setItem('@todo:token', token);
  
        axios.defaults.headers.Authorization = token;
        
        setSigned(true);
        setUser(user);

        return resolve('');
      } catch (e) {
        return reject(e.response.data.message);
      }
    })
  }

  function logout() {
    localStorage.clear();
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed, login, logout }}>  
        {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
}

