$(function() {
                var interval_id;
                var rand;
                // まだ未選択なもの一覧を配列にする
                for(var j = 0; j < 4; j++) {
                    var tr = $('<tr>');
                    for(var i = 1; i <= 4; i++) {
                        var td =$('<td>');
                        td.html(j * 4 + i);
                        tr.append(td);
                    }
                    $('#matrix').append(tr);
                }
                
                $('#start').click(function() {
                    $(this).prop('disabled', true);
                    interval_id = setInterval(function(){
                        $('td').removeClass('select');
                        rand = Math.floor(Math.random()*$('td').not('.selected').length);
                        $('td').not('.selected').eq(rand).addClass('select');
                    }, 100);
                });
                
                $('#stop').click(function() {
                    clearInterval(interval_id);
                    $('.select').removeClass('select').addClass('selected');
                    if($('.selected').length < 16) {
                        $('#start').prop('disabled', false);
                    }
                });
                
                $('#reset').click(function() {
                    clearInterval(interval_id);
                    $('td').removeClass('select');
                    $('td').removeClass('selected');
                    $('#start').prop('disabled', false);
                });
            });