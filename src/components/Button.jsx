export default function Button({ title, onClick, className }) {
    return <button onClick={onClick} className={className}>
        {title}
    </button>
}