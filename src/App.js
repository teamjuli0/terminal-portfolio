import './App.css'
import { LandingPage } from './views'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <Router>
        <Switch>
          {/* comment to do something for something idk */}
          {/* comment on merge-demo */}
          <Route exact path='/' component={LandingPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
