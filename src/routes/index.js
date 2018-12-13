// Libraries
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Components
import { BTC_TYPE } from 'utils/catalogs'
import CryptoTracker from 'views/cryptoTracker'

const Routes = () => {
  return (
    <Switch>
      <Route path=':type' render={
        props => <CryptoTracker {...props} currentCurrency={props.match.params.type} />
      } />
      <Redirect from='/*' to={`/${BTC_TYPE}`}/>
    </Switch>
  )
}

export default Routes
