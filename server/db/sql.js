let boardlist =
`select no,
title,
writer,
content,
created_date,
updated_date
from t_board_board`;

let boardInfo =
`select no,
title,
writer,
content,
created_date,
updated_date
from t_board_board
where no = ?`;

let boardAdd =
`insert into t_board_board
set ?`;

let boardUpdate =
`update t_board_board
set ?
where no = ?`;

module.exports = {
    boardlist,
    boardInfo,
    boardAdd,
    boardUpdate
}