import React from 'react';
import './HeroSection.css';
import '../../App.css';
import Button from '../Button/Button';

const HeroSection = () => {
	return (
		<div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
			<h1>Создатель Вовненко Юрий</h1>
			<p>Великий программист сия русси</p>
			<div className='hero-btns'>
				<Button
					className='btns'
					buttonStyle='btn--outline'
					buttonSize='btn--large'>
					GET STARTED
				</Button>
				<Button
					className='btns'
					buttonStyle='btn--primary'
					buttonSize='btn--large'
					onClick={console.log('hey')}>
					WATCH TRAILER <i className='far fa-play-circle' />
				</Button>
			</div>
		</div>
	);
};

export default HeroSection;
