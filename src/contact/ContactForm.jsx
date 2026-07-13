// import { useState } from "react";
import { useImmer } from "use-immer";

// Direkomendasikan jika kita ingin menggunakan data object sebagai state
// untuk tidak mengubah datanya secara langsung. Kita bisa menggunakan spread syntax dahulu (readonly) untuk menyalin data object state
// baru kita merubahnya setelahnya
// berikut merupakan contohnya jika kita ingin menggunakan data complex berupa object sebagai state
function ContactForm() {
  // set contact dan setContact sebagai state dengan initial value berupa object dengan property name dan message
  // library immer digunakan untuk memudahkan kita agar kita tidak perlu lagi untuk memasukkan spread syntax atau jika terjadi nested object
  // yang dalam
  const [contact, setContact] = useImmer({
    name: "",
    message: "",
  });

  // create handle for change Name and Message input field,
  // we will use the event.target.value to get the value of the input field and set it to the state
  // notice that there is spread syntax used to copy the state object before we change the value of the property, this is to avoid mutating the state directly
  // if we are using immer library we can directly use the setContact function to change the value of the property without using spread syntax
  // immer have callback function that will receive the draft state as parameter, we can change the value of the property directly in the draft state and immer will take care of the rest
  const handleNameChange = (event) => {
    setContact((draft) => {
      draft.name = event.target.value;
    });
  };

  const handleChangeMessage = (event) => {
    setContact((draft) => {
      draft.message = event.target.value;
    });
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={contact.name}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          placeholder="Message"
          value={contact.message}
          onChange={handleChangeMessage}
        />
      </form>

      <h2>Contact Detail</h2>
      <p>Name: {contact.name}</p>
      <p>Message: {contact.message}</p>
    </div>
  );
}

export default ContactForm;
