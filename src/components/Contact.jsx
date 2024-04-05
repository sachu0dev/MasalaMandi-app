const Contact = () => {
  return (
    <div className="h-full flex flex-col  items-center">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="name"
          className="border border-black p-2 m-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-2 rounded-lg"
        />
        <button className="bg-black text-light-gray p-2 m-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
