export function Input({
  refs ,placeholder
}: {
  refs? : any
  placeholder: string;
  
}) {
  return (
    <div>
      <input
        placeholder={placeholder}
        ref={refs}
        type={"text"}
        className="px-4 py-2 border rounded m-2"
      ></input>
    </div>
  );
}
