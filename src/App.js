import Card from "./components/Card";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Card></Card>
      </div>
    </Provider>
  );
}

export default App;
