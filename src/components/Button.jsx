export default function Button({ title, children, isButtonOpen, onToggle }) {
    return <div>
        <button onClick={onToggle}>
            {title}
        </button>
        {isButtonOpen && <div>{children}</div>}
    </div>
}