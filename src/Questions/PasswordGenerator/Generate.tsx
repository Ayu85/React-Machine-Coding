import React, { useState } from 'react'

const Generate = () => {
    const [length, setLen] = useState(4)
    const [uppercase, setupper] = useState(false)
    const [lower, setLower] = useState(false)
    const [num, setNum] = useState(false)
    const [symbol, setSymbol] = useState(false)
    const [password, setP] = useState('')
    const genPass = () => {
        let charset = "";
        let password = "";

        // Add uppercase characters if selected
        if (uppercase) {
            charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }

        // Add lowercase characters if selected
        if (lower) {
            charset += "abcdefghijklmnopqrstuvwxyz";
        }

        // Add numbers if selected
        if (num) {
            charset += "0123456789";
        }

        // Add symbols if selected
        if (symbol) {
            charset += "!@#$%^&*()_-+=<>?/[]{}|";
        }

        // Ensure at least one option is selected
        if (charset.length === 0) {
            alert("Please select at least one character type.");
            return;
        }

        // Generate the password
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }

        setP(password)
    };

    const copyToClipboard = () => {
        if (password) {
            navigator.clipboard.writeText(password)
                .then(() => {
                    alert("Password copied to clipboard!"); // Optional: Display an alert or custom message
                })
                .catch((err) => {
                    console.error("Failed to copy text: ", err);
                });
        }
    };

    return (
        <div>
            <div className='w-96 space-y-5 bg-black py-5 px-5'>
                <div className='flex justify-between '>
                    <h1>{password}</h1>
                    <button className='bg-teal-500 px-3 py-2' onClick={copyToClipboard}>
                        copy
                    </button>                </div>
                <div className='flex justify-between '>
                    <h1>Password Length</h1>
                    <h1>{length}</h1>
                </div>
                <div>
                    <input className='w-full' type="range" min={4} max={20} defaultValue={4} onChange={(e) => setLen(e.target.value)} name="" id="" />
                </div>
                <div className='flex justify-evenly gap-5 flex-wrap'>
                    <label htmlFor="" className='flex gap-1'>
                        <input type="checkbox" name="" id="" onChange={() => setupper(!uppercase)} />
                        <h1>Uppercase</h1>
                    </label>
                    <label htmlFor="" className='flex gap-1'>
                        <input type="checkbox" name="" id="" onChange={() => setLower(!lower)} />
                        <h1>Lowercase</h1>
                    </label>
                    <label htmlFor="" className='flex gap-1'>
                        <input type="checkbox" name="" id="" onChange={() => setNum(!num)} />
                        <h1>Numbers</h1>
                    </label>
                    <label htmlFor="" className='flex gap-1'>
                        <input type="checkbox" name="" id="" onChange={() => setSymbol(!symbol)} />
                        <h1>Symbols</h1>
                    </label>
                </div>
                <div className='flex justify-between '>
                    <h1>Password Strength</h1>
                    <h1>Weak</h1>
                </div>
                <button className='bg-teal-600 w-full py-3' onClick={genPass}>Generate password</button>
            </div>
        </div>
    )
}

export default Generate