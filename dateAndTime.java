import java.util.Calendar;
import java.util.GregorianCalendar;

class dateAndTime {
    public static void main(String[] args) {
        // method-1
        // long millis = System.currentTimeMillis();
        // java.sql.Date date = new java.sql.Date(millis);
        // System.out.println(date);

        // method-2
        int day, month, year;
        int second, minute, hour;

        GregorianCalendar date = new GregorianCalendar();

        day = date.get(Calendar.DAY_OF_MONTH);
        month = date.get(Calendar.MONTH);
        year = date.get(Calendar.YEAR);

        second = date.get(Calendar.SECOND);
        minute = date.get(Calendar.MINUTE);
        hour = date.get(Calendar.HOUR);

        System.out.println("Current time is: " + hour + ":" + minute + ":" + second);
        System.out.println("Today's date is: " + day + "/" + month + "/" + year);

    }
}