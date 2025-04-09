import { setUser, logout, isAuthenticated as checkAuthentication } from '@/services/localStorage';

// TEMPORARILY USE THE FAKE USER TO BYPASS LOGIN - 
// ONCE MAIN COMPONENTS ARE DONE, THE IMPLEMENTATION CAN BE ACTUALLY DONE
const fakeUser = {
    id: 1,
    username: 'johndoe',
    email: 'john.doe@example.com',
    password: 'password', 
    };

export const loginUser = async (emailOrUsername, password) => {
    if (emailOrUsername === fakeUser.username || emailOrUsername === fakeUser.email) {
        if (password === fakeUser.password) {
        setUser(fakeUser);
        return { success: true, user: fakeUser };
        } else {
        return { success: false, message: 'Incorrect password' };
        }
    }
    return { success: false, message: 'User not found' };
};
    
export const signup = async (email, username, password) => {
    const fakeUser = { id: 2, username, email, password };    
    setUser(fakeUser);
    return { success: true, user: fakeUser };
};
    
export const logoutUser = () => {
    logout(); 
};
    
export const isAuthenticated = () => {
    return checkAuthentication(); 
};
