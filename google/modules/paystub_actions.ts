class PaystubActions {
    constructor() {
        
    }

    public createCalendarEvent() {
        CalendarApp.getDefaultCalendar().createAllDayEvent("Send Paystubs", new Date(), new Date())
    }
}