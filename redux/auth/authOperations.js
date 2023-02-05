import {
  // updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // signOut,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { authSlice } from "./authReducer";

export const authSignUpUser = ({ login, email, password }) => async (
  dispatch,
  getState
) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    dispatch(authSlice.actions.updateUserProfile({ userId: user.uid }));
    console.log("user", user);
  } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
  }
};

export const authSignInUser = ({ email, password }) => async (
  dispatch,
  getState) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    
  } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
  }
};
   
export const authSignOutUser = () => async (dispatch, getState) => {};