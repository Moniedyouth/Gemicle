Feature: Test Redmine website

Scenario: Check that we went to the Login page
    When Click on the Login button on main page
    Then Name of register form should have text 'Регистрация '

Scenario: Registrete with valid credentials
    When Click on the Login button on main page
    And Type into user input 'random username'
    And Type into password input 'name1295'
    And Type into confirmation input 'name1295'
    And Type into firstname input 'Name'
    And Type into lastname input 'Second Name'
    And Type into email input 'random email'
    And Click on the commit button
    Then Redirect to the page which has a flash notice with the text 'успешно'

Scenario: Registrete with invalid credentials: with just 1 space
    When Click on the Login button on main page
    And Type into user input just ' '
    And Type into password input just ' '
    And Type into confirmation input just ' '
    And Type into firstname input just ' '
    And Type into lastname input just ' '
    And Type into email input just ' '
    And Click on the commit button
    Then Redirect to the page which has a flash notice with the list of errors
    
Scenario: Check image at Projects page
    When Click on Multiple projects support link
    Then On the new page should be a picture

Scenario: Check checkboxes at Roadmap page
    When Click on the 'Оперативный план' in the main menu
    Then 'Defect', 'Feature', 'Patch' checkboxes are not disabled and should be checked
    
Scenario: Verifies Redmine releases download
    When Click on the 'Download' button in the main menu
    And Click on the 'redmine-4.2.4.zip' link
    Then File with name 'redmine-4.2.4.zip' should be downloaded