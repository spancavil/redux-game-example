import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk'

//Herramienta devTools para ver en el navegador.
//Es un middleware. También utilizamos thunk, que sería para aplicar redux en forma asíncrona, cuando hay una llamada asíncrona de por medio, por ejemplo con axios.
import {composeWithDevTools} from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;