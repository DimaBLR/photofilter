import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { FilterPanel, IFilter, IFilters } from './modules/filter-panel';
import { ControlPanel } from './modules/control-panel';
import { ViewPort } from './modules/viewport';

export function PhotoFilter() {
    const [img, setImg] = useState('');
    const [filters, setFilters] = useState<IFilters>({blur: 0, sepia: 0, inversion: 0});
    return <div>
        <ControlPanel onImageChange={(image) => {
           setImg(image.toString())
        }} /> 
              
        <FilterPanel onFiltersChange={(filters: IFilter) => {
            setFilters((prevState) => {
                return {...prevState, [filters.name]: filters.value}
            });
        }}/>
        <ViewPort image={img} filters={filters} />
        </div>
}


export function App() {
 return <Fragment>
     <PhotoFilter />
 </Fragment>
}


