Task 1: Manual Test Cases for Monefy App

New Installation:
Scenario: Whenever the app is installed in a device, below cases should be verified
Test Cases:
1. Verify whether the Tips or suggestions for using the app is working
2. Verify the balance and Income/Expense value in Home screen should be zero

Generic Functionality: 1st Priority
Scenario: The generic functionality or the behavior of the app as it's designed and common for all scenarios
Test Cases:
1. Verify whether icons in the app works as expected when you tap it
2. Verify addition of Income/Expense is getting saved in the corresponding date it as it is added
3. Verify whether deletion of Income/Expense data is saved successfully and updated accordingly
4. Verify whether the banner message appears for every transaction added/deleted in the app
5. Verify when tapping Cancel button in the banner message removes/cancels the transaction made
6. Verify whether users are allowed to choose their preferred currency and language in Settings screen

Home Screen: 2nd Priority
Scenario: Since the app doesn't have multiple pages and its core value is in Home screen, we need to test it on priority thoroughly
Test Cases:
1. Verify value in balance icon in Home screen gets updated as per income/expense added/deleted
2. Verify color of the balance icon in Home screen changes to green and red based on positive and negative balance accordingly
3. Verify when an expense is added in a category, the corresponding category icon in Home screen should be updated with the percentage value of how much does it uses out of total expense value
4. Verify the pie-chart icon in Home screen gets updated with changes in expenses accordingly
5. Verify the income and expense value inside the pie-chart icon gets updated with changes accordingly
6. Verify whether the Home screen displays information as per the filter applied in the side navigation bar

Pro Features: 3rd Priority
Scenario: Users who have purchased the Monefy Pro should have access for the Pro Features 
Test Cases:
1. Verify only Pro users are allowed to add multiple currency, synchronization, passcode protection, new categories, extended widget, dark theme and recurring records

Balance Screen: 4th Priority
Scenario: The Balance screen contains all transactions happened in the time period chosen in the Home screen filter
Test Cases:
1. Verify tapping the Balance icon in Home screen navigates to balance screen and shows corresponding transactions as per the filter chosen in Home screen
2. Verify whether you are able to update/delete any particular transaction and the data changes accordingly in necessary places

Other Features:
Scenario: Apart from basic functionality, the app also provides many additional features which needs to be tested
Tets Cases:
1. Verify transfer functionality for transferring money between the accounts is working as expected
2. Verify whether user can create a new account successfully with Add Account functionality
3. Verify Balance functionalities in Settings screen like Budget mode, Carry over and Future recurring records are working as expected
4. Verify all functionalities in General Settings section in Settings screen is working as expected

Re-Installation with Device Data - Synchronization/Backup:
Scenario: The app was used by an user, he/she takes backup, uninstalls it but didn't delete the memory and then reinstalls app
Test Cases:
1. Verify Restore data functionality in the app displays all the backups made before uninstallation
2. Verify whether all the transactions/account information is displayed in the app when selecting a particular backup

Re-Installation without Device Data - No Synchronization/Backup:
Scenario: The app was used by an user, uninstalls it, he/she deletes memory permanently from device path and then reinstalls app
Test Cases:
1. Verify Restore data functionality in the app doesn't have any backup from memory

User Accessibility:
Scenario: We need to consider/ test following cases to build a good user-friendly app
Test Cases:
1. Verify all icons in the app are clearly visible and meaninigful for the user
2. Verify whether the app is responding quickly (highly responsive) to the changes made in the app which are mentioned in all the above scenarios
3. Verify the behavior of the app during interruptions like receiving calls, push notifications etc.
4. Verify the app works properly when it is used in split screen view
5. Verify the app does not run in background if its closed by the user
6. Verify the app works properly when it is moved to background by using Home button in mobile and then used again


Task 3: Automation Testing of RESTful API in Best Buy API Playground

Test Cases proposed for Automation:
1. Validate all the endpoints in the API are providing response by checking for status code: 200
2. Validate products, categories, stores and services endpoints with the schema (since all the endpoints are content data, it is wise to test them against schema)
3. Create a new product id, category id, store id and service id, and validate them in corresponding endpoints whether they are created as per the POST request
4. Delete the newly created id's as in above case and validate whether they are deleted in the API response
