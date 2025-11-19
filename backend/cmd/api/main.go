package main

import (
	"context"
	"log"
	"os"
	"os/signal"
	"syscall"

	"github.com/PumpPatrol/backend/internal/config"
	"github.com/PumpPatrol/backend/internal/server"
)

func main() {
	logger := log.New(os.Stdout, "[backend] ", log.LstdFlags|log.Lshortfile)

	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()

	httpCfg := config.HTTPFromEnv()
	srv := server.New(httpCfg)

	logger.Printf("starting http server on %s", httpCfg.Addr())

	if err := srv.Run(ctx); err != nil {
		logger.Fatalf("server stopped: %v", err)
	}

	logger.Println("server exited cleanly")
}
