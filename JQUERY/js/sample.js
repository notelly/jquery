$(document).ready(function(){
    //=DOMcontentedLoad
$.ajax({
    url: 'data/table_info.json',
    dataType : 'json',
    success : function(data){
        //테이블 생성
        let table = $('<table/>'); //얘가 핵심. $<> jquery 에서 생성자 함수라고 생각하면 된다.
        // 이걸 기반으로 돔을 제어하는 역할을 한다. jquery는 메소드를 사용해서 접근 할 수 밖에 없다.
        // js 와 jquery 두개 혼용해서 쓸때는 충돌나지 않도록 해주어야한다.
        // ex) forEach = each 
        //헤더 생성
        let trTag = $('<tr/>');
        for(let field in data[0]){
            let th = $('<th/>').text(field);
            trTag.append(th);
        }
        table.append(trTag);
        //바디 생성
        $(data).each(function(idx, obj){
            trTag = $('<tr/>');
            
            for(let field in data[0]){
                let td = $('<td/>').text(obj[field]);
                trTag.append(td);
            }
            
            table.append(trTag);
        })
        
        
        //DOM Tree 에 등록
        $('#app').append(table);
        //검색을 해 올 때도 #app = querySeletor 와 동일하다.
        
    },
    error : function(reject){
        console.log(reject);
    }

})



});