package databases

import (
	"github.com/jmoiron/sqlx"
	_ "github.com/mattn/go-sqlite3"
	"log"
)

func SqliteConnect() *sqlx.DB {
	Db, err := sqlx.Connect("sqlite3", "data.db")
	if err != nil {
		log.Fatalln(err)
	}

	return Db
}
