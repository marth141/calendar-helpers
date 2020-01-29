function myFunction() {
    for (var i = 0; i < new PaystubReminder().getTodaysEvents().length; i++) {
        Logger.log(new PaystubReminder().getTodaysEvents()[i].getTitle())
        Logger.log(new PaystubReminder().getTodaysEvents()[i].getStartTime())
        Logger.log(new PaystubReminder().getTodaysEvents()[i].getEndTime())
    }
    Logger.log(new PaystubReminder().checkIsThisMonths20thGoodForPaystubs())
    Logger.log(new PaystubReminder().checkIsNextMonths20thGoodForPaystubs())
    Logger.log(new PaystubReminder().checkIsTodayGoodForPaystubs())
    return;
}
