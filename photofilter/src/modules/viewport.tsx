import React, { useEffect, useRef } from 'react';
import { IFilters } from './filter-panel';

export interface IViewPortProps {
    image: string;
    filters: IFilters
}

export function ViewPort(props: IViewPortProps) {
    const canvas = useRef<HTMLCanvasElement>(null);    

    useEffect(() => {
        const ctx = canvas.current.getContext('2d');
        const img = new Image();
        img.src = props.image;
        img.onload =()=> {
            ctx.filter = `invert(${props.filters.inversion}%) sepia(${props.filters.sepia}) blur(${props.filters.blur}px)`;
           //ctx.filter = `sepia(${props.filters.sepia}) blur(${props.filters.blur}px) inversion(${props.filters.inversion}%)`;
            console.log(ctx.filter)
            ctx.drawImage(img, 0, 0);
        };
        
        
      });

    return <div>
        <canvas ref={canvas}>
        
        </canvas>
        </div>
}