import { useState } from "react";

export const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.name.length < 3 || data.name.startsWith(" ")) {
      setError(
        "The name must have at least 3 characters and cannot start with a space."
      );
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setError("Please enter a valid email address.");
    } else if (data.message.length < 10) {
      setError("The message must have at least 10 characters.");
    } else {
      setError("");
      alert("Form submitted successfully.");
      setData({ name: "", email: "", message: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded p-8 dark:text-black flex flex-col gap-4 w-[300px]"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="border-2 border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="border-2 border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          placeholder="Type your message"
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          className="border-2 border-gray-300 rounded-md p-2"
        />
      </div>

      <button type="submit" className="bg-[#54b3c9] p-2 rounded-md text-white">
        Submit
      </button>
      {error.length > 0 && <h4 className="text-red-600">{error}</h4>}
    </form>
  );
};
