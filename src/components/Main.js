import React, { useEffect, useState } from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';
import styled from 'styled-components';
import useFetch from './useFetch';
function Main() {
	const { data, getQuote } = useFetch();
	const [color, setColor] = useState('');

	useEffect(() => {
		changeColor();
	}, []);

	const generateQuote = () => {
		getQuote();
		changeColor();
	};
	const changeColor = () => {
		const random = Math.floor(Math.random() * 256);
		const random1 = Math.floor(Math.random() * 256);
		const random2 = Math.floor(Math.random() * 256);
		const color = `rgb(${random}, ${random1}, ${random2})`;

		console.log(random);
		setColor(color);
	};
	const theme = {
		color: color,
	};

	return (
		<Wrapper className='container' theme={theme}>
			<div id='quote-box'>
				<div key={data._id}>
					<h1 id='text' theme={theme}>
						<FaQuoteLeft className='span' />
						{data.content}
					</h1>
					<h3 id='author'>- {data.author}</h3>
				</div>
				<div className='btn-container'>
					<a
						className='icon'
						href='https://twitter.com/intent/tweet'
						rel='noreferrer'
						target='_blank'>
						<BsTwitter />
					</a>
					<a
						className='icon'
						href='https://twitter.com/intent/tweet'
						rel='noreferrer'
						target='_blank'>
						<BsTwitter />
					</a>
					<button id='new-quote' onClick={generateQuote}>
						New quote
					</button>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	background-color: ${(props) => props.theme.color};
	transition: background-color 2s;

	#quote-box {
		padding: 1rem;
		width: 33rem;
		height: auto;
		display: flex;
		flex-direction: column;
		border-radius: 4px;
	}

	#text {
		padding: 2rem;
		font-size: 1.5rem;
		font-weight: 400;
		color: ${(props) => props.theme.color};
		margin-top: -1rem;
		transition: color 2s;
	}

	#author {
		transition: color 1s ease;
		color: ${(props) => props.theme.color};
		float: right;
		margin-top: -2rem;
		margin-right: 2rem;
		font-weight: 200;
	}

	.btn-container {
		width: 80%;
		margin-bottom: 1rem;
		margin-top: 1rem;
	}

	.icon {
		background-color: ${(props) => props.theme.color};
		color: white;
		padding: 0.6rem 0.8rem;
		margin-right: 0.5rem;
		border-radius: 4px;
		transition: background-color 2s;
	}

	#new-quote {
		margin-top: -0.5rem;
		float: right;
		background-color: ${(props) => props.theme.color};
		color: white;
		border: none;
		padding: 0.7rem 1rem;
		border-radius: 4px;
		transition: background-color 2s;
	}
	.span {
		margin-right: 0.5rem;
	}
`;

export default Main;
