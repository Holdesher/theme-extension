package main

import "fmt"

type User struct {
	Name   string
	Active bool
}

func greeting(user User) string {
	return fmt.Sprintf("Hello, %s!", user.Name)
}

func main() {
	users := []User{{Name: "Alice", Active: true}, {Name: "Bob"}}
	for _, user := range users {
		if user.Active {
			fmt.Println(greeting(user))
		}
	}
}
