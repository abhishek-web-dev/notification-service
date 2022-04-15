// start all cron jobs

//daily push notification cron
require('./dailyPushNotification').dailyPushNotificatioCron();

//push faild notification cron
require('./pushFaildNotification').pushFaildNotificatioCron();
