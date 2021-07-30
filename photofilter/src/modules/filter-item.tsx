import React from 'react';
import { IFilter } from './filter-panel';

export interface IFilterItemProps {
    onInputChange: (value: number) => void;
}
export function FilterItem(props: IFilterItemProps) {
    return <input type='range' onInput={(event) => {
        props.onInputChange(event.currentTarget.valueAsNumber)
    }}></input>
}