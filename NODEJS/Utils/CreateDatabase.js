module.exports = (connection) => {

/*

CREATE TABLE `users` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `username` varchar(100) NOT NULL,
 `email` varchar(100) NOT NULL,
 `password` varchar(100) NOT NULL,
 `settings` text,
 PRIMARY KEY (`id`)
)

CREATE TABLE `templates` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `content` text NOT NULL,
 PRIMARY KEY (`id`)
) 

CREATE TABLE `campaigns` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `user_id` int(11) NOT NULL,
 `name` varchar(100) NOT NULL,
 `created_at` date NOT NULL,
 `template_id` int(11) NOT NULL,
 `tags` int(11) NOT NULL,
 `settings` text,
 PRIMARY KEY (`id`)
)

CREATE TABLE `audiences` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `user_id` int(11) NOT NULL,
 `email` varchar(100) NOT NULL,
 `firstname` varchar(100) NOT NULL,
 `lastname` varchar(100) NOT NULL,
 `tags` text NOT NULL,
 PRIMARY KEY (`id`)
)

CREATE TABLE `analytics` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `campaign_id` int(11) NOT NULL,
 `results` text NOT NULL,
 PRIMARY KEY (`id`)
)

*/

}