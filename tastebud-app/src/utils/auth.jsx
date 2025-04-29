import { setUser, logout, isAuthenticated as checkAuthentication, saveUserToDB, getAllUsers } from '@/services/localStorage';
import { v4 as uuidv4 } from 'uuid';

// TEMPORARILY USE THE FAKE USER TO BYPASS LOGIN - 
// ONCE MAIN COMPONENTS ARE DONE, THE IMPLEMENTATION CAN BE ACTUALLY DONE

export const findUserByEmail = (email) => {
    const users = getAllUsers();
    return users.find((user) => user.email === email);
};
    
// Login by email + password
export const loginUser = async (email, password) => {
    const user = findUserByEmail(email);
    if (!user) {
        return { success: false, message: 'User not found' };
    }
    if (user.password !== password) {
        return { success: false, message: 'Wrong password; try again!' };
    }
    setUser(user);
    return { success: true, user };
};
    
// SIGNUP
export const signup = async (email, first_name, last_name, password) => {
    if (findUserByEmail(email)) {
        return { success: false, message: 'Email already registered' };
    }
    
    const newUser = {
        id: uuidv4(),
        email: email,
        password: password,
        first_name: first_name,
        last_name: last_name,
        created_at: new Date().toISOString(),
        saved_posts: [],
        followers: 0,
        following: 0,
        profile_photo_url: '', // default for now
        display_name: `${first_name} ${last_name}`,
        email_verified: false
    };
    
    saveUserToDB(newUser);
    setUser(newUser);
    return { success: true, user: newUser };
};
    
// LOGOUT
export const logoutUser = () => {
    logout();
};

// AUTH CHECK
export const isAuthenticated = () => {
    return checkAuthentication();
};

export const printLocalStorage = () => {
    console.log('📦 TasteBud LocalStorage Debug');
    Object.keys(localStorage).forEach((key) => {
        try {
        const value = JSON.parse(localStorage.getItem(key));
        console.log(`Key ${key}:`, value);
        } catch {
        console.log(`key ${key}: (non-JSON)`, localStorage.getItem(key));
        }
    });
    console.log('— end of localStorage —');
};
