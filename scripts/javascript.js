	function randomizeGraph() {
		var name = $('#text-input').val();
		// var ran = Math.random() * 100;
		var ran = kiwishness(name);
		var t = getquote(ran);
		$('#maintext').html(t);
		setTimeout(function () {
	    chart.load({
	        columns: [['data', ran]]
	    });
	}, 0);
	}

	function kiwishness(name) {
		var strlen = name.length;
		if (strlen <= 2) {
			return Math.random() * 20 + 80;
		} else if (strlen == 3) {
			return Math.random() * 30 + 70;
		} else {
			return Math.random() * 70;
		}
	}

	function getquote(percent) {
		if (percent < 10) {
			return "You're definitely Kiwi. You should go and buy a house when you like, Labour are going to stop people with Chinese sounding last names from buying houses so it will make houses cheap.";
		} else if (percent < 20) {
			return "You’re really Kiwi - good on you, grab a dozen beers and lay down some Number 8 wire at the edge of your property if you’re having an open home - only proper Kiwis know how to get past Number 8 wire.";
		} else if (percent < 30) {
			return "You’re sort of Kiwi";
		} else if (percent < 40) {
			return "Based on that surname you’re Kiwi enough. We think you’re pushing it though but we’ll give you a pass on this occasion.";
		} else if (percent < 50) {
			return "This is touch and go, on the balance we’ll give you the benefit of the doubt.";
		} else if (percent < 60) {
			return "Our dataset from a real estate agency suggests you might, in fact, be Chinese as your last name is a bit Chinese sounding, to us.";
		} else if (percent < 70) {
			return "Ok, on the balance of probabilities you’re Chinese - which really means your name sounds Chinese (we are hoping to build in a profile picture submission feature which will assist our Kiwi-o-meter in working out whether your name sounds Chinese and you look Chinese)";
		} else if (percent < 80) {
			return "Your name is relatively Chinese sounding, please don’t rock up to any open homes or auctions under a Labour Government";
		} else if (percent < 90) {
			return "If we’re being honest our data isn’t that reliable, it’s from a small sample and we’ve taken a big punt on this, but we’re confident in two things: 1. Labour will win the next election and, 2. you are pretty Chinese! Therefore no house buying from you please. We need Kiwis with Kiwi sounding names buying houses.";
		} else {
			return "OMG YOU ARE SO CHINESE SOUNDING, stop buying all the houses in Auckland. OMG it is so bad, Labour are so angry!! GRrrr.";
		}
	}
