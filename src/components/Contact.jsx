import React, {useRef} from "react";



const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = () => {
    // Clear the form after submission
    formRef.current.reset();
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-dark-beige to-dark-beige p-4 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full">
        <div className="text-center">
          <p className="text-4xl font-bold">Contact</p>
          <p className="py-6 text-2xl">Let's get to know each other!</p>
        </div>

        <form
          ref={formRef}
          action="https://getform.io/f/bde6c720-c2d1-4372-953f-ee5950ad4869"
          method="POST"
          className="w-full max-w-md p-8 rounded-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 mb-4 w-full bg-medium-beige rounded-md text-white focus:outline-none placeholder-black"
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="p-2 mb-4 w-full bg-medium-beige rounded-md text-white focus:outline-none placeholder-black"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            className="p-2 mb-4 w-full bg-medium-beige rounded-md text-white focus:outline-none placeholder-black"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-medium-beige text-white rounded-md hover:scale-110 duration-300 font-bold text-lg"
            onClick={handleSubmit}
          >
            Let's Talk!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;





