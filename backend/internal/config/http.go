package config

import (
	"net"
	"os"
)

// HTTPConfig holds http server configuration derived from environment variables.
type HTTPConfig struct {
	Host string
	Port string
}

// HTTPFromEnv builds an HTTPConfig using environment variables with sensible defaults.
func HTTPFromEnv() HTTPConfig {
	host := getEnv("HTTP_HOST", "0.0.0.0")
	port := getEnv("HTTP_PORT", "8080")

	return HTTPConfig{Host: host, Port: port}
}

// Addr returns the host:port combination for the HTTP server.
func (c HTTPConfig) Addr() string {
	return net.JoinHostPort(c.Host, c.Port)
}

func getEnv(key, fallback string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}

	return fallback
}
