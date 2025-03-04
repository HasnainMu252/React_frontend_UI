
import { useContext } from "react";
import ChangeColor from "./ChangeColor";
import FirstComponent from "./FirstComponent";
import Form from "./Form";
import Timer from "./Timer";
import TodoList from "./TODOLIST";
import IndexProvider, { InfoContext } from "./ContextAPi";
import Authentication from './Authentication'
import UserProfile from "./Userprofile";


const SecondComponent = ({user}) => {

    const {theme,toggleBtn} = useContext(InfoContext) 
    const initial = 0;

    return (
        <>
            <div
            
            style={{
                background: theme === 'light'?'#fff':'#111',
                color: theme === 'light'?'#111':'#fff',

            }}>

                <button onClick={toggleBtn}>toggle me</button>

                <h3>iam Second Component which provides the init value {name.name} {name.fname}</h3>
               <FirstComponent init={initial} />
             <ChangeColor />
              <Form />
               <TodoList />
       <Timer />

       <Authentication/>
       <UserProfile/>
            </div>
        </>
    );
};

export default SecondComponent;
