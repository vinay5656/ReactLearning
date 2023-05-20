import React from "react";
import Card from "./Card";
import contacts from "../contacts";

import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      // Each child in the list should have unique property
      //  because React is able to create a virtual DOM that represents the current appearence your website
      //  for it to be able to efficiently render components for every single component that's being rendered
      // using a loop such as map function, we will have to give those components a property that has to be called key
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://thumbs.dreamstime.com/b/time-to-study-school-tools-around-blackboard-background-46060556.jpg" />
      {/* mapping  components */}
      {contacts.map(createCard)}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
