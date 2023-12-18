import React from 'react';

interface ButtonProps {
    type: 'main' | 'secondary' | 'upload';
    content: string;
}

const Button: React.FC<ButtonProps> = ({ type, content }) => {
    let buttonContent;

    if (type === 'main') {
        buttonContent = (
            <div>
                <button className="w-[200px] h-[30px] text-white bg-[#0f0f0f] shadow-2xl rounded-full hover:opacity-90 transition duration-300 ease-in-out">
                    {content}
                </button>
            </div>
        );
    } else if (type === 'secondary') {
        buttonContent = (
            <div>
                <button className="w-[200px] h-[30px] text-white bg-[#0f0f0f] shadow-2xl rounded-[5px] hover:opacity-90 transition duration-300 ease-in-out">
                    {content}
                </button>
            </div>
        );
    } else if (type === 'upload') {
        buttonContent = (
            <div>
                <button className="w-[40px] h-[40px] text-white bg-[#0f0f0f] shadow-2xl rounded-[5px] hover:opacity-90 transition duration-300 ease-in-out">
                    +
                </button>
            </div>
        );
    }

    return (
        <div className={type === 'main' ? 'main-button' : 'secondary-button'}>
            {buttonContent}
        </div>
    );
};

export default Button;
