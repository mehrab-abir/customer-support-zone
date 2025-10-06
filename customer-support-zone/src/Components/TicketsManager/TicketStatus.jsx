import React from 'react';

const TicketStatus = ({clickedTickets,resolvedTickets,handleCompletion}) => {
    const noTask = <div>
        <p className="text-center text-lg text-gray-500 font-bold mb-5 bg-gray-300 p-4">-Select a ticket to add to task status-</p>
    </div>

    const noResolved = <div>
        <p className="text-center text-lg text-gray-500 font-bold mb-5 bg-gray-300 p-4">-No Resolved Task Yet-</p>
    </div>
    return (
        <div className='col-span-2' id="ticketStatus">  
            <div>
                <h1 className="text-2xl font-bold mb-3">Task Status</h1>
                {
                clickedTickets.length === 0 ? noTask :
                clickedTickets.map(ticket => {
                    return (
                        <div key={ticket.id} className='bg-white p-3 shadow-sm rounded-sm mb-3'>
                            <h1 className="text-xl font-bold">{ticket.title}</h1>
                            <button className='bg-green-600 text-white w-full py-2 rounded-lg mt-4 cursor-pointer font-bold' onClick={()=>handleCompletion(ticket)}>Complete</button>
                        </div>
                        )
                    })
                }
            </div>

            <div>
                <h1 className="text-2xl font-bold mb-3">Resolved Task</h1>
                {
                    resolvedTickets.length === 0 ? noResolved :
                    resolvedTickets.map(ticket =>{
                        return (
                            <div key={ticket.id} className='bg-blue-200 p-3 shadow-sm rounded-sm mb-3'>
                                <h1 className="text-xl font-bold">{ticket.title}</h1>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    );
};

export default TicketStatus;