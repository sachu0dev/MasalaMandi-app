import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleToast(message) {
    toast.success(message);
    setTimeout(() => {
      toast(
        "We have received your message.\n\nWe will get back to you as soon as possible.",
        {
          duration: 3000,
        }
      );
    }, 2000);
  }
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await sendMessage();
  };

  async function sendMessage() {
    const data = {
      name,
      email,
      message,
    };
    try {
      const response = await fetch(
        "https://simple-contact-seven.vercel.app/message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const jsonResponse = await response.json();

        toast.error(jsonResponse.error);
      }

      const jsonResponse = await response.json();
      handleToast(jsonResponse.message);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="h-full flex flex-col items-center min-h-screen">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="Name"
          className="border border-black p-2 m-2 rounded-lg"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Email"
          className="border border-black p-2 m-2 rounded-lg"
          value={email}
          onChange={handleEmailChange}
        />
        <textarea
          placeholder="Message"
          className="border border-black p-2 m-2 rounded-lg"
          rows="4"
          cols="50"
          value={message}
          onChange={handleMessageChange}
        />
        <button
          type="submit"
          className="bg-black text-light-gray p-2 m-2 rounded-lg"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
