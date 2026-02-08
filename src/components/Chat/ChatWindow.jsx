import { useState } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import HotelCard from "./HotelCard";
import { hotels } from "../../data/hotels";

function ChatWindow() {
  const [messages, setMessages] = useState([
    { text: "Hi! Where do you want to travel?", sender: "bot" },
  ]);

  const [stage, setStage] = useState("destination");
  const [trip, setTrip] = useState({
    destination: "",
    budget: "",
    people: "",
    hotel: null,
  });

  const handleSend = (userMessage) => {
    setMessages((prev) => [
      ...prev,
      { text: userMessage, sender: "user" },
    ]);

    setTimeout(() => {
      if (stage === "destination") {
        setTrip((p) => ({ ...p, destination: userMessage }));
        setMessages((p) => [
          ...p,
          { text: "Great! What is your budget?", sender: "bot" },
        ]);
        setStage("budget");
      } else if (stage === "budget") {
        setTrip((p) => ({ ...p, budget: userMessage }));
        setMessages((p) => [
          ...p,
          { text: "How many people are traveling?", sender: "bot" },
        ]);
        setStage("people");
      } else if (stage === "people") {
        setTrip((p) => ({ ...p, people: userMessage }));
        setMessages((p) => [
          ...p,
          {
            text: "Here are some hotels you can choose from:",
            sender: "bot",
            hotels: hotels,
          },
        ]);
        setStage("hotels");
      }
    }, 500);
  };

  const handleHotelSelect = (hotel) => {
    setTrip((p) => ({ ...p, hotel }));
    setMessages((p) => [
      ...p,
      {
        text: `
✅ Hotel Selected!

🧾 Trip Summary
📍 Destination: ${trip.destination}
💰 Budget: ${trip.budget}
👥 People: ${trip.people}
🏨 Hotel: ${hotel.name}
💵 ₹${hotel.price} / night

Your trip is planned 🎉
        `,
        sender: "bot",
      },
    ]);
    setStage("done");
  };

  return (
    <div
      style={{
        height: "calc(100vh - 60px)",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f7fa",
      }}
    >
      <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        {messages.map((msg, i) => (
          <div key={i}>
            {msg.text && (
              <MessageBubble text={msg.text} sender={msg.sender} />
            )}

            {msg.hotels &&
              msg.hotels.map((hotel) => (
                <HotelCard
                  key={hotel.id}
                  hotel={hotel}
                  onSelect={handleHotelSelect}
                />
              ))}
          </div>
        ))}
      </div>

      <ChatInput onSend={handleSend} disabled={stage === "done"} />
    </div>
  );
}

export default ChatWindow;
