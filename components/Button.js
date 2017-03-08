export default ({ children }) => (
    <button>
        {children}
    <style jsx>{`
        button {
            width: 100%;
            background: red;
        }
    `}</style>
    </button>
)