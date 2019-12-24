function initWin(win) {
	var html = $(win).html();
	var str = "<div style=\"background: #333399;overflow: hidden;\">\n" +
		"\t\t\t\t<div style=\"float: left;\">默认标题</div>\n" +
		"\t\t\t\t<div style=\"float: right;color: red;\">X</div>\n" +
		"\t\t\t</div>\n" +
		"\t\t\t<div style=\"background: salmon;overflow: hidden;\">" +
		html +
		"</div>";
	$(win).html(str);
}

$(function() {
	var win = $(".popularWin")[0];
	initWin(win);
})