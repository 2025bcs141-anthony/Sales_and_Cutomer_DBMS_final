<?php
// db.php - backward-compatible shim to includes/db.php
$inc = __DIR__ . '/includes/db.php';
if (file_exists($inc)) {
    require_once $inc;
    return;
}

// Fallback: attempt direct PDO connection (safe, shows error on failure)
$host = '127.0.0.1';
$db   = 'sales_and_customer_dbms';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$opt = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];
try {
    $pdo = new PDO($dsn, $user, $pass, $opt);
} catch (PDOException $e) {
    http_response_code(500);
    echo '<h1>Database connection error</h1>';
    echo '<p>' . htmlspecialchars($e->getMessage()) . '</p>';
    exit;
}
