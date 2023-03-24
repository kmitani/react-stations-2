import React from 'react'
import FetchComment from './FetchComment.js';
import CreateComment from './CreateComment.js';
import CalcOffset from '../libs/CalcOffset.js';
import GetCurrentOffset from '../libs/GetCurrentOffset.js';

const ShowComment = () => {
    var currentOffset = GetCurrentOffset();
    var path = CalcOffset(currentOffset);

    return (
        <div>
            <h2>新着コメント</h2>
            <FetchComment offset={String(currentOffset)} />
            <a href={path.prev}>前の10件</a>　
            <a href={path.next}>次の10件</a>
            <CreateComment />
            <a href="/">Topに戻る</a>
        </div>
    )
}

export default ShowComment