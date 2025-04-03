import React from 'react';

const Box = ({ title, item, result }) => {
    const colors = { tie: 'green-border', win: 'red-border', lose: 'blue-border', default: 'black-border' };
    const resultImg = {
        win: 'https://cdn-icons-png.flaticon.com/128/10/10957.png',
        lose: 'https://cdn-icons-png.flaticon.com/128/18055/18055711.png',
        tie: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHtvheHdPEh449e4k26Z4xl1Z1VGmmi7OMPw&s',
    };
    const defaultImg = {
        main: 'https://attach.lolchess.gg/2022%2F05%2F26%2F1653493126044-PBE+%ED%98%84+%EC%83%81%ED%83%9C.jpg',
        waiting:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHAq8TyUzpDwXp0BmxtPpOgxkFaTvmDYSpgpX2dzuxuN5sY0JzT_zReTPbDD2NZMR2cFE&usqp=CAU',
    };
    return (
        <div className={`box ${colors[result] || colors['default']}`}>
            <h2>{title}</h2>
            <img className='item-img' src={(item && item.img) || defaultImg['main']} alt='choice-img' />
            <img className='result-img' src={(result && resultImg[result]) || defaultImg['waiting']} alt='result-img' />
            <h2>{result}</h2>
        </div>
    );
};
export default Box;
