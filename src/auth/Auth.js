import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import firebaseService from '~/services/firebase/firebaseService';

import * as UserActions from '~/auth/actions';

import SplashScreen from '~/sceenes/splash/SplashScreen';

class FirebaseAuth extends Component {

    state = {
        waitAuthCheck: true
    };

    componentDidMount() {

        return Promise.all([
            this.firebaseCheck()
        ]).then((authUser) => {

            console.log("Firebase check PROMISE done");
            this.setState({ waitAuthCheck: false });
        })
        .catch((authUser) => {
            // console.log("AUTH -- catch --- ", authUser)
            // console.log("AUTH -- catch --- ", authUser)
            this.setState({ waitAuthCheck: false });
        })
    }

    firebaseCheck = () => 
        new Promise((resolve, reject) => {
            firebaseService.init(success => {
                if (!success) {
                    resolve();
                }
            });

            firebaseService.onAuthStateChanged(authUser => {
                if (authUser) {
                    console.log("Logged in with firebase")
                    //console.log(authUser);
                    resolve(authUser);
                } else {
                    console.log("Logged out from firebase");
                    reject(null);
                }

                this.props.setFirebaseUser(authUser);

            })
        })

    render() {
        return this.state.waitAuthCheck ? <SplashScreen /> : <>{this.props.children}</>
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            setFirebaseUser: UserActions.setFirebaseUser
        },
        dispatch
    );
}

export default connect(null, mapDispatchToProps)(FirebaseAuth);