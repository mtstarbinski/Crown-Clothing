import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Hats from "./components/Hats";
import Shop from "./pages/Shop/Shop.jsx";
import Header from "./components/Header/Header.jsx";
import LoginAndRegister from "./pages/Login-Register/LoginAndRegister";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;
    var unsubscribeFromAuth = () =>
      auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot((snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
        } else {
          setCurrentUser(null);
        }

        setCurrentUser(userAuth);
      });
    return unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />} />
            <Route path="shop/">
              <Route index element={<Shop />} />
              <Route path="hats" element={<Hats />} />
              <Route path="jackets" element={<Hats />} />
              <Route path="sneakers" element={<Hats />} />
              <Route path="womens" element={<Hats />} />
              <Route path="mens" element={<Hats />} />
            </Route>
            <Route
              exact
              path="signin"
              element={
                this.props.currentUser ? (
                  <Navigate to="/" />
                ) : (
                  <LoginAndRegister />
                )
              }
            />
          </Route>
        </Routes>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
