CREATE TABLE expenses (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	reason VARCHAR(50) NOT NULL,
	amount INT NOT NULL,
    date TIMESTAMP NOT NULL
);

INSERT INTO expenses (
    reason,
    amount,
    date
) VALUES ('clothes', 250, CURRENT_TIMESTAMP);

SELECT id, reason, amount, TO_CHAR(date, 'yyyy-MM-dd HH24:MI:SS') as date FROM expenses;