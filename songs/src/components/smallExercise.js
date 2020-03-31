<script type="text/babel" data-plugins="proposal-class-properties" data-presets="env,react">
    // Action Creators - You don't need to change these
    const increment = () => ({ type: 'increment' });
    const decrement = () => ({ type: 'decrement' });
    
    const Counter = (props) => {
        return (
            <div>
                <button className="increment" onClick={() => props.increment()}>Increment</button>
                <button className="decrement" onClick={() => props.decrement()}>Decrement</button>
                Current Count: <span>{props.count}</span>
            </div>
        );
    };
    const mapStateToProps = (state) => {
        return {count: state.count};
    }
    
    const WrappedCounter = ReactRedux.connect(mapStateToProps, {increment: increment, decrement: decrement})(Counter);
    
    // Only change code *before* me!
    // -----------
    
    const store = Redux.createStore(Redux.combineReducers({
        count: (count = 0, action) => {
            if (action.type === 'increment') {
                return count + 1;
            } else if (action.type === 'decrement') {
                return count - 1;
            } else {
                return count;
            }
        }
    }));

    ReactDOM.render(
        <ReactRedux.Provider store={store}>
            <WrappedCounter />
        </ReactRedux.Provider>, 
        document.querySelector('#root')
    );
</script>

// INSTRUCTOR SOLUTION
<script type="text/babel" data-plugins="proposal-class-properties" data-presets="env,react">
    // Action Creators - You don't need to change these
    const increment = () => ({ type: 'increment' });
    const decrement = () => ({ type: 'decrement' });
    
    const Counter = (props) => {
        return (
            <div>

                {/* NOTE: action 'props.increment()' does not have parentesis because we don't
                want the callback function to be called when this button is 1st rendered. 
                We want to pass a reference so that the function can be called at some point*/}

                <button onClick={props.increment} className="increment">Increment</button>
                <button onClick={props.decrement} className="decrement">Decrement</button>
                Current Count: <span>{props.count}</span>
            </div>
        );
    };
    const mapStateToProps = (state) => {
        return {count: state.count};
    }
    
    const WrappedCounter = ReactRedux.connect(mapStateToProps, {increment: increment, decrement: decrement})(Counter);
    
    // Only change code *before* me!
    // -----------
    
    const store = Redux.createStore(Redux.combineReducers({
        count: (count = 0, action) => {
            if (action.type === 'increment') {
                return count + 1;
            } else if (action.type === 'decrement') {
                return count - 1;
            } else {
                return count;
            }
        }
    }));

    ReactDOM.render(
        <ReactRedux.Provider store={store}>
            <WrappedCounter />
        </ReactRedux.Provider>, 
        document.querySelector('#root')
    );
</script>
