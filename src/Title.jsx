import { useEffect } from "react";
function Title({count}) {
    console.log('Title rendered');
    useEffect(() => {
        document.title = `clicked ${count} times`;
    }, [count]);
    return <h1>{count}</h1>;
}
export default Title;