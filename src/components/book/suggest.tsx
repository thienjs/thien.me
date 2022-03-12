import { useState } from "react";


import useBookSuggestions from "~/lib/hooks/useBookSuggestions";
import { FiSend } from "react-icons/fi";

const Suggest = () => {
  const [title, setTitle] = useState<string>();
  const [author, setAuthor] = useState<string>();
  const [reason, setReason] = useState<string>();
  const [loading, setLoading] = useState<boolean>();


  const { sendSuggestion } = useBookSuggestions();


  const submit = async () => {
    if (title && author && reason) {
      setLoading(true);
      const res = await sendSuggestion(title, author, reason);
      if (res.success) {
        alert({
          status: "success",
          title: "Success!",
          description: "Thank you for sending me a book suggestion ❤️",
          isClosable: true,
        });
        setTitle("");
        setAuthor("");
        setReason("");
      } else {
        alert({
          status: "error",
          title: "Oops!",
          description: "Oh damn... Your suggestion didn't go through 😞",
          isClosable: true,
        });
      }
      setLoading(false);
    } else {
      alert({
        status: "warning",
        title: "Hey!",
        description: "All fields are required 😁",
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <button>Suggest me a book!</button>
      <div>
        <div>
          <div>
            <input />
          </div>
          <div>
            <input
              onChange={(e) => setAuthor(e.currentTarget.value)}
              placeholder="Author"
              required
              value={author}
            />
          </div>
          <div>
            <input
              onChange={(e) => setReason(e.currentTarget.value)}
              placeholder="Why would I like this book?"
              required
              value={reason}
            />
          </div>
          <div>
            <button>
              <span>Send suggestion</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Suggest;