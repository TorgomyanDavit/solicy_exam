import React from 'react';

function Main({data,deleteCard}) {

    console.log(data)
    return (
        <div className='main_container'>
            <div className='center_mode'>
                {data.map(({id}) => (
                    <div key={id} className='item'>
                        <button className='delete' onClick={() => deleteCard(id)}>X</button>
                        <p className='item_content'>{id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;