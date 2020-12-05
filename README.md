# patient-registration exercise for Done

## Usage

### Go Backend

Navigate to `go` subdirectory

Run `go run main.go`

### React Frontend

Navigate to `react` subdirectory

Run `yarn install` to install dependencies

Run `yarn start` to initialize dev server

## Summary

React front-end built using [chakra-ui](https://chakra-ui.com/) as a component library. Also using [react-router for navigation, react-hook-form for forms, and little-state-machine for state management of the multi-page form. 

Go API built using `struct` as a dummy database.

Due to the short nature of this exercise I opted for a simple implementation without using tools that would be overkill for this specific use-case. If this was a production project I would at minimum do the following:

- Proper auth on both the backend and frontend
- Use a more robust database that is HIPAA/privacy compliant
- Use a more advanced state management library such as redux
- Extensive form validation for the registration flow
- Add fully working photo upload functionality
- Better responsive navigation for the landing page header as well as paying more detail to styling overall
