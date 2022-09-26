module.exports = {
    home:   function(trs) {
        return `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
            <title>기아 타이거즈</title>
            <style>
                th, td  { text-align: center }
            </style>
        </head>
        <body>
            <div class="container-fluid p-5 bg-primary text-white text-center">
                <h1>기아 타이거즈 선수단</h1>
            </div>
            <div class="container mt-3">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8">
                        <table class="table">
                            <tr>
                                <th>ID</th>
                                <th>선수명</th>
                                <th>백넘버</th>
                                <th>포지션</th>
                            </tr>
                            ${trs}
                        </table>
                    </div>
                    <div class="col-2"></div>
                </div>
            </div>
        </body>
        </html>        
        `;
    },

    trsGen: function(rows) {
        let trs = '';
        for (let row of rows) {
            trs += '<tr>';
            trs += `<td>${row.id}</td><td>${row.player}</td>`;
            trs += `<td>${row.backNo}</td><td>${row.position}</td>`;
            trs += '</tr>\n';
        }
        return trs;
    }
}