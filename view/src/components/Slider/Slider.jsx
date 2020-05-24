import React from 'react';
import './Slider.css';
import dick_1778 from '../../assets/images/banners/dick_1778.jpg';
import Victorinox from '../../assets/images/banners/VictorInox.jpg';
import wood_collection from '../../assets/images/banners/wood_collection.jpg';
import Slide from './Slide/Slide';
import Timer from '../../utils/Timer';

class Slider extends React.Component {
	constructor() {
		super();
		this.state = {
			banners: [
				{
					image: dick_1778,
					link: '/products/?category=MeaqcO5R5foJaEoWqVGE',
					tagLine: `Chef's knives`
				},
				{
					image: Victorinox,
					link: '/products/?category=ZJcGJrhrbjmLRdKiAfqs',
					tagLine: 'Pocket Knives'
				},
				{
					image: wood_collection,
					link: '/products/?category=ZJcGJrhrbjmLRdKiAfqs&material=Stainless+steel+%2F+Walnut+wood',
					tagLine: 'Wood collection'
				}
			],
			displayBanner: '',
			activeBannerIndex: 0,
			show: true
		};

		this.i = 0;
		this.timer = new Timer(() => {
			this.i += 1;
			if (this.i > this.state.banners.length - 1) this.i = 0;
			this.setState({
				displayBanner: this.state.banners[this.i],
				activeBannerIndex: this.i
			});
		}, 5000);
	}

	componentDidMount() {
		this.setState({ displayBanner: this.state.banners[0] });
		this.timer.start();
	}

	componentWillUnmount() {
		this.timer.stop();
	}

	handleClick(number) {
		let slideNumber = number <= this.state.banners.length - 1 && number >= 0 ? number : 0;
		this.setState({ displayBanner: this.state.banners[slideNumber], activeBannerIndex: slideNumber, show: true });
		this.timer.reset();
	}

	render() {
		return (
			<div className='slider mb-3'>
				<Slide
					image={this.state.displayBanner.image}
					link={this.state.displayBanner.link}
					tagLine={this.state.displayBanner.tagLine}
					active={this.state.activeBannerIndex}
					total={this.state.banners.length}
					show={this.state.show}
					clickFunction={(e) => this.handleClick(e)}
				/>
			</div>
		);
	}
}

export default Slider;
