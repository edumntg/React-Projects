import "./Slot.css"

export default function Slot({letter, status}) {
    return (
        <button className={`slot-${status}`}>{letter}</button>
    )
}