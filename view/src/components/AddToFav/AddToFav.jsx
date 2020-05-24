import React from 'react';
import './AddToFav.css';
import { ReactComponent as FavoriteSmall } from '../../assets/icons/favorite_small.svg';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserData } from '../../store/actions/user';
import { useHistory } from 'react-router-dom';

function AddToFav({ productId, userEmail, userFavorites, getUserData }) {
	const history = useHistory();
	const isFavorite = () => userFavorites.some((favorite) => favorite === productId);
	function addToFavorites(productId) {
		const authToken = localStorage.getItem('Authorization');
		axios.defaults.headers.common = { Authorization: `${authToken}` };
		axios
			.post('/favorite/', {
				productId,
				userEmail
			})
			.then((response) => {
				getUserData();
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function deleteFromFavorites(productId) {
		const authToken = localStorage.getItem('Authorization');
		axios.defaults.headers.common = { Authorization: `${authToken}` };
		axios
			.delete('/favorite/', {
				data: {
					productId,
					userEmail
				}
			})
			.then((response) => {
				getUserData();
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function handleOnIconClick(productId) {
		if (isFavorite() === true) {
			deleteFromFavorites(productId);
		} else {
			addToFavorites(productId);
		}
	}

	if (userFavorites) {
		return (
			<div className={`add-to-fav ${isFavorite() ? 'is-red' : ''}`} onClick={(e) => handleOnIconClick(productId)}>
				<FavoriteSmall />
			</div>
		);
	} else {
		return (
			<div className={`add-to-fav`} onClick={(e) => history.push('/login')}>
				<FavoriteSmall />
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getUserData: () => {
			dispatch(getUserData());
		}
	};
}

function mapStateToProps(state) {
	return {
		userEmail: state.user.data.email,
		userFavorites: state.user.data.favorites
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToFav);
