import React from "react";
import Header from "./components/Header"
import Wrapper from "./components/Wrapper"
import Table from "./components/Table/table";
import SearchInput from "./components/SearchInput/searchInput";
import { AppContext, EventContext } from "./components/AppContexts";
import Main from "./pages/Main"

export default function App() {
  const [searchText, setSearchText] = React.useState('');

  const handleSearchInputChange = (event) => {
    console.log(event)

    setSearchText(event.currentTarget.value);
  }

  const appContext = {
    searchText,
  }

  const eventContext = {
    onSearchInputChange: handleSearchInputChange,
  }

  return (
    <Wrapper>
      <AppContext.Provider value={appContext}>
        <EventContext.Provider value={eventContext}>
          <div> 
              <Header />
              <Main />
          </div>
        </EventContext.Provider>
      </AppContext.Provider>
    </Wrapper>
  );
}