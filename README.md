# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## About

Assumption: midday forecasts (from three hour forecasts array) are best to describe the day's weather. This is because requirements use singular form to show forecast for the day.

Features:

- state - NgRx and facade pattern
- api service
- adapter pattern
- component architecture; container-presenter pattern
- reactive programming
- accessibility
- responsive design
- unit tests
- svg spritesheet
- error / no forecast messages

Note: In an app this size I wouldn’t ordinarily use NgRx but I’ve used it in this case to demonstrate how it can be wired in using the Facade Pattern. I’ve also used several other practices and patterns for demonstration listed in the features above, that are also more suited to enterprise applications rather than small apps.
