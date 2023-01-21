import { useEffect, useState } from 'react';

const url = 'https://api.quotable.io/random';
function useFetch() {
	const [data, setData] = useState({});

	const getQuote = async () => {
		try {
			const response = await fetch(url);
			const { statusCode, statusMessage, ...data } =
				await response.json();
			if (!response.ok)
				throw new Error(`${statusCode} ${statusMessage}`);
			setData(data);
			console.log(data);
		} catch (err) {
			setData({ content: 'Sorry something went wrong' });
		}
	};

	useEffect(() => {
		getQuote();
	}, []);

	if (!data) return null;
	return { data, getQuote };
}

export default useFetch;
