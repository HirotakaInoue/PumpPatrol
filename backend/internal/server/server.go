package server

import (
	"context"
	"errors"
	"log"
	"net/http"
	"time"

	"github.com/PumpPatrol/backend/internal/config"
	"github.com/PumpPatrol/backend/internal/health"
)

// Server wraps the http.Server to provide graceful shutdown behavior.
type Server struct {
	httpServer *http.Server
}

// New constructs a Server with sane timeouts and the base routes wired.
func New(cfg config.HTTPConfig) *Server {
	mux := http.NewServeMux()
	mux.HandleFunc("GET /healthz", health.Handler)

	srv := &http.Server{
		Addr:              cfg.Addr(),
		Handler:           mux,
		ReadHeaderTimeout: 5 * time.Second,
		ReadTimeout:       10 * time.Second,
		WriteTimeout:      10 * time.Second,
		IdleTimeout:       60 * time.Second,
	}

	return &Server{httpServer: srv}
}

// Run starts the HTTP server and blocks until the context is cancelled or an error occurs.
func (s *Server) Run(ctx context.Context) error {
	errCh := make(chan error, 1)

	go func() {
		err := s.httpServer.ListenAndServe()
		errCh <- err
	}()

	select {
	case <-ctx.Done():
		shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()

		if err := s.httpServer.Shutdown(shutdownCtx); err != nil {
			log.Printf("http shutdown error: %v", err)
			return err
		}

		if err := <-errCh; err != nil && !errors.Is(err, http.ErrServerClosed) {
			return err
		}

		return nil

	case err := <-errCh:
		if errors.Is(err, http.ErrServerClosed) {
			return nil
		}

		return err
	}
}
