import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // signOut,
 getAuth,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { authSlice } from "./authReducer";

export const authSignUpUser = ({ login, email, password }) => async (
  dispatch,
  getState
) => {
  try {
    // const { user } = await createUserWithEmailAndPassword(auth, email, password);
    // dispatch(authSlice.actions.updateUserProfile({ userId: user.uid }));
    
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
   
export const authSignOutUser = () => async (dispatch, getState) => { };

export const authStateChangeUser = () => async (dispatch, getState) => {
  await auth.onAuthStateChanged((user) => setUser(user));
};