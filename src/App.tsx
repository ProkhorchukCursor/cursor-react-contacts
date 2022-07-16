import React, { useState } from "react";

import { Container, Divider, Link, Typography } from "@mui/material";

import { ContactsList, Filter } from "./components";

function App() {
 const [search, setSearch] = useState("");
 const [filterMale, setFilterMale] = useState(true);
 const [filterFemale, setFilterFemale] = useState(true);
 const [filterNoGender, setFilterNoGender] = useState(true);

 return (
  <Container>
   <Typography variant="h5" color="#939596" sx={{ textAlign: "center" }}>
    15-test-homework
   </Typography>
   <Link
    href="https://prokhorchukcursor.github.io/cursor-hw/index.html"
    underline="hover"
   >
    &#8666; To main
   </Link>
   <Divider />
   <Typography variant="h2" color="#348feb">
    Phonebook
   </Typography>
   <Divider />
   <Filter
    search={search}
    setSearch={setSearch}
    filterMale={filterMale}
    setFilterMale={setFilterMale}
    filterFemale={filterFemale}
    setFilterFemale={setFilterFemale}
    filterNoGender={filterNoGender}
    setFilterNoGender={setFilterNoGender}
   />
   <Divider />
   <ContactsList
    search={search}
    filterMale={filterMale}
    filterFemale={filterFemale}
    filterNoGender={filterNoGender}
   />
  </Container>
 );
}

export default App;
