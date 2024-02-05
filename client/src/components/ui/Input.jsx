export const Input = ({label, placeholder, type, onChange}) => {
    return <div>
        <div className="text-sm font-medium text-left py-2">
            {label}
        </div>
        <input
            className="w-full px-2 py-1 border rounded border-gray-200"
            type={type}
            onChange={onChange}
            placeholder={placeholder}
        />
    </div>
}