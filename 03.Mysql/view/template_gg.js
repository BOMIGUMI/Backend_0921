module.exports = {
    home: function(trs) {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>기아 타이거즈</title>
            <style>
                th, tr { text-align: center }
            </style>
        </head>
        <body style="margin: 50px;">
            <h1>걸그룹 리스트</h1>
            <button onclick="location.href='/create'">추가</button>
            <hr>
            <table>
                <tr>
                    <th>sid</th>
                    <th>걸그룹 이름</th>
                    <th>데뷔일</th>
                    <th>히트곡 이름</th>
                </tr>
                ${trs}
            </table>
        </body>
        </html>
        `;
    },

    trsGen: function(rows) {
        let trs = '';
        for (let row of rows) {
            trs += '<tr>';
            trs += `<td>${row.gid}</td><td>${row.name}</td>`;
            trs += `<td>${row.debut}</td><td>${row.hit_song_id}</td>`;
            trs += `<td><a href="/update?id=${row.id}">수정</a>, 
                        <a href="/delete?id=${row.id}">삭제</a></td>`;
            trs += '</tr>';
        }
        return trs;
    },

    createForm: function() {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>걸그룹</title>
            <style>
                th, tr { text-align: center }
            </style>
        </head>
        <body style="margin: 50px;">
            <h1>걸그룹 리스트</h1>
            <button onclick="location.href='/'">홈으로</button>
            <hr>
            <form action="/create" method="post">
                <table>
                    <tr>
                        <td>gid</td><td><input type="text" name="gid"></td>
                    </tr>
                    <tr>
                        <td>그룹명</td><td><input type="text" name="name"></td>
                    </tr>
                    <tr>
                        <td>데뷔일</td><td><input type="text" name="debut"></td>
                    </tr>
                    <tr>
                        <td>히트곡명</td><td><input type="text" name="hit_song_id"></td>
                    </tr>
                    <tr>
                        <td colspan="2"><input type="submit" value="추가"></td>
                    </tr>
                </table>
            </form>
        </body>
        </html>
        `;
    },

    updateForm: function(gid, name, debut, hit_song_id) {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>걸그룹</title>
            <style>
                th, tr { text-align: center }
            </style>
        </head>
        <body style="margin: 50px;">
            <h1>걸그룹 리스트</h1>
            <button onclick="location.href='/'">홈으로</button>
            <hr>
            <form action="/update" method="post">
                <input type="hidden" name="id" value="${id}">
                <table>
                    <tr>
                        <td>gid</td><td><input type="text" name="gid" value="${gid}"></td>
                    </tr>
                    <tr>
                        <td>그룹명</td><td><input type="text" name="name" value="${name}"></td>
                    </tr>
                    <tr>
                        <td>데뷔일</td><td><input type="text" name="debut" value="${debut}"></td>
                    </tr>
                    <tr>
                        <td>히트곡명</td><td><input type="text" name="hit_song_id" value="${hit_song_id}"></td>
                    </tr>
                    <tr>
                        <td colspan="2"><input type="submit" value="수정"></td>
                    </tr>
                </table>
            </form>
        </body>
        </html>
        `;
    },
    deleteForm: function(id) {
        return `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <script>
                let answer = confirm('정말로 삭제하시겠습니까?');
                if (answer)
                    location.href = '/deleteConfirm?id=${id}';
                else
                    location.href = '/';
            </script>
        </body>
        </html>
        `;
    }
}