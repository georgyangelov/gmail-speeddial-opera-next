function update() {
	$num = $('#num');

	$.get('https://mail.google.com/mail/feed/atom', function(data) {
		$feed = $(data);
		num_unread = $feed.find('entry').length;

		if (num_unread > 0) {
			$('#cont').removeClass('no-unread').addClass('unread');

			$num.text(num_unread);
		}
		else {
			$('#cont').removeClass('unread').addClass('no-unread');
		}
	});

}

update();

setInterval(function() {
	update();
}, 60*1000);
