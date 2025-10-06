import React from 'react';

const Ticket = ({ticket, handleTicketClick}) => {
    return (
        <div className="ticketCard bg-white p-3 shadow-md cursor-pointer" onClick={() =>handleTicketClick(ticket)}>
            <div className='flex items-center justify-between'>
                <h1 className="font-bold">{ticket.title}</h1>
                <div className={`flex items-center justify-around py-1 px-4 rounded-3xl gap-2 -ml-3
                    ${
                        ticket.status === "Open"
                        ? 'bg-green-200'
                        : 'bg-yellow-200'
                    }
                    `}>
                    <span className={`w-[10px] h-[10px] rounded-full ${
                        ticket.status === "Open"
                        ? 'bg-green-700'
                        : 'bg-yellow-700'
                    }`}></span>
                    <span className={`${
                        ticket.status === "Open"
                        ? 'text-green-600'
                        : 'text-yellow-600'
                    }`}>{ticket.status}</span>
                </div>
            </div>

            <p className='text-gray-500 my-3'>{ticket.description}</p>

            <div className='flex items-center justify-between'>
                <div>
                    <span className='text-sm text-gray-500 mr-3'>#{ticket.id}</span>
                    <span className={`text-sm font-semibold ${
                        ticket.priority === "HIGH PRIORITY" 
                        ? 'text-red-500'
                        : ticket.priority === "LOW PRIORITY"
                        ? 'text-green-500'
                        : 'text-yellow-500'
                    }`}>{ticket.priority}</span>
                </div>

                <div>
                    <span className='text-sm text-gray-500 mr-3'>{ticket.customer}</span>
                    <span className='text-sm text-gray-500'>{ticket.createdAt}</span>
                </div>
            </div>
        </div>
    );
};

export default Ticket;