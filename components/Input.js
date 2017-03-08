export default ({ value, onChange }) => (
    <input
        style={{
            padding: 5,
            border: '1px solid black',
            width: '100%',
        }}
        value={value}
        onChange={e => onChange(e.target.value)}
    />
)