import React from "react"
import FetchThread from "./FetchThread"
import CalcOffset from '../libs/CalcOffset.js';
import GetCurrentOffset from '../libs/GetCurrentOffset.js';

export default function Top() {
    var currentOffset = GetCurrentOffset();
    var path = CalcOffset(currentOffset);

    return(
        <div>
        <h1>新着スレッド</h1>
        <FetchThread offset={String(currentOffset)}/>
        <a href={path.prev}>前の10件</a>　
            <a href={path.next}>次の10件</a><br></br>
        <a href="/create-thread"><button>スレッド新規作成</button></a>
        </div>
    )
}