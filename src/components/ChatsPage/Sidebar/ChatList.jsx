import ChatItem from "./ChatItem";

function ChatList({ chats, selectedChat, setSelectedChat }) {
  return (
    <div>
      {chats?.map((chat) => (
        <ChatItem
          key={chat.id}
          chat={chat}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />
      ))}
    </div>
  );
}

export default ChatList;
