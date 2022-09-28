const dm = require('./걸그룹db');

/* // 1. 걸그룹 리스트 조회

dm.getList(rows => {
    console.log('1. 걸그룹리스트 조회')
    for (let row of rows) {
        console.log(row.gid, row.girlGroup, row.debutDate, row.title);
    }
    console.log('----------------------------------------------')
});

// 2. 송리스트 조회
dm.songList(rows => {
    console.log('2. 송리스트조회')
    for (let row of rows) {
        console.log(row.sid, row.title, row.debutDate, row.name);
    }
    console.log('----------------------------------------------')
});

//3. 걸그룹 gid 검색
dm.getGG(5, rows => {
    for (let row of rows) {
        console.log('3. 걸그룹 gid 검색')
        console.log(row.gid, row.girlGroup, row.debutDate, row.title);
    }
    console.log('----------------------------------------------')
});

//4. SONG sid 검색
dm.getSong(101, rows => {
    for (let row of rows) {
        console.log('4. song sid 검색')
        console.log(row.sid, row.title, row.lyrics, row.name);
    }
    console.log('----------------------------------------------')
}); */

/* //5. 걸그룹 추가
dm.updateGG(['테스트3','2022-12-24', 155], () => {
    dm.getList(rows => {
        for (let row of rows) {
            console.log(row.gid, row.girlGroup, row.debutDate, row.title);
        }
    });
}); */

//6. 걸그룹 수정

//7. 걸그룹 삭제
dm.deleteGG(1026, () => {
    dm.getList(rows => {
        for (let row of rows) {
            console.log(row.gid, row.girlGroup, row.debutDate, row.title);
        }
    });    
})

//8. 송추가
dm.updateSong(['테스트3','메롱메롱', '메롱메롱이야'], () => {
    dm.getList(rows => {
        for (let row of rows) {
            console.log(row.sid, row.title, row.lyrics);
        }
    });
});

//9. 송수정

//10. 송삭제
dm.deleteGG(1, () => {
    dm.songList(rows => {
        for (let row of rows) {
            console.log(row.sid, row.title, row.lyrics);
        }
    });    
})