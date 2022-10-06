package models

type Type struct {
	Id       int64  `json:"id"`
	Uid      string `json:"uid"`
	Name     string `json:"name"`
	ParentId string `json:"parent_id"`
}
