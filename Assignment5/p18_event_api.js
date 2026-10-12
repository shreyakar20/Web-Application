const express = require('express');
const app = express();
const PORT = 5010;
// Middleware to read JSON data
app.use(express.json());
// In-memory event records
let events = [
    { id: 1, name: 'Tech Fest', date: '2026-11-15', venue: 'Auditorium' },
    { id: 2, name: 'Cultural Fest', date: '2026-12-10', venue: 'Campus Ground' }
];
// GET /events - Retrieve all events
app.get('/events', (req, res) => {
    res.status(200).json(events);
});
// GET /events/:id - Retrieve event by ID
app.get('/events/:id', (req, res) => {
    const id = Number(req.params.id);
    const event = events.find(e => e.id === id);
    if (!event) {
        return res.status(404).json({
            message: 'Event not found'
        });
    }
    res.status(200).json(event);
});
// POST /events - Add a new event
app.post('/events', (req, res) => {
    const { id, name, date, venue } = req.body;
    if (id == null || !name || !date || !venue ||
        !Number.isInteger(Number(id)) || Number(id) <= 0) {
        return res.status(400).json({
            message: 'Provide valid id, name, date and venue'
        });
    }
    if (events.some(e => e.id === Number(id))) {
        return res.status(409).json({
            message: 'Event ID already exists'
        });
    }
    const newEvent = {
        id: Number(id),
        name,
        date,
        venue
    };
    events.push(newEvent);
    res.status(201).json({
        message: 'Event added successfully',
        event: newEvent
    });
});
// PUT /events/:id - Update event details
app.put('/events/:id', (req, res) => {
    const id = Number(req.params.id);
    const event = events.find(e => e.id === id);
    if (!event) {
        return res.status(404).json({
            message: 'Event not found'
        });
    }
    const { name, date, venue } = req.body;
    if (!name || !date || !venue) {
        return res.status(400).json({
            message: 'Provide name, date and venue'
        });
    }
    event.name = name;
    event.date = date;
    event.venue = venue;
    res.status(200).json({
        message: 'Event updated successfully',
        event
    });
});
// DELETE /events/:id - Delete an event
app.delete('/events/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = events.findIndex(e => e.id === id);
    if (index === -1) {
        return res.status(404).json({
            message: 'Event not found'
        });
    }
    const deletedEvent = events.splice(index, 1)[0];
    res.status(200).json({
        message: 'Event deleted successfully',
        event: deletedEvent
    });
});
// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found'
    });
});
// Start server
app.listen(PORT, () => {
    console.log(`Event API running at http://localhost:${PORT}`);
});
