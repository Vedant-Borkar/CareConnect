import { ChannelFilters, ChannelOptions, ChannelSort, User } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  MessageInput,
  MessageList,
  Thread,
  Window,
  useCreateChatClient,
} from "stream-chat-react";
import { EmojiPicker } from "stream-chat-react/emojis";

import { init, SearchIndex } from "emoji-mart";
import data from "@emoji-mart/data";

// import "./layout.css";

const apiKey = "dz5f4d5kzrue";
const userId = "plain-mud-4";
const userName = "plain";
const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicGxhaW4tbXVkLTQiLCJleHAiOjE3MjQ5OTIzNjZ9.bGXH55OzUHAcTcSD03sD06y7AX8ugQpAwZ9QSOL1Ryg";

const user = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};

const sort = { last_message_at: -1 };
const filters = {
  type: "messaging",
  members: { $in: [userId] },
};

init({ data });

const App = () => {
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <ChannelList filters={filters} sort={sort} />
      <Channel EmojiPicker={EmojiPicker} emojiSearchIndex={SearchIndex}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default App;
