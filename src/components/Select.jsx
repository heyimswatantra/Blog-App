import React, {useId} from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {
    
    const id = useId()

    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=''></label>}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white
                text-black outline-none focus:bg-gray-50
                duration-200 border border-gray-200 w-full
                ${className}`}
            >
                {/* maybe options  null ho to uspe loop krne pe crash ho skta h */}
                {/* isiley optional map krna chahiye */}
                {options.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    )
}

// another way to use forwardRef
export default React.forwardRef(Select)