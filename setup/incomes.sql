CREATE TABLE incomes (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	reason VARCHAR(50) NOT NULL,
	amount INT NOT NULL,
    date TIMESTAMP NOT NULL
);

INSERT INTO incomes (
    reason,
    amount,
    date
) VALUES ('salary', 2000, CURRENT_TIMESTAMP);

SELECT id, reason, amount, TO_CHAR(date, 'yyyy-MM-dd HH24:MI:SS') as date FROM incomes;

DELETE FROM incomes WHERE id = 1

update incomes set reason = 'business', amount = 500 WHERE id = 3;