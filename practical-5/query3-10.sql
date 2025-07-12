SELECT s.given_name, s.family_name, s.program, sub.subject, sub.faculty FROM Students s
INNER JOIN Enrolments e ON s.student_id = e.student_id
INNER JOIN Subjects sub ON sub.subject_code = e.subject_code
WHERE sub.faculty <> 'ECMS';