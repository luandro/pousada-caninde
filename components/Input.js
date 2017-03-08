export default ({ value, onChange }) => (
    <input
        style={{
            padding: '10px 0',
            border: '1px solid black',
            width: '100%',
        }}
        value={value}
        onChange={e => onChange(e.target.value)}
    />
)