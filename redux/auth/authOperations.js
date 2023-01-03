import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



export const authSignUpUser = ({ email, password, login }) => async (
  dispatch,
  getState
) => {

    try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

  } catch (error) {
    console.log("error", error);
  }
};

const authSignInUser = () => async (dispatch, getState) => { };
const authSignOutUser = () => async (dispatch, getState) => {};