package models

type Item struct {
	Id          int64  `json:"id"`
	Uid         string `json:"uid"`
	Name        string `json:"name"`
	Content     string `json:"content"`
	CreatedDate int64  `json:"created_date"`
	CreatedById string `json:"created_by_id"`
}
