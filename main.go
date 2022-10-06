package main

import (
	user "note/app/conntrollers"
	middleware "note/app/middlewares"
	"strconv"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cache"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"

	"log"

	lop "github.com/samber/lo/parallel"
)

func main() {
	// 启动 web 服务器
	app := fiber.New(fiber.Config{})

	lop.Map([]int64{1, 2, 3, 4}, func(x int64, _ int) string {
		return strconv.FormatInt(x, 10)
	})

	app.Use(cors.New())

	app.Use(cache.New(cache.Config{
		Next: func(c *fiber.Ctx) bool {
			return c.Query("refresh") == "true"
		},
		Expiration:   30 * time.Minute,
		CacheControl: true,
	}))

	authApi := app.Group("/api/auth", logger.New())
	userApi := app.Group("/api/user", logger.New())
	messageApi := app.Group("/api/message", logger.New())

	userApi.Use(middleware.Protected())
	messageApi.Use(middleware.Protected())

	// 注册鉴权 api
	user.AuthController(authApi)

	// 注册消息 api

	log.Fatalln(app.Listen(":8972"))
}
