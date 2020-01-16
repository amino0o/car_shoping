import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import { Switch ,Route } from 'react-router-dom'
import {connect} from 'react-redux'

import ShopPage from './pages/shoppage/shoppage.component'
import signInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component'
import ContactPage from './pages/contactpage/contactpage.component'
import Header from './components/header/header.component.jsx'
import { auth , createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
    unsubscribeFromAuth = null

    componentDidMount(){
        const {setCurrentUser} = this.props
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth)
                userRef.onSnapshot(snapShot => {
                    setCurrentUser ({
                        id : snapShot.id  ,
                        ...snapShot.data()
                    })
                })
            }
            setCurrentUser(userAuth)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={signInAndSignUpPage} />
                    <Route path='/contact' component={ContactPage} />
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
