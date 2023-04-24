interface GenBPButtonProps {
  handleClick: Function
}
export default function GenBPButton({ handleClick }: GenBPButtonProps) {
  return (
    <button
      className="p-2 text-xs text-white bg-blue-700 border rounded sm:text-base"
      onClick={() => handleClick()}
    >
      Regenerate
    </button>
  )
}
