import {
	loginUserWithEmail,
	signUpUserWithEmail,
	fetchUserData,
	loginWithGoogleApi,
	setUserDetails
} from '../../apis/endpoints';
import UserActionTypes from '../types/user';

export function startLoading() {
	return {
		type: UserActionTypes.START_LOADING
	};
}

export function updateUserData(payload) {
	return {
		type: UserActionTypes.UPDATE_USER_DATA,
		payload
	};
}

export function updateError(payload) {
	return {
		type: UserActionTypes.UPDATE_ERROR,
		payload
	};
}

export function loginUserWithGoogle() {
	return async (dispatch) => {
		dispatch(startLoading());

		try {
			const { token, data } = await loginWithGoogleApi();
			localStorage.setItem('Authorization', 'Bearer ' + token);
			const payload = await setUserDetails(data);
			dispatch(updateUserData(payload));
		} catch (error) {
			if (!error.response) {
				dispatch(updateError({ error: 'no response from resource' }));
			} else {
				dispatch(updateError(error));
				/*error 400 means the user is already in the database */
				if (error.response.status === 400) {
					getUserData();
				}
			}
		}
	};
}

export function loginUser(email, password) {
	return async (dispatch) => {
		dispatch(startLoading());

		try {
			const payload = await loginUserWithEmail(email, password);
			localStorage.setItem('Authorization', 'Bearer ' + payload.token);
			dispatch(getUserData());
		} catch (error) {
			if (!error.response) {
				dispatch(updateError({ error: 'no response from resource' }));
			} else {
				dispatch(updateError(error.response.data));
			}
		}
	};
}

export function logoutUser() {
	return (dispatch) => {
		localStorage.clear();
		dispatch(updateUserData(null));
	};
}

export function signUpUser(userData) {
	return async (dispatch) => {
		dispatch(startLoading());

		try {
			const payload = await signUpUserWithEmail(userData);
			localStorage.setItem('Authorization', 'Bearer ' + payload.token);
			dispatch(updateUserData(payload));
		} catch (error) {
			if (!error.response) {
				dispatch(updateError({ error: 'no response from resource' }));
			} else {
				dispatch(updateError(error));
			}
		}
	};
}

export function getUserData() {
	return async (dispatch) => {
		dispatch(startLoading());

		try {
			const payload = await fetchUserData();
			dispatch(updateUserData(payload));
		} catch (error) {
			if (!error.response) {
				dispatch(updateError({ error: 'no response from resource' }));
			} else {
				dispatch(updateError(error.response.data));
			}
		}
	};
}
