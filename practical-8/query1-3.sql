SELECT c.first_name, c.last_name, r.rental_date FROM customer c
INNER JOIN rental r ON c.customer_id = r.customer_id
WHERE r.return_date IS NULL;