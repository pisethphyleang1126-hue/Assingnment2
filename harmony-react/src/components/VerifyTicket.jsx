import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../api';

export default function VerifyTicket() {
    const { ticketNumber } = useParams();
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`${API_URL}/tickets/verify/${encodeURIComponent(ticketNumber)}`)
            .then(async (response) => {
                const data = await response.json();
                if (!response.ok) throw new Error(data.error || 'Ticket not found');
                return data;
            })
            .then(setResult)
            .catch((err) => setError(err.message));
    }, [ticketNumber]);

    return (
        <main className="ticket-page">
            <div className="ticket-card">
                {error ? (
                    <>
                        <h2>Ticket Not Found</h2>
                        <p>{error}</p>
                    </>
                ) : !result ? (
                    <p>Checking ticket...</p>
                ) : (
                    <>
                        <div className={`payment-badge ${result.valid ? 'paid' : 'pending'}`}>
                            {result.valid ? '✓ VALID TICKET' : 'TICKET NOT VALID'}
                        </div>
                        <h2>Harmony Heritage Museum</h2>
                        <p><strong>{result.ticket_number}</strong></p>
                        <p>Visitor: {result.visitor_name}</p>
                        <p>Type: {result.ticket_type}</p>
                        <p>Date: {String(result.visit_date).slice(0, 10)}</p>
                        <p>Time: {String(result.visit_time).slice(0, 5)}</p>
                        <p>Quantity: {result.quantity}</p>
                    </>
                )}
                <Link className="ticket-home" to="/">Back to Museum</Link>
            </div>
        </main>
    );
}
