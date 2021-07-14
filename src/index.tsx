import ReactDOM from "react-dom";
import store, {StoreType} from "./redux/state";
import React from "react";
import App from "./App";

let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App  state={store._state}
                  updateNewPostText={store.updateNewPostText.bind(store)}
                  addPost={store.addPost.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree()
store.subscribe(renderEntireTree)

