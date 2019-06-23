import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return(
		<div className=''>
		<input 
		className='tc' 
		type='search' 
		placeholder='Cauta un tovarasel'
		onChange={searchChange}
		/>
		</div>
	);
}

export default SearchBox;