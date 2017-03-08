const baseStyle = {
    padding: '15px 0',
    border: '1px solid grey',
    width: '100%',
    borderRadius: 3,
}

export default ({ type, value, onChange }) => {
    if (type === 'textarea') {
        return (
            <textarea
                style={{ ...baseStyle, height: '150px' }}
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        )
    } else {
        return (
            <input
                style={{ ...baseStyle }}
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        )
    }
}
