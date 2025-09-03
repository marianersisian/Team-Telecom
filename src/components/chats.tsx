import React, { FC } from "react";

const ChatBlock: FC = () => {
  return (
    <>
      <div className="w-[120px] h-[40px] fixed bottom-0 right-[300px] bg-blue-700 text-white z-10 rounded-t-[15px] pt-2 pl-8 group">
        Chatting
      </div>
      <div className="w-[300px] h-[400px] bg-blue-300"></div>
    </>
  );
};

export default ChatBlock;
