SELECT users.name, COUNT(orders.id) AS order_count
FROM users
LEFT JOIN orders ON orders.user_id = users.id
WHERE users.active = TRUE
GROUP BY users.name
HAVING COUNT(orders.id) > 0
ORDER BY order_count DESC;
