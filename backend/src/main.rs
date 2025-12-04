mod db;
mod handlers;
mod models;
mod routes;

use crate::db::db_connector::DBConnector;
use crate::routes::create_router;

#[tokio::main]
async fn main() {
    // Load environment variables
    dotenvy::dotenv().ok();

    // Create database connection pool
    let database_url =
        std::env::var("DATABASE_URL").expect("DATABASE_URL must be set in .env file");

    let db_connector = DBConnector::new_with_url(database_url).await;
    let router = create_router(db_connector.get_pool().clone());

    // run our app with hyper, listening globally on port 3000
    let listener = tokio::net::TcpListener::bind("0.0.0.0:8080").await.unwrap();
    axum::serve(listener, router).await.unwrap();
}
