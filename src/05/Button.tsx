import React from 'react';

type ButtonType = {
    onclick: () => void
    name: string
}

export const Button = (props: ButtonType) => {
    const ocClickHandler = () => {
        props.onclick()
    }
    return (
        <div>
            <button onClick={ocClickHandler}>{props.name}</button>
        </div>
    );
};
