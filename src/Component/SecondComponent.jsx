import ChangeColor from "./ChangeColor"
import FirstComponent from "./FirstComponent"


const SecondComponent=()=>{
    const initial = 0
    return(<>
    <h3>iam Second Componetn which provide the init value</h3>
    <FirstComponent init = {initial}/>
    <ChangeColor/>

    </>)
}


export default SecondComponent