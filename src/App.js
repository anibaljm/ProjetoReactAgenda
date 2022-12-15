import "bootstrap/dist/css/bootstrap.min.css";

//import CrudApp from "./components/App"//
import CrudAPI from "./components/CRUDAPI";

const App = () => {

  return <div className="main">
      <CrudAPI />
      {/*<CrudApp />*/}
   </div>
}

export default App;