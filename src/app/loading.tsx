export default function Loading() {
  return (
    <div className="py-[200px] bg-blackish flex items-center justify-center gap-14">
      <div className="loading-animation">
        <h1 className="text-white text-4xl flex items-end">
          Loading
          <span className="bg-orangeLike loading loading-dots loading-lg align-bottom ml-2"></span>
        </h1>
      </div>
    </div>
  );
}
