let table = $('table#group');
let input = $('#groupName');
let gName = $(input).val();
console.log(table);
console.log(input);
console.log(gName);

$('button').click(function(){
    table.append('<tr><td class="g-name"></td><td class="p-item"></td><td class="edit"></td></tr>');
    $('td.g-name').append(gName);
    return false;
});
// console.log($('button'));

