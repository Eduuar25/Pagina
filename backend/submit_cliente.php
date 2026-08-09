<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido. Usa POST.']);
    exit;
}

$host = '127.0.0.1';
$db   = 'chichi_turbo';
$user = 'tu_usuario';
$pass = 'tu_contraseña';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'No se puede conectar a la base de datos.', 'detalle' => $e->getMessage()]);
    exit;
}

$nombre = trim($_POST['nombre'] ?? '');
$email = trim($_POST['email'] ?? '');
$evento = trim($_POST['evento'] ?? '');
$mensaje = trim($_POST['mensaje'] ?? '');
$telefono = trim($_POST['telefono'] ?? '');

if ($nombre === '' || $email === '' || $evento === '') {
    http_response_code(422);
    echo json_encode(['error' => 'Nombre, correo y tipo de evento son obligatorios.']);
    exit;
}

try {
    $stmt = $pdo->prepare('INSERT INTO clientes (nombre, email, evento, mensaje, telefono) VALUES (?, ?, ?, ?, ?)');
    $stmt->execute([$nombre, $email, $evento, $mensaje, $telefono]);
    echo json_encode(['success' => true, 'id' => $pdo->lastInsertId()]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Fallo al guardar el cliente.', 'detalle' => $e->getMessage()]);
}
