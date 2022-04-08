import { useState } from 'react';

export const Inventory = () => {
	const [booksCount, setBooksCount] = useState(10);
	const [notebooksCount, setNotebooksCount] = useState(13);
	const [pensCount, setPensCount] = useState(40);
	const [inv, setInv] = useState({
		books: booksCount,
		notebooks: notebooksCount,
		pens: pensCount,
	});
	// Create add and remove functions here that changes the
	// state.
	const handleChange = (opt, val) => {
		if (opt === 'b' && booksCount >= 0) {
			setBooksCount(booksCount + val);
		} else if (opt === 'n' && notebooksCount >= 0) {
			setNotebooksCount(notebooksCount + val);
		} else if (opt === 'p' && pensCount >= 0) {
			setPensCount(pensCount + val);
		}
	};
	return (
		<div
			style={{
				border: '1px solid black',
				borderRadius: '3px',
				padding: '10px',
				display: 'flex',
				flexDirection: 'column',
				width: '400px',
			}}
		>
			<div className='items'>
				<span>Books: </span>
				<button
					onClick={() => handleChange('b', 1)}
					className='circlularButton'
				>
					+
				</button>
				<button
					onClick={() => handleChange('b', -1)}
					className='circlularButton'
				>
					-
				</button>
				<span>{booksCount < 0 ? setBooksCount(0) : booksCount}</span>
			</div>
			<div className='items'>
				<span>Notebooks: </span>
				<button
					onClick={() => handleChange('n', 1)}
					className='circlularButton'
				>
					+
				</button>
				<button
					onClick={() => handleChange('n', -1)}
					className='circlularButton'
				>
					-
				</button>
				<span>
					{notebooksCount < 0 ? setNotebooksCount(0) : notebooksCount}
				</span>
			</div>
			<div className='items'>
				<span>Pen: </span>
				<button
					onClick={() => handleChange('p', 1)}
					className='circlularButton'
				>
					+
				</button>
				<button
					onClick={() => handleChange('p', -1)}
					className='circlularButton'
				>
					-
				</button>
				<span>{pensCount < 0 ? setPensCount(0) : pensCount}</span>
			</div>
			{/*calculate total and show it*/}
			total:{' '}
			{booksCount + notebooksCount + pensCount < 0
				? 0
				: booksCount + notebooksCount + pensCount}
		</div>
	);
};
