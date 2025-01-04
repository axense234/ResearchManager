get query params(1)

setup query, orderBy, include objects(2)

build query object by query params(3)
build orderBy object by query params(4)
build include object by query params(5)

apply query, orderBy, include objects to client query(6)

strategy:

middleware: (1), (2), (3), (4), (5)
service: get the query, orderBy, include objects from req.customQuery, req.customOrderBy, req.customInclude
service: (6)
