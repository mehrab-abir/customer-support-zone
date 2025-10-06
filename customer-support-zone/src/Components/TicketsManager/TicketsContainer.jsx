import React from 'react';
import Ticket from './Ticket';

const TicketsContainer = ({tickets, handleTicketClick}) => {
    return (
        <div className='col-span-4'>
            <h1 className="text-2xl font-bold mb-3">Customer Tickets</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                {
                    tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} handleTicketClick={handleTicketClick}></Ticket>)
                }
            </div>
        </div>
    );
};

export default TicketsContainer;