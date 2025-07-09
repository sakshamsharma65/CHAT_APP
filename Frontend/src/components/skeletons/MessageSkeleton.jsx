const MessageSkeleton = ({ count = 6 }) => {
  const skeletonMessages = Array(count).fill(null);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {skeletonMessages.map((_, idx) => (
        <div key={idx} className={`chat ${idx % 2 === 0 ? "chat-start" : "chat-end"}`}>
          <div className="chat-image avatar">
            <div className="size-10 rounded-full">
              <div className="skeleton w-full h-full rounded-full" aria-hidden="true" />
            </div>
          </div>

          <div className="chat-header mb-1">
            <div className="skeleton h-4 w-16" aria-hidden="true" />
          </div>

          <div className="chat-bubble bg-transparent p-0">
            <div
              className={`skeleton h-16 ${
                idx % 3 === 0 ? "w-[180px]" : idx % 3 === 1 ? "w-[140px]" : "w-[220px]"
              }`}
              aria-hidden="true"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default MessageSkeleton;