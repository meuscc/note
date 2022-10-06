package user

import (
	"fmt"
	"note/app/config"
	"note/app/dao"
	"note/app/databases"
	"note/app/models"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
	gonanoid "github.com/matoous/go-nanoid/v2"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Test struct {
	DocId primitive.ObjectID `json:"_id" bson:"_id"`
	Name  int32              `json:"name" bson:"name"`
}

func AuthController(api fiber.Router) {
	api.Get("/test", func(ctx *fiber.Ctx) error {
		return ctx.SendString("经济情况还行吧")
	})
	// 注册
	// 1. 匿名注册
	//   a. 有设备 id 发送 设备 id,
	//   b. 没有设备 id 生成客户端存储持久 id
	//   c. 服务段拿到 匿名 id 后生成 用户(用户名 用户ID 用户密码)
	// 2. 邮箱注册
	// 3. 电话注册
	api.Post("/register", func(c *fiber.Ctx) error {
		uid, _ := gonanoid.New()

		tx := databases.SqliteClient.MustBegin()
		_, err := tx.NamedExec("INSERT INTO tb_user (uid, username, password) VALUES (:uid, :username, :password)", &models.User{
			Username: "99",
			Password: "99",
			Uid:      uid,
		})
		_ = tx.Commit()
		if err != nil {
			return err
		}

		res := &struct {
			*dao.Res
			Messag2 string `json:"message"`
		}{
			Res: &dao.Res{},
		}

		return c.JSON(res)
	})

	// 登录
	// 1. 匿名登录
	//   a. 有设备 id 发送 设备 id,
	// 2. 邮箱登录
	// 3. 电话登录
	// 4. 用户ID 登录
	api.Post("/login", func(c *fiber.Ctx) error {

		type UserResult struct {
			models.User
			AccessToken string `json:"access_token"`
		}

		p := &UserResult{}

		if err := c.BodyParser(p); err != nil {
			fmt.Println(err)
			return err
		}

		if err := databases.SqliteClient.Get(p, "SELECT id, uid FROM tb_user WHERE username=? AND password=?", p.Username, p.Password); err != nil {
			return c.SendStatus(fiber.StatusUnauthorized)
		}

		token := jwt.New(jwt.SigningMethodHS256)

		claims := token.Claims.(jwt.MapClaims)
		claims["id"] = p.Id
		claims["username"] = p.Username
		claims["admin"] = true
		claims["exp"] = time.Now().Add(time.Hour * 72).Unix()

		accessToken, err := token.SignedString([]byte(config.AccessTokenSecret))
		if err != nil {
			return c.SendStatus(fiber.StatusInternalServerError)
		}

		p.AccessToken = accessToken
		return c.JSON(p)
	})
}
