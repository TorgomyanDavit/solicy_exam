import React from 'react';

function Header({addCard,sortCard}) {
    return (
        <div className='header_container'>
            <button className='submit_card' onClick={addCard}>Add Card</button>
            <button className='submit_card' onClick={sortCard}>Sort Card</button>
        </div>
    );
}

export default Header;