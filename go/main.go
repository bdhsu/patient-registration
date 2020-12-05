package main

import (
	"fmt"
    "log"
	"net/http"
	"encoding/json"
	"github.com/gorilla/mux"
	"io/ioutil"
)

type User struct {
    Name string `json:"name"`
    Email string `json:"email"`
    Phone string `json:"phone"`
    DateOfBirth string `json:"dateOfBirth"`
    StreetAddress string `json:"streetAddress"`
    City string `json:"city"`
    State string `json:"state"`
    Zipcode string `json:"zipcode"`
    AppointmentTime string `json:"appointmentTime"`
}


var Users []User

func homePage(w http.ResponseWriter, r *http.Request){
    fmt.Fprintf(w, "Welcome to the HomePage!")
    fmt.Println("Endpoint Hit: homePage")
}

func returnAllUsers(w http.ResponseWriter, r *http.Request){
    fmt.Println("Endpoint Hit: returnAllUsers")
    json.NewEncoder(w).Encode(Users)
}

func createNewUser(w http.ResponseWriter, r *http.Request){
	fmt.Println("Endpoint Hit: createNewUser")
	reqBody, _ := ioutil.ReadAll(r.Body)
	var user User
	json.Unmarshal(reqBody, &user)
	Users = append(Users, user)

	json.NewEncoder(w).Encode(user)
}

func handleRequests() {
	myRouter := mux.NewRouter().StrictSlash(true)

    myRouter.HandleFunc("/", homePage)
	myRouter.HandleFunc("/users", returnAllUsers)
	myRouter.HandleFunc("/user", createNewUser).Methods("POST")
    log.Fatal(http.ListenAndServe(":10000", myRouter))
}

func main() {
	Users = []User{
		User{Name: "Jack Harlow", Email: "jack@example.com", Phone: "1234567890", DateOfBirth: "00/00/00", StreetAddress: "1 Infinite Loop", City: "Cupertino", State: "CA", Zipcode: "95014"},
		User{Name: "John Smith", Email: "john@smith.com", Phone: "6504567890", DateOfBirth: "11/11/11", StreetAddress: "2 Infinite Loop", City: "Cupertino", State: "CA", Zipcode: "95014"},
	}
    handleRequests()
}
