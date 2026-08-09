-- Base de datos para CHICHI TURBO
CREATE DATABASE IF NOT EXISTS `chichi_turbo`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE `chichi_turbo`;

CREATE TABLE IF NOT EXISTS `clientes` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `evento` VARCHAR(150) NOT NULL,
  `mensaje` TEXT,
  `telefono` VARCHAR(30) DEFAULT NULL,
  `creado_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_email` (`email`),
  INDEX `idx_evento` (`evento`)
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_unicode_ci;
