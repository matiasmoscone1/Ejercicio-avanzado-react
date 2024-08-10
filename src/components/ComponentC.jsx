
const ComponentC = () => {

    const ComponentE = () => {
        return(<>
            <span>Componente E</span>
        </>);
    }
    
    const ComponentF = () => {
        return(<>
            <div className="component-items">
                <button onClick={() => dispatch({type: "increment"})}>Increment</button>
                <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
                <button onClick={() => dispatch({type: "reset"})}>Reset</button>
            </div>
        </>);
    }


    return(<>
        <ComponentF />    
    </>);

}

export default ComponentC;
