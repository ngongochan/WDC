SELECT given_name, family_name FROM Students s
INNER JOIN Enrolments e ON s.student_id = e.student_id
INNER JOIN Subjects sub ON sub.subject_code = e.subject_code
WHERE subject = 'Web and Database Computing';