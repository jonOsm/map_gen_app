interface GenBPButtonProps {
  handleClick: Function
}
export default function GenBPButton({ handleClick }: GenBPButtonProps) {
  return <button className="p-2 text-white bg-blue-700 border rounded" onClick={() => handleClick()}>Regenerate</button>
}
