import { useLocation } from "react-router-dom";

function GetCurrentOffset(){
    const search = useLocation().search;
    var query = new URLSearchParams(search);
    var currentOffset =  parseInt(query.get('offset'));
    if (isNaN(currentOffset)){
        currentOffset = 0;
    };
    return currentOffset
}

export default GetCurrentOffset