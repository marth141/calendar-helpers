function myFunction() {
    for (var i = 0; i < new PaystubReminder().getTodaysEvents().length; i++) {
        Logger.log(new PaystubReminder().getTodaysEvents()[i].getTitle())
        Logger.log(new PaystubReminder().getTodaysEvents()[i].getStartTime())
        Logger.log(new PaystubReminder().getTodaysEvents()[i].getEndTime())
    }

    if (new PaystubReminder().isTodayGoodForPaystubs) {
        CalendarApp.getDefaultCalendar().createAllDayEvent("Send Paystubs", new Date(), new Date())
    }
    Logger.log("isThisMonths20thGoodForPaystubs?\t", new PaystubReminder().isThisMonths20thGoodForPaystubs)
    Logger.log("isNextMonths20thGoodForPaystubs?\t", new PaystubReminder().isNextMonths20thGoodForPaystubs)
    Logger.log("isTodayGoodForPaystubs?\t", new PaystubReminder().isTodayGoodForPaystubs)
    return;
}
