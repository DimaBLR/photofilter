import React from 'react';

export interface IControlPanelProps {
    onImageChange: (imageData: string | ArrayBuffer) => void
}

export function ControlPanel(props: IControlPanelProps) {
    const loadImg: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const reader = new FileReader();
        reader.onload = () => {
            props.onImageChange(reader.result)
        //const loadImg = new Image();
        //loadImg.src = reader.result;        
    }
    reader.readAsDataURL(event.target.files[0]);
    
    }
    return <div>
        <input type='file' onChange = {loadImg} />
    </div>
}