import { useState } from "react";


import useBookSuggestions from "src/hooks/use-book-suggestions";
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
      <button
        {...getButtonProps()}
        h={6}
        mb={3}
        color="purple.500"
        fontSize="sm"
        fontWeight="normal"
        onClick={onToggle}
        variant="unstyled"
      >
        Suggest me a book!
      </button>
      <div>
        <div
      
        >
          <div>
            <input
            />
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
            <button
              w={10}
              _hover={{ width: "186px" }}
              aria-label="Send Suggestion"
              isLoading={loading}
              onClick={submit}
              rightIcon={<Icon as={FiSend} ml={-2} _groupHover={{ ml: 0 }} />}
              role="group"
              transitionDuration="slower"
              transitionProperty="all"
              transitionTimingFunction="ease-out"
            >
              <span
                overflow="hidden"
                width={0}
                opacity={0}
                _groupHover={{ width: "auto", opacity: 1 }}
                transitionProperty="all"
                transitionDuration="slower"
                transitionTimingFunction="ease-out"
              >
                Send suggestion
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggest;