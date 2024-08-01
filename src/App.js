import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login/Login.js'
import Home from './components/Home/Home.js'
import Jobs from './components/Jobs/Jobs.js'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.js'
import NotFound from './components/NotFound/NotFound.js'
import JobItemDetails from './components/JobItemDetails/JobItemDetails.js'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
