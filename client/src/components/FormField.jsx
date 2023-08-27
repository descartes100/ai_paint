import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurprisMe }) => {
    return (
        <div>
            <div className='flex items-center gap-2 mb-2'>
                <label
                    htmlFor={name}
                    className='block text-sm font-medium text-gray-900'
                >
                    {labelName}
                </label>

                {isSurpriseMe && (
                    <button
                        type="button"
                        onClick={handleSurprisMe}
                        className='font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black'
                    >
                        Surprise Me
                    </button>
                )}
            </div>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
                className='bg-gray-50 border border-gray-500 text-gray text-sm rounded-lg focus:ring-2 focus:border-[#379a83] outline-none block w-full p-3'
            >
            </input>
        </div>
    )
}

export default FormField