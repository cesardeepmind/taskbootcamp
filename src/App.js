// import logo from './logo.svg';
import './App.css';
import AxiosCRUDExample from './components/pure/AxiosCRUDExample';
// import AxiosExample from './components/pure/AxiosExample';
// import FetchExample from './components/pure/FetchExample';
// import ObservableExample from './components/pure/ObservableExample';
// import AsyncExample from './components/pure/AsyncExample';
// import Father from './components/container/father';
// import TaskListComponent from './components/container/task_list';
// import Tasklist from './components/TasksList/TasksList';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import { GreetingStyled } from './components/pure/greetingStyled';
// import Optionalrender from './components/pure/Optionalrender';
// import Loginformik from './components/pure/forms/loginFormik';
// import RegisterFormik from './components/pure/forms/RegisterFormik';




function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Componente de listado de tareas */}
        
        {/* Ejemplos de uso de hooks */}
        {/* <Ejemplo1 /> */}
        {/* <Ejemplo2 /> */}
        {/* <GreetingStyled name="Cesar" /> */}
      {/* </header> */}
      {/* <TaskListComponent /> */}
      {/* <Tasklist /> */}
      {/* <Father /> */}

      {/* Ejemplos async */}

        {/* <AsyncExample /> */}

      {/* Observableexample */}
      {/* <ObservableExample /> */}

      {/* Fetch example */}
      {/* <FetchExample /> */}

      {/* AXIOS EXAMPLE */}
      {/* <AxiosExample /> */}
      <AxiosCRUDExample />

      {/* Ejemplos de renderizados condicional */}
      
        {/* <Optionalrender /> */}

        {/* Ejemplo de uso Formik yup */}
        {/* <Loginformik /> */}
        {/* <RegisterFormik /> */}
    </div>
  );
}

export default App;
