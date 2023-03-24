import {useLocation} from 'react-router-dom';

function CalcOffset(currentOffset){
    const currentPath = useLocation().pathname;

    
    // prevPath
    if (currentOffset > 10) {
        var prevPath = currentPath + "?offset=" + String(currentOffset - 10);
    }else{
        prevPath = currentPath + "?offset=" + String(0);
    };
    
    // nextPath
    var nextPath = currentPath + "?offset=" + String(currentOffset + 10);

    return {
        prev: prevPath,
        next: nextPath
    };
}

export default CalcOffset;