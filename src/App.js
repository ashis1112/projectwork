import Navbar from './component/layout/navbar'
import {Switch,Route} from 'react-router-dom'
import Dashboard from './component/dashboard/dashboard'
import Projectdetails from './component/projects/projectdetails'
import Signin from './component/auth/signin'
import Signup from './component/auth/signup'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/project/:id' component={Projectdetails} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />

      </Switch>
    </div>
  );
}

export default App;
