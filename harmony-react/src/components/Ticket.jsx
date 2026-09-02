import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { API_URL, getTicket } from '../api';

export default function Ticket() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const [ticket, setTicket] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        let timer;
        let attempts = 0;

        async function load() {
            try {
                const data = await getTicket(id);
                setTicket(data);
                // Stripe webhooks can arrive just after the browser redirect.
                if (data.payment_status === 'pending' && attempts < 8) {
                    attempts += 1;
                    timer = setTimeout(load, 1500);
                }
            } catch (err) {
                setError(err.message);
            }
        }

        load();
        return () => clearTimeout(timer);
    }, [id, searchParams]);

    if (error) return <main className="ticket-page"><div className="ticket-card"><h2>{error}</h2><Link to="/buy-ticket">Buy a ticket</Link></div></main>;
    if (!ticket) return <main className="ticket-page"><div className="ticket-card"><p>Loading your ticket...</p></div></main>;

    const verificationUrl = `${window.location.origin}/verify/${ticket.ticket_number}`;
    const paid = ticket.payment_status === 'paid';

    return (
        <main className="ticket-page">
            <div className="museum-ticket">
                <div className="ticket-top">
                    <div className="crescent" />
                    <img src="/images/harmony-round-removebg-preview.png" className="museum-logo" alt="Harmony Heritage Museum" />
                    <h1>Harmony</h1>
                    <p>HERITAGE MUSEUM</p>
                    <div className="gold-line" />
                    <h2>ADMISSION TICKET</h2>
                </div>

                <div className={`payment-badge ${paid ? 'paid' : 'pending'}`}>
                    {paid ? '✓ PAYMENT CONFIRMED' : 'PAYMENT PROCESSING'}
                </div>

                <div className="ticket-info">
                    <Info label="VISITOR" value={ticket.visitor_name} />
                    <Info label="TICKET TYPE" value={ticket.ticket_type} />
                    <Info label="EMAIL" value={ticket.visitor_email} />
                    <Info label="QUANTITY" value={ticket.quantity} />
                    <Info label="VISIT DATE" value={ticket.visit_date?.slice(0, 10)} />
                    <Info label="TIME" value={String(ticket.visit_time).slice(0, 5)} />
                    <Info label="TICKET NO." value={ticket.ticket_number} />
                    <Info label="TOTAL" value={`$${Number(ticket.total_price).toFixed(2)}`} />
                </div>

                <div className="qr-section">
                    <QRCodeSVG value={verificationUrl} size={150} level="M" includeMargin />
                    <p>SCAN TO VERIFY TICKET</p>
                    <small>Present this QR code at the museum entrance.</small>
                </div>

                <div className="ticket-bottom">
                    <div className="bottom-line" />
                    <p>Preserving Our Past, Inspiring Our Future.</p>
                    <span>Harmony Heritage Museum • Cambodia</span>
                </div>

                <Link className="ticket-home" to="/">Back to Museum</Link>
            </div>
        </main>
    );
}

function Info({ label, value }) {
    return <div className="info-item"><span>{label}</span><strong>{value}</strong></div>;
}
