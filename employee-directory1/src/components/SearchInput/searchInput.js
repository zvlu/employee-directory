import React from 'react';
import "./style.css";


import { AppContext, EventContext } from '../AppContexts';

export default function SearchInput() {
    const appContext = React.useContext(AppContext);
    const eventContext = React.useContext(EventContext);
    return (
        <div className="input"> 
            <input 
            placeholder="search email only"
            value={appContext.searchText}
            onChange={eventContext.onSearchInputChange}
        />
        </div>
        
    )
}