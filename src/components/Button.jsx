export default function Button({ title, onClick }) {
    return <button onClick={onClick}>
        {title}
    </button>
    {/* {isButtonOpen && <div>{children}</div>} */ }
}