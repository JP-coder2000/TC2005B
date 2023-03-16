-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 16-03-2023 a las 16:06:36
-- Versión del servidor: 5.7.34
-- Versión de PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `museo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pinturas`
--

CREATE TABLE `pinturas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `autor` varchar(100) NOT NULL,
  `imagen` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pinturas`
--

INSERT INTO `pinturas` (`id`, `nombre`, `autor`, `imagen`) VALUES
(1, 'La Mona Lisa', 'Leonardo DaVinci', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8xujxeDqBwumIYPrfkSzm9k31o3O-TWKVtWyi_zEMCoIoycmvMgGnU6rxRt6QmWzIU&usqp=CAU'),
(2, 'La ultima cena', 'Leonardo DaVinci', 'https://cnnespanol.cnn.com/wp-content/uploads/2019/11/02-most-famous-paintings-last-supper.jpg'),
(3, 'La noche estrellada', 'Vincent Van Gogh', 'https://cnnespanol.cnn.com/wp-content/uploads/2019/11/03-most-famous-paintings-starry-night-restricted.jpg'),
(4, 'El grito', 'Edvard Munch', 'https://cnnespanol.cnn.com/wp-content/uploads/2019/11/04-most-famous-paintings-the-scream-restricted.jpg'),
(5, 'Guernica', 'Pablo Picasso', 'https://cnnespanol.cnn.com/wp-content/uploads/2019/11/05-most-famous-paintings-guernica.jpg'),
(14, 'El beso', 'Gustav Klimt', 'https://cnnespanol.cnn.com/wp-content/uploads/2019/11/06-most-famous-paintings-the-kiss-restricted.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `privilegios`
--

CREATE TABLE `privilegios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `privilegios`
--

INSERT INTO `privilegios` (`id`, `nombre`, `created_at`) VALUES
(3, 'Admin', '2023-03-16 15:34:02'),
(4, 'Worker', '2023-03-16 15:34:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` varchar(400) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`, `descripcion`, `created_at`) VALUES
(3, 'Juanpablo', 'Admin', '2023-03-16 15:33:11'),
(4, 'Santiago', 'Worker', '2023-03-16 15:33:11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_privilegio`
--

CREATE TABLE `rol_privilegio` (
  `idRol` int(11) NOT NULL,
  `idPrivilegio` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `rol_privilegio`
--

INSERT INTO `rol_privilegio` (`idRol`, `idPrivilegio`, `created_at`) VALUES
(3, 3, '2023-03-16 15:34:29'),
(4, 4, '2023-03-16 15:34:29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(400) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `username` varchar(40) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `password` varchar(400) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `username`, `password`, `created_at`) VALUES
(3, 'JuanPablo', 'JuanPablo', '$2a$12$aWkUEMVLgqUBNj7KVnBvluhLZVwNRNDuk28wbsAAjMi1pv2Ec8mAK', '2023-03-16 03:03:58'),
(4, 'Santiago', 'Santiago', '$2a$12$.o4dA//gEDjdWilerWRfHOsXpOS22.VqNjaHlGZuYXP86teEvDQg2', '2023-03-16 03:06:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_rol`
--

CREATE TABLE `usuario_rol` (
  `idUsuario` int(11) NOT NULL,
  `idRol` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `usuario_rol`
--

INSERT INTO `usuario_rol` (`idUsuario`, `idRol`, `created_at`) VALUES
(3, 3, '2023-03-16 15:37:10'),
(4, 4, '2023-03-16 15:37:10');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pinturas`
--
ALTER TABLE `pinturas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `privilegios`
--
ALTER TABLE `privilegios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rol_privilegio`
--
ALTER TABLE `rol_privilegio`
  ADD PRIMARY KEY (`idRol`,`idPrivilegio`),
  ADD KEY `idPrivilegio` (`idPrivilegio`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indices de la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD KEY `usuario_rol_ibfk_1` (`idUsuario`),
  ADD KEY `usuario_rol_ibfk_2` (`idRol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pinturas`
--
ALTER TABLE `pinturas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `privilegios`
--
ALTER TABLE `privilegios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `rol_privilegio`
--
ALTER TABLE `rol_privilegio`
  ADD CONSTRAINT `rol_privilegio_ibfk_1` FOREIGN KEY (`idRol`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `rol_privilegio_ibfk_2` FOREIGN KEY (`idPrivilegio`) REFERENCES `privilegios` (`id`);

--
-- Filtros para la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD CONSTRAINT `usuario_rol_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `usuario_rol_ibfk_2` FOREIGN KEY (`idRol`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
