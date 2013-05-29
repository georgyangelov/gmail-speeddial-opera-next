function update() {
	$num = $('#num');

	$.get('https://mail.google.com/mail/feed/atom', function(data) {
		$feed = $(data);
		num_unread = $feed.find('fullcount').text();

		if (num_unread >= 100) {
			$('#num').addClass('many');
		}
		else {
			$('#num').removeClass('many');
		}

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
