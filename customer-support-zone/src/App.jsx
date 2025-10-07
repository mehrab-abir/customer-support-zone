import Navbar from './Components/Navbar'
import MobileNavbar from './Components/MobileNavbar'
import Footer from './Components/Footer'
import StatusCounter from './Components/Status_counter/StatusCounter'
import TicketsContainer from './Components/TicketsManager/TicketsContainer'
import TicketStatus from './Components/TicketsManager/TicketStatus'
import NewTicketButton from './Components/NewTicketButton'
import { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [tickets, setTickets] = useState([]);

  const [clickedTickets, setClickedTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const [progressCounter, setProgressCounter] = useState(0);
  const [resolvedCounter, setResolvedCounter] = useState(0);

  const loadTicketData = () =>{
      fetch(`tickets.json`)
      .then(response => response.json())
      .then(data => setTickets(data))
      .catch(error => console.log("Error: ",error))
  }

  useEffect(()=>{
    loadTicketData();
  },[])

  const handleTicketClick = (ticket) =>{
      const latestClickedTickets = [...clickedTickets,ticket];
      setClickedTickets(latestClickedTickets)

      setProgressCounter(progressCounter+1);

      toast("Ticket In-Progress...");
  }

  const handleCompletion = (ticket) =>{
    toast("Ticket resolved ✅");

    setResolvedCounter(resolvedCounter+1);
    setProgressCounter(progressCounter-1);

    const newResolved = [...resolvedTickets, ticket];
    setResolvedTickets(newResolved);

    /* removing completed tickets from In-progress ticket list */
    setClickedTickets(clickedTickets.filter(t=>t.id != ticket.id))

    /* removing completed tickets from customer tickets container */
    setTickets(tickets.filter(t=>t.id != ticket.id));
  }
  return (
    <>
      <Navbar></Navbar>
      <MobileNavbar></MobileNavbar>

      <NewTicketButton></NewTicketButton>

      <StatusCounter 
        progressCounter={progressCounter}
        resolvedCounter={resolvedCounter}
      ></StatusCounter>

      <div className='w-[95%] mx-auto grid grid-cols-1 md:grid-cols-6 gap-5 mb-8'>
        <TicketsContainer tickets={tickets} handleTicketClick={handleTicketClick}></TicketsContainer>
        <TicketStatus clickedTickets={clickedTickets} resolvedTickets={resolvedTickets} handleCompletion={handleCompletion}></TicketStatus>
      </div>

      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
