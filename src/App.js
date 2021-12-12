import "./App.css";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { db } from "./firebase_config";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import TodoListItem from "./Todo";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signOut } from "firebase/auth";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [dispname, setdispname] = useState("Hello");
  const [email, setemail] = useState("");
  const [status, setstatus] = useState(false);
  useEffect(() => {
      firebase.auth().onAuthStateChanged((user)=>{
      if(user){
      var name = user.displayName;
      var useremail = user.email;
      setdispname(name);
      setemail(useremail);
      setstatus(true);
      console.log("I have logged in")
      getTodos();

      }

      });
  }, [])



  useEffect(() => {
    getTodos();
  }, [status===true]); // blank to run only on first launch

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
          email: doc.data().email
        }))
      );
    });
  }


  function addTodo(e) {
    e.preventDefault();

    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
      email: email
    });

    setTodoInput("");
  }

  function signin() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        var name = user.displayName;
        var useremail = user.email;
        setdispname(name);
        setemail(useremail);
        setstatus(true);
        console.log("I have logged in")
        getTodos();
        console.log(todos);
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function signout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Signed Out")
        setdispname("Hello")
        setemail("");
        setstatus(false);
        console.log(todos);
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h1>{dispname} Todo</h1>
        <Button onClick={signin}>Google Sign-in</Button>
        <Button onClick={signout}>Sign-out</Button>
        <form>
          <TextField
            id="standard-basic"
            label="Write a Todo"
            value={todoInput}
            style={{ width: "90vw", maxWidth: "500px" }}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            onClick={addTodo}
            style={{ display: "none" }}
          >
            Default
          </Button>
        </form>
        {status?
        <div style={{ width: "90vw", maxWidth: "500px", marginTop: "24px" }}>
          {todos.filter((todo)=>{return todo.email === email}).map((todo) => (
            <TodoListItem
              todo={todo.todo}
              inprogress={todo.inprogress}
              id={todo.id}
            />
          ))}
        </div>:<p>login please</p>}
      </div>
    </div>
  );
}

export default App;
