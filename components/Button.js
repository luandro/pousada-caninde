export default ({ children }) => (
    <button>
        {children}
    <style jsx>{`
        button {
            width: 100%;
            background: #005FB6;
            color: #fff;
            text-align: center;
            padding: 10px 0;
        }
    `}</style>
    </button>
)