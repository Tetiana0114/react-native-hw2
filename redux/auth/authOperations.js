import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { authSlice } from "./authReducer";

export const authSignUpUser = ({ login, email, password }) => async (
  dispatch,
  getState
) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const user = await getAuth().currentUser;
    await updateProfile(user, { displayName: login });
    const { displayName, uid } = await getAuth().currentUser;

    const userUpdateProfile = {
      login: displayName,
      userId: uid,
    };

    dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));

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
   
export const authStateChangeUser = () => async (dispatch, getState) => {
  await auth.onAuthStateChanged((user) => {
    if (user) {
      const userUpdateProfile = {
        login: user.displayName,
        userId: user.uid,
      };
      dispatch(authSlice.actions.authStateChange({ stateChange: true }));
      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
    }
  });
};

export const authSignOutUser = () => async (dispatch, getState) => {
  await auth.signOut();
 };