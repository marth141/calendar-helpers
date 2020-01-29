class PaystubQueries {
    isTodayGoodForPaystubs: boolean;
    isNextMonths20thGoodForPaystubs: boolean;
    isThisMonths20thGoodForPaystubs: boolean;

    constructor() {
        this.isTodayGoodForPaystubs = this.queryIsTodayGoodForPaystubs()
        this.isNextMonths20thGoodForPaystubs = this.queryIsNextMonths20thGoodForPaystubs()
        this.isThisMonths20thGoodForPaystubs = this.queryIsThisMonths20thGoodForPaystubs()
    }

    public getTodaysEvents() {
        return CalendarApp.getDefaultCalendar().getEventsForDay(new Date());
    }

    private queryIsThisMonths20thGoodForPaystubs() {
        return this.getBoolThisMonths20thIsBeforeOrOnThursday();
    }

    private queryIsNextMonths20thGoodForPaystubs() {
        return this.getBoolNextMonths20thIsBeforeOrOnThursday();
    }

    private queryIsTodayGoodForPaystubs() {
        return this.getBoolTodayIsBeforeOrOnThe20th() && this.getBoolTodayIsBeforeOrOnThursday() && this.getBoolTodayIsWithinTheWeekBefore20th();
    }

    private getBoolTodayIsWithinTheWeekBefore20th() {
        return this.getBoolTodayIsBeforeThe20th() && this.getBoolTodayIsOneWeekBeforeThe20th();
    }

    private getBoolTodayIsOneWeekBeforeThe20th() {
        return this.getDateTodaysDate().getDate() >= this.getNumOneWeekBeforeThe20th();
    }

    private getBoolTodayIsBeforeThe20th() {
        return this.getDateTodaysDate().getDate() <= this.getNumThe20th()
    }

    private getBoolTodayIsBeforeOrOnThursday() {
        return this.getDateTodaysDate().getDay() <= this.getNumThursday();
    }

    private getBoolTodayIsBeforeOrOnThe20th() {
        return this.getDateTodaysDate().getDate() <= this.getNumThe20th();
    }

    private getBoolThisMonths20thIsBeforeOrOnThursday() {
        return this.getDateThisMonths20th().getDay() <= this.getNumThursday();
    }

    private getBoolNextMonths20thIsBeforeOrOnThursday() {
        return this.getDateNextMonths20th().getDay() <= this.getNumThursday();
    }

    private getDateNextMonths20th() {
        return new Date(this.getDateThisMonths20th().setMonth(this.getNumNextMonth()));
    }

    private getNumNextMonth() {
        return this.getNumThisMonth() + 1;
    }

    private getNumThisMonth() {
        return this.getDateTodaysDate().getMonth();
    }

    private getDateThisMonths20th() {
        return new Date(this.getDateTodaysDate().setDate(this.getNumThe20th()));
    }

    private getNumOneWeekBeforeThe20th() {
        return this.getNumThe20th() - this.getNumOneWeek()
    }

    private getDateTodaysDate() {
        return new Date();
    }

    private getNumThursday() {
        return 4;
    }

    private getNumThe20th() {
        return 20;
    }

    private getNumOneWeek() {
        return 7;
    }
}