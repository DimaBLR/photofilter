import React, { useState } from 'react';
import {FilterItem} from './filter-item';

export interface IFilter {
    name: string,
    value: number
}

export interface IFilterPanelProps {
    onFiltersChange: (filters: IFilter) => void
   }

export interface IFilters {
    blur: number,
    sepia: number,
    inversion: number
}

export function FilterPanel(props:IFilterPanelProps) {
   // const filters = new Map([['blur', 0], ['sepia', 0], ['inversion', 0]]);
   const [filters, setFilters] = useState<IFilters>({blur: 0, sepia: 0, inversion: 0});
    
    return <div>
        <FilterItem onInputChange={(value)=> {
            props.onFiltersChange({value, name:'blur'})
            setFilters((prevState) => {
                return {...prevState, blur: value}
            });
        }} />
       <FilterItem onInputChange={(value)=> {
           props.onFiltersChange({value, name:'sepia'})
            setFilters((prevState) => {

                return {...prevState, sepia: value}
            });
        }} />
        <FilterItem onInputChange={(value)=> {
            props.onFiltersChange({value, name:'inversion'})
            setFilters((prevState) => {
                return {...prevState, inversion: value}
            });
        }} />
        </div>
}