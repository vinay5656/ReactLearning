import React from "react";

function App() {
  // const [fName, setFName] = React.useState("");
  // const [lName, setLName] = React.useState("");

  // function fNameHandle(event) {
  //   setFName(event.target.value);
  // }
  // function lNameHandle(event) {
  //   setLName(event.target.value);
  // }

  const [fullName, setFullName] = React.useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          lName: prevValue.lName,
          fName: value
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
        {/* Hello {fName} {lName} */}
      </h1>
      <form>
        <input
          // onChange={fNameHandle}
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          // value = {fName}
          value={fullName.fName}
        />
        <input
          // onChange={lNameHandle}
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          // value={lName}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
