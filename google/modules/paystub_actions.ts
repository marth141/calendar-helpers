class PaystubActions {
    constructor() {
        
    }

    createCalendarEvent() {
        CalendarApp.getDefaultCalendar().createAllDayEvent("Send Paystubs", new Date(), new Date())
    }
}