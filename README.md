# Ionic-Sleep-Tracker

A sleep tracking app that allows users to log sleep data and view a history log of sleep data
There are three classes in the data folder:
- sleep-data
- overnight-sleep-data (subclass)
- stanford-sleepiness-data (subclass)
One service:
- sleep.service provides static variables for storing the logged data and a method for laoding default data

To run the app you will need Node JS that is updated to at least version 10. You will also need to install Ionic through npm "npm install -g ionic". You will also need to install the dependencies for the Ionic app. These dependencies are define din each project's respective package.json files. Locate into the sleeptracker directory and install the dependencies with "npm install"

Running the App
1. Go into the sleeptracker directory and run "ionic lab"

This application has implemented the following features:
1. The ability to log overnight sleep
2. The ability to log sleepiness during the day
3. The ability to view these two categories of logged data

