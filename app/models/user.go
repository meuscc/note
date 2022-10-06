package models

type User struct {
	Id       int64  `json:"id"`
	Uid      string `json:"uid"`
	Username string `json:"username"`
	Password string `json:"password"`
}
