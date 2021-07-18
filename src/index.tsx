import ReactDOM from "react-dom";
import store from "./redux/state";
import React from "react";
import App from "./App";

let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App  state={store.getState()}
                  dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree()
store.subscribe(renderEntireTree)

