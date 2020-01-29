function myFunction() {
    for (var i = 0; i < new PaystubQueries().getTodaysEvents().length; i++) {
        Logger.log(new PaystubQueries().getTodaysEvents()[i].getTitle())
        Logger.log(new PaystubQueries().getTodaysEvents()[i].getStartTime())
        Logger.log(new PaystubQueries().getTodaysEvents()[i].getEndTime())
    }

    if (new PaystubQueries().isTodayGoodForPaystubs) {
        new PaystubActions().createCalendarEvent();
    }
    Logger.log("isThisMonths20thGoodForPaystubs?\t" + new PaystubQueries().isThisMonths20thGoodForPaystubs)
    Logger.log("isNextMonths20thGoodForPaystubs?\t" + new PaystubQueries().isNextMonths20thGoodForPaystubs)
    Logger.log("isTodayGoodForPaystubs?\t" + new PaystubQueries().isTodayGoodForPaystubs)
    return;
}
