package health

import (
	"encoding/json"
	"net/http"
	"time"
)

// Response describes the payload returned by the health endpoint.
type Response struct {
	Status    string    `json:"status"`
	Timestamp time.Time `json:"timestamp"`
}

// Handler reports a simple ok status for readiness checks.
func Handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	resp := Response{Status: "ok", Timestamp: time.Now().UTC()}

	if err := json.NewEncoder(w).Encode(resp); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
