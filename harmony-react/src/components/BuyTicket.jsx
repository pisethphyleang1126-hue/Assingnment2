import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { createCheckoutSession } from '../api';

const ticketOptions = [
    { value: 'standard', label: 'Standard', price: 5 },
    { value: 'student', label: 'Student', price: 3 },
    { value: 'child', label: 'Child', price: 0 },
];

export default function BuyTicket() {
    const [searchParams] = useSearchParams();
    const [form, setForm] = useState({
        name: '', email: '', date: '', time: '', ticketType: 'standard', quantity: 1,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const selected = ticketOptions.find((item) => item.value === form.ticketType);
    const total = useMemo(() => selected.price * Number(form.quantity || 1), [selected, form.quantity]);

    function updateField(event) {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
    }

    async function submit(event) {
        event.preventDefault();
        setError('');
        setLoading(true);

        try {
            const data = await createCheckoutSession({ ...form, quantity: Number(form.quantity) });
            window.location.href = data.checkoutUrl || data.ticketUrl;
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }

    return (
        <main className="ticket-page">
            <form className="ticket-form" onSubmit={submit}>
                <div className="ticket-form-logo">
                    <img src="/images/harmony-round-removebg-preview.png" alt="Harmony Heritage Museum" />
                    <div>
                        <h1>Harmony</h1>
                        <p>Heritage Museum</p>
                    </div>
                </div>

                <h2>Purchase Your Ticket</h2>
                <p className="form-intro">Reserve your museum visit, then complete payment securely with Stripe.</p>

                {searchParams.get('cancelled') && (
                    <div className="form-message">Payment was cancelled. Your pending booking has been kept in the database.</div>
                )}
                {error && <div className="form-error">{error}</div>}

                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" value={form.name} onChange={updateField} required />

                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={updateField} required />

                <div className="form-grid">
                    <div>
                        <label htmlFor="date">Visit Date</label>
                        <input id="date" name="date" type="date" min={new Date().toISOString().split('T')[0]} value={form.date} onChange={updateField} required />
                    </div>
                    <div>
                        <label htmlFor="time">Visit Time</label>
                        <input id="time" name="time" type="time" value={form.time} onChange={updateField} required />
                    </div>
                </div>

                <label htmlFor="ticketType">Ticket Type</label>
                <select id="ticketType" name="ticketType" value={form.ticketType} onChange={updateField} required>
                    {ticketOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label} - {option.price === 0 ? 'Free' : `$${option.price}`}
                        </option>
                    ))}
                </select>

                <label htmlFor="quantity">Quantity</label>
                <input id="quantity" name="quantity" type="number" min="1" max="20" value={form.quantity} onChange={updateField} required />

                <div className="ticket-total">
                    <span>Total</span>
                    <strong>${total.toFixed(2)}</strong>
                </div>

                <button className="purchase-btn" type="submit" disabled={loading}>
                    {loading ? 'Preparing secure payment...' : 'Continue to Payment'}
                </button>
                <Link className="back-btn" to="/">Back</Link>
            </form>
        </main>
    );
}
