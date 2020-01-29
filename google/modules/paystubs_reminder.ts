class PaystubReminder {
    getTodaysEvents() {
        return CalendarApp.getDefaultCalendar().getEventsForDay(new Date());
    }

    checkIsThisMonths20thGoodForPaystubs() {
        return this.months20thIsBeforeOrOnThursday();
    }

    checkIsNextMonths20thGoodForPaystubs() {
        return this.nextMonths20thIsBeforeOrOnThursday();
    }

    checkIsTodayGoodForPaystubs() {
        return this.todayIsBeforeOrOnThe20th() && this.todayIsBeforeOrOnThursday() && this.todayIsWithinTheWeekBefore20th();
    }

    private todayIsWithinTheWeekBefore20th() {
        return this.todayIsBeforeThe20th() && this.todayIsOneWeekBeforeThe20th();
    }

    private todayIsOneWeekBeforeThe20th() {
        return this.getTodaysDate().getDate() >= this.getOneWeekBeforeThe20th();
    }

    private todayIsBeforeThe20th() {
        return this.getTodaysDate().getDate() <= this.getThe20th()
    }

    private getOneWeekBeforeThe20th() {
        return this.getThe20th() - this.getOneWeek()
    }

    private todayIsBeforeOrOnThursday() {
        return this.getTodaysDate().getDay() <= this.getThursday();
    }

    private todayIsBeforeOrOnThe20th() {
        return this.getTodaysDate().getDate() <= this.getThe20th();
    }

    private months20thIsBeforeOrOnThursday() {
        return this.getThisMonths20th().getDay() <= this.getThursday();
    }

    private nextMonths20thIsBeforeOrOnThursday() {
        return this.getNextMonths20th().getDay() <= this.getThursday();
    }

    private getNextMonths20th() {
        return new Date(this.getThisMonths20th().setMonth(this.getNextMonth()));
    }

    private getNextMonth() {
        return this.getThisMonth() + 1;
    }

    private getThisMonth() {
        return this.getTodaysDate().getMonth();
    }

    private getThisMonths20th() {
        return new Date(this.getTodaysDate().setDate(this.getThe20th()));
    }

    private getThursday() {
        return 4;
    }

    private getThe20th() {
        return 20;
    }

    private getOneWeek() {
        return 7;
    }

    private getTodaysDate() {
        return new Date();
    }
}