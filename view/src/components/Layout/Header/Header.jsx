import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// css
import './Header.css';

// assets
import logo from '../../../assets/images/logo/logo.png';
import { ReactComponent as ShoppingCart } from '../../../assets/icons/shopping-cart.svg';
import { ReactComponent as UserIcon } from '../../../assets/icons/user.svg';
import { ReactComponent as Favorite } from '../../../assets/icons/favorite.svg';

//components
import DropdownUser from '../../Dropdown/DropdownUser';

class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			displayUserDropdown: false
		};
	}

	handleHoverOnUser() {
		this.setState({ displayUserDropdown: !this.state.displayUserDropdown });
	}

	render() {
		const { numberOfProducts } = this.props;
		return (
			<header className='border-bottom mb-3 '>
				<div className='container-fluid container-min-max-width d-flex justify-content-between align-items-center'>
					<Link to='/' className='my-3'>
						<img src={logo} alt={`Victor's shop`} className='logo' />
					</Link>
					<input className='form-control mr-4' type='text' placeholder='Search' />
					<div>
						<div className='d-flex justify-content-end'>
							<div className='d-flex align-items-center'>
								<Link>
									<div
										className='dropdown'
										onMouseEnter={() => this.handleHoverOnUser()}
										onMouseLeave={() => this.handleHoverOnUser()}>
										<UserIcon className='mr-2' />
										<DropdownUser isActive={this.state.displayUserDropdown} />
									</div>
								</Link>

								<Link to='/favorites'>
									<Favorite className='mr-2' />
								</Link>
								<Link to='/cart' className='d-flex'>
									<ShoppingCart className='ml-2' />
									<p className='products-number ml-1 mb-0'>{numberOfProducts}</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

function mapStateToProps(state) {
	return {
		numberOfProducts: state.cart.products.length
	};
}

export default connect(mapStateToProps)(Header);
