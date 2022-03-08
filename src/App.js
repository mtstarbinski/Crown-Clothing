import "./App.css";
import {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Hats from "./components/Hats";
import Shop from "./pages/Shop/Shop.jsx";
import Header from "./components/Header/Header.jsx";
import LoginAndRegister from "./pages/Login-Register/LoginAndRegister";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(()=> {
   var unsubscribeFromAuth = () => auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(null)
      }

      setCurrentUser(userAuth)
    })
    return unsubscribeFromAuth();

  },[])


  return (
    <>
      <Header currentUser={currentUser}/>
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
          <Route path="signin" element={<LoginAndRegister />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
