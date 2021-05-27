window.snake.customColor = function(settings = {}) {
	if(settings.rainbow === undefined)
		settings.rainbow = [ '#4E7CF6', '#5499C7', '#AF7AC5', '#E74C3C', '#F39C12', '#CCC31C', '#27AE60', ];
	if(settings.rainbowYinYang === undefined)
		settings.rainbowYinYang = [ '#808080', '#9E9E9E', '#808080', '#616161', ];
	
  const scripts = document.body.getElementsByTagName('script');
	for(let script of scripts) {
		const req = new XMLHttpRequest();
		req.open('GET', script.src);
		req.onload = function() {
			if(!this.responseText.includes('"#A2'))
				return;
				
			if(settings.gradient !== undefined)
				eval(
					this.responseText.match(
						/[a-zA-Z0-9_$]{1,6}[^]?=[^]?\[\["#4E7CF6","#17439F"\][^]*?\]\]/
					)[0].replace(
						/\[\[[^]*\]\]/,
						`["${settings.gradient.join(' ')}".split(' '),"${settings.gradient.join(' ')}".split(' '),"${settings.gradient.join(' ')}".split(' '),"${settings.gradient.join(' ')}".split(' '),"${settings.gradient.join(' ')}".split(' '),"${settings.gradient.join(' ')}".split(' '),"${settings.gradient.join(' ')}".split(' '),"${settings.gradient.join(' ')}".split(' '),"${settings.gradient.join(' ')}".split(' '),"${settings.gradient.join(' ')}".split(' '),"${settings.gradient.join(' ')}".split(' '),"${settings.gradient.join(' ')}".split(' '),"${settings.gradient.join(' ')}".split(' '),"${settings.gradient.join(' ')}".split(' '),"${settings.gradient.join(' ')}".split(' '),"${settings.gradient.join(' ')}".split(' '),"${settings.gradient.join(' ')}".split(' '),]`
					)
				);
			
			const c = this.responseText.match( 
				/[a-zA-Z0-9_$]{1,6}[^]?=[^]?"#4E7CF6 #5499C7 #AF7AC5 #E74C3C #F39C12 #CCC31C #27AE60"\.split\(" "\)/
			)[0];
			eval(
				c.replace(
					`"#4E7CF6 #5499C7 #AF7AC5 #E74C3C #F39C12 #CCC31C #27AE60"`,
					`"${settings.rainbow.join(' ')}"`
				)
			);
			eval(
				this.responseText.match(
					/[a-zA-Z0-9_$]{1,6}[^]?=[^]?\["#808080","#9E9E9E","#808080","#616161"\]/
				)[0].replace(
					/\["#808080","#9E9E9E","#808080","#616161"\]/,
					`'${settings.rainbowYinYang.join(' ')}'.split(' ')`
				)
			);
			const r0 = /0===this\.[a-zA-Z0-9_$]{1,6}\|\|10===this\.[a-zA-Z0-9_$]{1,6}/;
			const bb = this.responseText.match(r0)[0].match(/this\.[a-zA-Z0-9_$]{1,6}/)[0];
			const r1 = /var a=[a-zA-Z0-9_$]{1,6}\[this\.[a-zA-Z0-9_$]{1,6}\]/;
			const m = this.responseText.match(r1)[0];
			eval(
				this.responseText.match(
					/[a-zA-Z0-9_$]{1,6}\.prototype\.[a-zA-Z0-9_$]{1,6}=function\(\){[^}]*if\(0===this\.[a-zA-Z0-9_$]{1,6}\|\|10===this\.[a-zA-Z0-9_$]{1,6}\)[^]*return [a-zA-Z0-9_$]{1,6}\(this\)}/
				)[0].replace(
					r0,
					'false'
				).replace(
					r1,
					m.replace('var a=', `var a=10===${bb}?${c.match(/[a-zA-Z0-9_$]{1,6}/)[0]}:`)
				)
			);
		};
		req.send();
	}
  

	
};

window.snake.flag = function(...colors) {
	let a = [];
	for(let color of colors)
		for(let i = 0; i < 3; i++)
			a.push(color);
	return window.snake.customColor({ rainbow: a, });
};
