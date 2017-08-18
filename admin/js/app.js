$(document).ready(function () {

    CommonHTML.init();
    sidebarActive();
    $('#admin-table').DataTable({
        "pageLength": 5,
        "lengthChange": false,
        searching: false
    });
});

var util = new CommonUtil();
function sidebarActive() {
    // goes by order of sidebar item
    var urlFileNameWithExt = util.getFilename();
    var $sidebarMenuItem = $(".templatemo-sidebar-menu li");
    if (urlFileNameWithExt === util.pageName[0].name) {
        $sidebarMenuItem.eq(0).addClass('active');
    } else if (urlFileNameWithExt === util.pageName[1].name) {
        $sidebarMenuItem.eq(1).addClass('active');
    } else if (urlFileNameWithExt === util.pageName[2].name) {
        $sidebarMenuItem.eq(2).addClass('active');
    } else if (urlFileNameWithExt === util.pageName[3].name) {
        $sidebarMenuItem.eq(3).addClass('active');
    }
}
