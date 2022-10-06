package databases

import (
	"github.com/jmoiron/sqlx"
)

var SqliteClient *sqlx.DB

func init() {
	SqliteClient = SqliteConnect()
}
