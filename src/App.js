import { Provider } from 'react-redux';
import { store } from './redux/store';
import { TodoList } from './components/TodoList';

import './App.css';

const App = () => {
  return (
    <Provider store={ store }>
      <TodoList />
    </Provider>
  );
}

export default App;
